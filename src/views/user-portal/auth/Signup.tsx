import { useEffect, useState } from "react";
import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHook";
import { Spinner } from "flowbite-react";
import { saveUserToken } from "../../../store/user/userSlice";
import { fetchUser } from "../../../api/userApi";

export const Signup = () => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const userInfo = useAppSelector((state) => state.userInfo);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [signupFeedback, setSignupFeedback] = useState<null | string>(null);

  const signupHandler = async (
    values: any,
    setSubmitting: any,
    setErrors: any
  ) => {
    try {
      const res = await axios.post(`${baseUrl}/api/user-signup`, values, {
        headers: {
          Accept: "application/json",
        },
        timeout: 30000,
      });
      const resData = res.data;
      console.log(resData);
      dispatch(saveUserToken(resData.data.token));
      navigate("/dashboard/bookings");
    } catch (e: any) {
      console.log(e);
      if (e.code === "ECONNABORTED") {
        setSubmitting(false);
      }
      if (e?.response?.data !== undefined) {
        const errorData = e.response.data;
        setErrors(errorData.errors);
        if (errorData.message === "Unauthenticated.") {
          // dispatch(deleteUserToken());
        }
        setSignupFeedback(errorData.message);
      }
    }
    setSubmitting(false);
  };

  /** */
  useEffect(() => {
    dispatch(fetchUser());
  });

  /**  */
  useEffect(() => {
    if (userInfo.active) {
      navigate("/dashboard/bookings");
    }
  }, [userInfo.status, navigate, userInfo.active]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-10">
        <a
          href="/#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border  sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            {signupFeedback !== null && (
              <div className="text-sm text-red-600">{signupFeedback}</div>
            )}
            <Formik
              initialValues={{
                name: "",
                email: "",
                phoneNumber: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Full name cannot be empty!"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email cannot be empty!"),
                phoneNumber: Yup.string().required("Email cannot be empty!"),
                password: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .min(8, "Must be more than eight characters")
                  .required("Password cannot be empty"),
                confirmPassword: Yup.string()
                  .max(20, "Must be 20 characters or less")
                  .required("Password cannot be empty")
                  .test(
                    "passwords-match",
                    "Passwords must match",
                    function (value) {
                      return this.parent.password === value;
                    }
                  ),
              })}
              onSubmit={(values, { setSubmitting, setErrors }) => {
                signupHandler(values, setSubmitting, setErrors);
              }}
            >
              {({ isSubmitting }) => (
                <FormikForm
                  method="POST"
                  id="signup-form-school"
                  name="signup-form-school"
                  className="space-y-3 md:space-y-3"
                >
                  <div className="">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Luke"
                    />
                    <ErrorMessage
                      name="name"
                      className="text-red-500 text-sm"
                      component={"div"}
                    />
                  </div>
                  <div className="grid gap-x-3 gap-y-2  md:grid-cols-2 lg:grid-cols-2">
                    <div className="">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                      />
                      <ErrorMessage
                        name="email"
                        className="text-red-500 text-sm"
                        component={"div"}
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        className="text-red-500 text-sm"
                        component={"div"}
                      />
                    </div>
                  </div>
                  <div className="grid gap-x-3 gap-y-2 md:grid-cols-2 lg:grid-cols-2">
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="password"
                        className="text-red-500 text-sm"
                        component={"div"}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm password
                      </label>
                      <input
                        type="confirmPassword"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        className="text-red-500 text-sm"
                        component={"div"}
                      />
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                      >
                        I accept the{" "}
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          href="/#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
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
                      "Create Account"
                    )}
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </Link>
                  </p>
                </FormikForm>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};
