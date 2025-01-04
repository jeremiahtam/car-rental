import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useState } from "react";

function ChangePassword() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const token = location.state?.token;

  const changePasswordHandler = async (
    values: any,
    setSubmitting: any,
    setErrors: any
  ) => {
    try {
      values = {
        ...values,
        ...{
          email,
          token,
        },
      };
      const res = await axios.post(`${baseUrl}/api/reset-password`, values, {
        headers: {
          Accept: "application/json",
        },
        timeout: 30000,
      });
      const resData = res.data;
      console.log(resData);
      if (resData.success === false) {
        if (resData.errors !== undefined) {
          setErrors(resData.errors);
        } else {
          //output the error message
        }
      } else {
        navigate("/");
      }
    } catch (e: any) {
      console.log(e);
      if (e.code === "ECONNABORTED") {
        setSubmitting(false);
      }
      if (e?.response?.data !== undefined) {
        const errorData = e.response.data;
        setErrors(errorData.errors);
        if (errorData.message === "Unauthenticated.") {
          //  store.dispatch(deleteUserData());
        }
      }
    }
    setSubmitting(false);
  };
  const [changePasswordFeedback, setChangePasswordFeedback] = useState<
    null | string
  >(null);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change your password
            </h1>
            {changePasswordFeedback !== null && (
              <div className="text-sm text-red-600">
                {changePasswordFeedback}
              </div>
            )}
            <Formik
              initialValues={{
                password: "",
                confirmPassword: "",
              }}
              validationSchema={Yup.object({
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
                // setSubmitting(false);
                // changePasswordHandler(values, setSubmitting, setErrors);
              }}
            >
              {({ isSubmitting }) => (
                <FormikForm
                  method="POST"
                  id="login-form-school"
                  name="login-form-school"
                  className="space-y-3 md:space-y-3"
                >
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
                  <button
                    type="submit"
                    disabled={!!isSubmitting}
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
                      "Change Password"
                    )}
                  </button>
                </FormikForm>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChangePassword;
