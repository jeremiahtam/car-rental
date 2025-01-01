import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { MapModal } from "./MapModal";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { addCar, CarInCartProps, removeCar } from "../store/cart/cartSlice";
import { CarProps } from "../types/car-types";
import { amountPerWaitingDay, estimatedFare } from "../hooks/estimatedFare";
import moment from "moment";

interface BookCarFormProps {
  carInfo: CarProps;
}
export const BookCarForm = (props: BookCarFormProps) => {
  const carId = props.carInfo.id;

  const carsInCart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  /** check if car is in the cart */
  const [carInCart, setCarInCart] = useState<CarInCartProps | null>(null);
  useEffect(() => {
    const car = carsInCart.find((car) => car.id === Number(carId));
    if (car) setCarInCart(car);
    else setCarInCart(null);
  }, [carsInCart, carId]);

  /** Setup destination address */
  const [openMapModal, setOpenMapModal] = useState(false);
  const [locationType, setLocationType] = useState<
    "origin" | "destination" | null
  >(null);

  const [origin, setOrigin] = useState<google.maps.places.PlaceResult | null>(
    null
  );
  const [destination, setDestination] =
    useState<google.maps.places.PlaceResult | null>(null);

  const locationHandler = (address: any) => {
    if (locationType === "origin") setOrigin(address);
    else if (locationType === "destination") setDestination(address);
  };

  const [distance, setDistance] = useState<number>(0);
  const [journeyTime, setJourneyTime] = useState<string>("");

  useEffect(() => {
    const distanceHandler = async () => {
      if (origin !== null && destination !== null) {
        const directionsService = new google.maps.DistanceMatrixService();
        const response = await directionsService.getDistanceMatrix({
          origins: [origin.formatted_address] as string[],
          destinations: [destination.formatted_address] as string[],
          travelMode: "DRIVING" as google.maps.TravelMode,
        });
        setDistance(response.rows[0].elements[0].distance.value);
        setJourneyTime(response.rows[0].elements[0].duration.text);
      }
    };
    distanceHandler();
  }, [origin, destination]);

  const estimatedTotalCost = (
    roundTrip: boolean,
    pickupDate: Date,
    returnTripDate: null | Date
  ) => {
    /* Get waiting time cost*/
    let waitingCost = 0;
    if (roundTrip) {
      waitingCost = amountPerWaitingDay(pickupDate, returnTripDate, props.carInfo.waitAmountPerHour);
    }
    let fare = estimatedFare(distance, props.carInfo.costPerMeter);
    if (roundTrip) {
      fare = fare * 2;
    }
    const total = fare + waitingCost;
    return Math.round(total);
  };

  /** convert to naira display format */
  const naira = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          pickupLocation: carInCart
            ? carInCart.pickupLocation
            : origin?.formatted_address || "",
          dropOffLocation: carInCart
            ? carInCart.dropOffLocation
            : destination?.formatted_address || "",
          pickupDate: carInCart
            ? moment(carInCart.pickupDate).toDate()
            : new Date(),
          roundTrip: carInCart ? carInCart.roundTrip : false,
          returnTripDate: carInCart
            ? moment(carInCart.returnTripDate).toDate()
            : new Date(),
        }}
        validationSchema={Yup.object().shape({
          pickupLocation: Yup.string().required("This field is mandatory"),
          dropOffLocation: Yup.string().required("This field is mandatory"),
          pickupDate: Yup.string().required("This field is mandatory"),
          roundTrip: Yup.string().required("This field is mandatory"),
          returnTripDate: Yup.string().when("roundTrip", {
            is: true,
            then: (schema: Yup.Schema) =>
              schema.required("This field is mandatory"),
            otherwise: (schema: Yup.Schema) => schema.notRequired(),
          }),
        })}
        onSubmit={(values) => {
          const totalCost = estimatedTotalCost(
            values.roundTrip,
            values.pickupDate,
            values.returnTripDate
          );
          const newVal = {
            pickupDate: moment(values.pickupDate).toString(),
            returnTripDate: moment(values.returnTripDate).toString(),
            pickupLocation: values.pickupLocation,
            dropOffLocation: values.dropOffLocation,
            roundTrip: values.roundTrip,
          };
          const val = {
            ...newVal,
            ...{ totalCost },
          };
          // console.log(val);
          if (carInCart) {
            dispatch(removeCar(props.carInfo.id));
          } else {
            dispatch(addCar({ ...props.carInfo, ...val }));
          }
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className="">
              <div className="grid gap-x-3 gap-y-2 mb-2 md:grid-cols-2 lg:grid-cols-2">
                <div className="mb-1">
                  <label className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                    Pickup Location
                  </label>
                  <div className="text-sm text-gray-500 mb-2">
                    Pickup address
                  </div>
                  <input
                    name="pickupLocation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="e.g. 22, Lagos Street"
                    value={values.pickupLocation}
                    disabled={carInCart ? true : false}
                    onChange={() =>
                      setFieldValue("pickupLocation", origin?.formatted_address)
                    }
                    onClick={() => {
                      setOpenMapModal(true);
                      setLocationType("origin");
                    }}
                  />
                  <ErrorMessage
                    name="pickupLocation"
                    className="text-red-500 text-sm"
                    component={"div"}
                  />
                </div>
                <div className="mb-1">
                  <label className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                    Arrival location
                  </label>
                  <div className="text-sm text-gray-500 mb-2">
                    Destination address
                  </div>
                  <Field
                    value={values.dropOffLocation}
                    disabled={carInCart ? true : false}
                    onChange={() =>
                      setFieldValue(
                        "dropOffLocation",
                        origin?.formatted_address
                      )
                    }
                    onClick={() => {
                      setOpenMapModal(true);
                      setLocationType("destination");
                    }}
                    name="dropOffLocation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="e.g. 22, Lagos Street"
                  />
                  <ErrorMessage
                    name="dropOffLocation"
                    className="text-red-500 text-sm"
                    component={"div"}
                  />
                </div>
                <div className="mb-1 col-span-2">
                  <label className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                    Pickup Date
                  </label>
                  <div className="text-sm text-gray-500 mb-2">
                    Expected date of pickup
                  </div>
                  <DatePicker
                    name="pickupDate"
                    disabled={carInCart ? true : false}
                    selected={values.pickupDate}
                    onChange={(date: any) => setFieldValue("pickupDate", date)}
                    showTimeInput
                    timeInputLabel="Time:"
                    startDate={new Date()}
                    minDate={new Date()}
                    wrapperClassName="date-picker-wrapper"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="January 22, 2025 5:00 PM"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="pickupDate"
                    className="text-red-500 text-sm"
                    component={"div"}
                  />
                </div>
                <div className="mb-1 col-span-2">
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        name="roundTrip"
                        disabled={carInCart ? true : false}
                        checked={values.roundTrip}
                        onChange={() =>
                          setFieldValue("roundTrip", !values.roundTrip)
                        }
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="ms-2 text-sm">
                      <label
                        htmlFor="helper-checkbox"
                        className="font-medium text-gray-900 dark:text-gray-300"
                      >
                        Round Trip
                      </label>
                      <p
                        id="helper-checkbox-text"
                        className="text-xs font-normal text-gray-500 dark:text-gray-300"
                      >
                        Check if you would like the driver to wait and drive you
                        back.
                      </p>
                    </div>
                    <ErrorMessage
                      name="roundTrip"
                      className="text-red-500 text-sm"
                      component={"div"}
                    />
                  </div>
                </div>
                {values.roundTrip && (
                  <div className="mb-1 col-span-2">
                    <label className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                      Return Date
                    </label>
                    <div className="text-sm text-gray-500 mb-2">
                      Expected return date
                    </div>
                    <DatePicker
                      name="returnTripDate"
                      disabled={carInCart ? true : false}
                      selected={values.returnTripDate}
                      onChange={(date: any) =>
                        setFieldValue("returnTripDate", date)
                      }
                      startDate={new Date()}
                      minDate={new Date()}
                      timeInputLabel="Time:"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      showTimeInput
                      placeholderText="January 22, 2025 5:00 PM"
                      wrapperClassName="date-picker-wrapper"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <ErrorMessage
                      name="returnTripDate"
                      className="text-red-500 text-sm"
                      component={"div"}
                    />
                  </div>
                )}
                {journeyTime && (
                  <div className="ms-2 text-sm">
                    <div className="text-md text-gray-700">
                      Estimated Time :
                      <span className="font-bold">{journeyTime}</span>
                    </div>
                    <div className="text-md text-gray-700">
                      Estimated Cost :{" "}
                      <span>
                        {values.pickupDate &&
                          naira.format(
                            estimatedTotalCost(
                              values.roundTrip,
                              values.pickupDate,
                              values.returnTripDate
                            )
                          )}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-1">
                <button
                  type="submit"
                  className={`${
                    carInCart
                      ? "bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300"
                      : "bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300"
                  } focus:outline-none text-white font-medium rounded-lg text-sm px-8 py-3 me-2 mb-2 mt-8 dark:focus:ring-yellow-900`}
                >
                  {carInCart ? "Cancel Booking" : "Book Car"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <MapModal
        openMapModal={openMapModal}
        setOpenMapModal={() => setOpenMapModal(!openMapModal)}
        locationHandler={locationHandler}
      />
    </>
  );
};
