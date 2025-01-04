import { useEffect, useState } from "react";
import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import BottomFooter from "../components/BottomFooter";
import MiddleFooter from "../components/MiddleFooter";
import TopFooter from "../components/TopFooter";
import PageHeading from "../components/PageHeading";
import Header from "../components/Header";
import { contactUsPageBreadcrumbsArray } from "../data/breadcrumbsArrays";
import CarBrands from "../components/CarBrands";
import SidebarNav from "../components/SidebarNav";
import { Spinner } from "flowbite-react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { useNavigate } from "react-router";

function Contact() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const handleSidenav = () => setIsSidenavOpen(!isSidenavOpen);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const userInfoData = useAppSelector(
    (state) => "" //state.userInfo.loggedInUserData
  );
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [contactEmailFeedback, setContactEmailFeedback] = useState<
    null | string
  >(null);

  const contactEmailHandler = async (
    values: any,
    setSubmitting: any,
    setErrors: any
  ) => {
    // try {
    //   const res = await axios.post(`${baseUrl}/api/school-login`, values, {
    //     headers: {
    //       Accept: "application/json",
    //     },
    //     timeout: 30000,
    //   });
    //   const resData = res.data;
    //   console.log(resData);
    //   if (resData.success === false) {
    //     if (resData.errors !== undefined) {
    //       setErrors(resData.errors);
    //     } else {
    //     }
    //     setContactEmailFeedback(resData.message);
    //   } else {
    //     // dispatch(insertUserData(resData.data.token));
    //     navigate("/dashboard");
    //   }
    // } catch (e: any) {
    //   console.log(e);
    //   if (e.code === "ECONNABORTED") {
    //     setSubmitting(false);
    //   }
    //   if (e?.response?.data !== undefined) {
    //     const errorData = e.response.data;
    //     setErrors(errorData.errors);
    //     if (errorData.message === "Unauthenticated.") {
    //       // dispatch(deleteUserData());
    //     }
    //   }
    // }
    // setSubmitting(false);
  };

  return (
    <div>
      <SidebarNav handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <Header handleSidenav={handleSidenav} isSideNavOpen={isSidenavOpen} />
      <PageHeading
        breadcrumbsArray={contactUsPageBreadcrumbsArray}
        title="Contact Us"
      />
      <div className="px-4 lg:px-0 mb-5">
        <div className="container mx-auto flex flex-col md:flex-row gap-4 md:gap-24">
          <div className="md:w-1/3 space-y-3">
            <div className="text-5xl font-extrabold text-center md:text-left">
              You have many wasy of reaching us
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Address</div>
              <div className="text-gray-700">
                11350 McCormick Rd, EP III, Suite 200, Hunt Valley, MD 21031
              </div>
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Phone numbers</div>
              <div className="text-gray-700">+21687879736 and +21687879736</div>
            </div>
            <div>
              <div className="text-gray-900 font-semibold">Support</div>
              <div className="text-gray-700">info@car.com</div>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="">
              <Formik
                initialValues={{
                  email: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Email cannot be empty!"),
                  subject: Yup.string()
                    .required("Subject cannot be empty!")
                    .max(200, "Subject cannot be more than 200 characters"),
                  message: Yup.string()
                    .required("Message cannot be empty!")
                    .min(10, "Message cannot be less than 10 characters")
                    .max(1000, "Message cannot be more than 1000 characters"),
                })}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                  // contactEmailHandler(values, setSubmitting, setErrors);
                }}
              >
                {({ isSubmitting }) => (
                  <FormikForm
                    method="POST"
                    id="login-form-school"
                    name="login-form-school"
                    className="space-y-3 md:space-y-3"
                  >
                    {contactEmailFeedback !== null && (
                      <div className="text-sm text-red-600">
                        {contactEmailFeedback}
                      </div>
                    )}
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com"
                        required
                      />
                      <ErrorMessage
                        name="email"
                        className="text-red-500 text-sm"
                        component={"div"}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let us know how we can help you"
                        required
                      />
                      <ErrorMessage
                        name="subject"
                        className="text-red-500 text-sm"
                        component={"div"}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Your message
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Leave a comment..."
                      ></textarea>
                      <ErrorMessage
                        name="message"
                        className="text-red-500 text-sm"
                        component={"div"}
                      />
                    </div>
                    <button
                      type="submit"
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-8 py-3 me-2 mb-2 mt-8 dark:focus:ring-yellow-900"
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner
                            color="warning"
                            aria-label="Warning spinner example"
                            size="sm"
                          />

                          <span> Processing..</span>
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </FormikForm>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <CarBrands />
      <TopFooter />
      <MiddleFooter />
      <BottomFooter />
    </div>
  );
}

export default Contact;
