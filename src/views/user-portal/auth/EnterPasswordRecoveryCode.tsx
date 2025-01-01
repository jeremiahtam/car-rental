import * as Yup from "yup";
import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import OtpInput from "react-otp-input";

function EnterPasswordRecoveryCode() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* <a
          href="/#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a> */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Recover your account
            </h1>
            <Formik
              initialValues={{
                token: "",
              }}
              validationSchema={Yup.object({
                token: Yup.string()
                  .required("Reset code is required")
                  .matches(/^[0-9]+$/, "Must be only digits")
                  .min(5, "Must be exactly 5 digits")
                  .max(5, "Must be exactly 5 digits"),
              })}
              onSubmit={(values, { setSubmitting, setErrors }) => {
                console.log(values);
                setSubmitting(false);
                // recoverCodeHandler(values, setSubmitting, setErrors);
              }}
            >
              {({ isSubmitting, setFieldValue }) => (
                <FormikForm
                  className="space-y-3 md:space-y-3"
                  method="POST"
                  id="recover-password-form-school"
                  name="recover-password-form-school"
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <OtpInput
                      // value={token}
                      onChange={(val) => {
                        // setToken(val);
                        // setFieldValue("token", val);
                      }}
                      numInputs={5}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} />}
                      inputStyle={{
                        width: "3em",
                        height: "3em",
                        border: "none",
                        borderBottom: "2px solid #0F1925",
                      }}
                      containerStyle={{
                        justifyContent: "center",
                      }}
                    />

                    <div className="form-error">
                      <ErrorMessage
                        name="token"
                        className="text-red-500 text-sm"
                        component={"div"}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                  >
                    Retrieve Password
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

export default EnterPasswordRecoveryCode;
