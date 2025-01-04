import React from "react";
import Pic from "../assets/images/Customer.png";
import { ErrorMessage, Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import axios from "axios";

export const UserUpdateProfilePic = () => {
  const fileRef = React.useRef<HTMLInputElement>(null);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const FILE_SIZE = 1000 * 1024; //
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
  const userInfoData = useAppSelector(
    (state) => "" //state.userInfo.loggedInUserData
  );
  const dispatch = useAppDispatch();

  const changeProfilePicHandler = async (
    values: any,
    setSubmitting: any,
    setErrors: any
  ) => {
    try {
      const res = await axios.post(
        `${baseUrl}/api/upload-school-profile-pic`,
        values,
        {
          headers: {
            Accept: "application/json",
            // Authorization: `Bearer ${userInfoData.token}`,
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
        }
      } else {
        // dispatch(updateProfilePic(resData.data.profilePicName));
        // props.handleClose();
      }
    } catch (e: any) {
      console.log(e);
      if (e.code === "ECONNABORTED") {
      }
      if (e?.response?.data !== undefined) {
        const errorData = e.response.data;
        setErrors(errorData.errors);
      }
    }
    setSubmitting(false);
  };
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col items-center ">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={Pic}
          alt="Bonnie Green"
        />
        <div className="flex mt-2 md:mt-3">
          <button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => {
              fileRef.current?.click();
            }}
          >
            Upload
          </button>
          <button className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Remove
          </button>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            profilePic: "",
          }}
          validationSchema={Yup.object({
            profilePic: Yup.mixed()
              .required("A file is required")
              .test(
                "fileSize",
                "Max allowed size is 1MB",
                (value: any) => value && value.size <= FILE_SIZE
              )
              .test(
                "fileFormat",
                "Unsupported Image Format",
                (value: any) => value && SUPPORTED_FORMATS.includes(value.type)
              ),
          })}
          onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
            // console.log(values)
            var formData = new FormData();
            // formData.append("profilePic", values.profilePic);
            // formData.append("id", props.modalDataId);
            // await changeProfilePicHandler(formData, setSubmitting, setErrors);
            // resetForm();
          }}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <FormikForm
              method="POST"
              id="edit-profile-pic"
              name="edit-profile-pic"
            >
              <input type="file" hidden ref={fileRef} />
            </FormikForm>
          )}
        </Formik>
      </div>
    </div>
  );
};
