import React, { useState } from "react";
import SidebarNav from "../components/SidebarNav";
import Header from "../components/Header";
import TopFooter from "../components/TopFooter";
import MiddleFooter from "../components/MiddleFooter";
import BottomFooter from "../components/BottomFooter";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import PageSubHeading from "../components/PageSubHeading";
import GenericcCar from "../assets/images/GenericCar.png";
import { CgRemoveR } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { removeCar } from "../store/cart/cartSlice";
import { Link, useNavigate } from "react-router";

export const Checkout = () => {
  const carsInCart = useAppSelector((state) => state.cart.items);
  const totalCost = useAppSelector((state) => state.cart.totalAmount);
  const dispatch = useAppDispatch();

  /** sidebar controls */
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const handleSidenav = () => setIsSidenavOpen(!isSidenavOpen);

  /** convert to naira display format */
  const naira = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  const navigate = useNavigate();

  return (
    <div className="">
      <SidebarNav handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <Header handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <PageSubHeading subheading="Book Your Ride" />
      <div className="px-4 my-12">
        <div className="container px-4 lg:px-0 mx-auto flex flex-col-reverse md:flex-row gap-x-12 my-8">
          <div className="mb-2 md:basis-3/5">
            <div className="font-bold text-xl">Booking Information</div>
            <div className="text-sm text-gray-500 mb-6">
              Finalise your bookings by providing us more information
            </div>
            {false && (
              <Formik
                enableReinitialize
                initialValues={{
                  firstName: "",
                  lastName: "",
                  address: "",
                }}
                validationSchema={Yup.object().shape({
                  firstName: Yup.string().required(),
                  lastName: Yup.string().required(),
                  address: Yup.string().required(),
                })}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
                }}
              >
                {({ errors, touched, values }) => (
                  <Form>
                    <div className="">
                      <div className="grid gap-x-3 gap-y-2 mb-6 md:grid-cols-2 lg:grid-cols-2">
                        <div className="mb-1">
                          <label className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                            First Name
                          </label>
                          <input
                            name="firstName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="First Name"
                            required
                            value={values.firstName}
                          />
                          <ErrorMessage
                            name="firstName"
                            className="text-red-500 text-sm"
                            component={"div"}
                          />
                        </div>
                        <div className="mb-1">
                          <label className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                            Last Name
                          </label>
                          <input
                            name="firstName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Last Name"
                            required
                            value={values.lastName}
                          />
                          <ErrorMessage
                            name="lastName"
                            className="text-red-500 text-sm"
                            component={"div"}
                          />
                        </div>
                        <div className="mb-1 col-span-2">
                          <label className="text-sm font-semibold text-gray-900 dark:text-gray-300">
                            Address
                          </label>
                          <textarea
                            rows={2}
                            name="address"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Address"
                            required
                            value={values.address}
                          />
                          <ErrorMessage
                            name="address"
                            className="text-red-500 text-sm"
                            component={"div"}
                          />
                        </div>
                      </div>
                      <div className="mb-1">
                        {/* <button
                        type="button"
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                      >
                      </button> */}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
            <div className="">
              <div className="text-gray-500 mb-5 text-lg">
                You have to login or signup to finalise your order.
              </div>
              <div className="flex flex-row gap-3">
                <button
                  type="button"
                  className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-6 py-2.5 dark:focus:ring-yellow-900"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="md:basis-2/5">
            <div className="py-4 rounded-md">
              <div className="font-bold text-xl">Rental Summary</div>
              <div className="text-sm text-gray-500 mb-2">
                Prices may change depending on the final negotiations with our
                customer service provider
              </div>
              <div className="mb-2">
                {carsInCart.map((car, index) => {
                  return (
                    <div key={index}>
                      <div className="flex flex-row items-center gap-3 px-3 py-1 relative">
                        <CgRemoveR
                          size={20}
                          className="absolute top-2 right-2 text-gray-400 hover:text-rose-500"
                          onClick={() => dispatch(removeCar(car.id))}
                        />
                        <img src={GenericcCar} alt="" className="w-32 h-32" />
                        <div className="w-full text-right">
                          <div className="text-slate-900 text-lg">
                            {car.brand}
                          </div>
                          <div className="text-slate-400 text-sm">
                            {car.model}
                          </div>
                          <div className="text-slate-400 text-sm">
                            &#8358;{car.costPerMeter}/meter
                          </div>
                        </div>
                      </div>
                      <div className="w-full border-solid border-b-[1px] border-slate-100"></div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row justify-between items-center">
                {carsInCart.length === 0 ? (
                  <div className="p-4 bg-gray-50 text-gray-500 rounded-md border-[1px] border-solid border-gray-100">
                    Your cart is empty. Click{" "}
                    <Link
                      to={"/our-cars"}
                      className="text-gray-600 font-semibold"
                    >
                      here{" "}
                    </Link>
                    to choose from our fleet of cars.
                  </div>
                ) : (
                  <>
                    <div className="">
                      <div className="text-lg font-bold">Total price</div>
                      <div className="text-gray-700">
                        Overall cost for entire trip
                      </div>
                    </div>
                    <div className="text-md font-bold">
                      {naira.format(totalCost)}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopFooter />
      <MiddleFooter />
      <BottomFooter />
    </div>
  );
};
