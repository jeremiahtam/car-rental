import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useState } from "react";

function RecoverPassword() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();
  const [recoverPasswordFeedback, setRecoverPasswordFeedback] = useState<
    null | string
  >(null);

  const recoverPasswordHandler = async (
    values: any,
    setSubmitting: any,
    setErrors: any
  ) => {
    try {
      const res = await axios.post(`${baseUrl}/api/recover-password`, values, {
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
        navigate("/enter-recovery-code", {
          state: {
            email: values.email,
          },
        });
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
          // dispatch(deleteUserData());
        }
      }
    }
    setSubmitting(false);
  };

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
              Enter your recovery email
            </h1>
            {recoverPasswordFeedback !== null && (
              <div className="text-sm text-red-600">
                {recoverPasswordFeedback}
              </div>
            )}
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email cannot be empty!"),
              })}
              onSubmit={(values, { setSubmitting, setErrors }) => {
                setSubmitting(false);
                // recoverPasswordHandler(values, setSubmitting, setErrors);
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
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                    />
                    <ErrorMessage
                      name="email"
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
                      "Send recovery email"
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

export default RecoverPassword;
