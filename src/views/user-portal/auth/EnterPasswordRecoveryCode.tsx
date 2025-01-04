import * as Yup from "yup";
import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import OtpInput from "react-otp-input";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHook";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";

function EnterPasswordRecoveryCode() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const userInfoData = useAppSelector(
    (state) => "" //state.userInfo.loggedInUserData
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const email = location.state?.email;

  const recoverCodeHandler = async (
    values: any,
    setSubmitting: any,
    setErrors: any
  ) => {
    values = {
      ...values,
      ...{ email },
    };
    try {
      const res = await axios.post(
        `${baseUrl}/api/confirm-password-reset-token`,
        values,
        {
          headers: {
            Accept: "application/json",
          },
          timeout: 30000,
        }
      );
      const resData = res.data;
      console.log(resData);
      if (resData.success === false) {
        if (resData.errors !== undefined) {
          setErrors(resData.errors);
        } else {
          //output the error message
        }
      } else {
        navigate("/change-password", {
          state: {
            token: values.token,
            email,
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

  const [token, setToken] = useState("");

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
                //  recoverCodeHandler(values, setSubmitting, setErrors);
              }}
            >
              {({ isSubmitting, setFieldValue }) => (
                <FormikForm className="space-y-3 md:space-y-3" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Recovery Code
                    </label>
                    <OtpInput
                      value={token}
                      onChange={(val) => {
                        setToken(val);
                        setFieldValue("token", val);
                      }}
                      numInputs={5}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => (
                        <input {...props} className="focus:border-yellow-300" />
                      )}
                      inputStyle={{
                        width: "3em",
                        height: "3em",
                        border: "none",
                        borderBottom: "2px solid #fcd34d",
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
