// import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../context/AuthContextProvider";

const LoginForm = () => {
  const { login, user, loggedInUser } = useAuth();
  console.log(loggedInUser, "from login ");
  // const navigate = useNavigation();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await login(values);
    } catch (error) {
      console.error("Error signing up:", error);
    }
    setSubmitting(false);
  };
  console.log(user, "login user");
  return (
    <div className="max-w-md mx-auto my-16 bg-white p-8 rounded-lg shadow-lg">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <Field
              type="email"
              name="email"
              autoComplete="on"
              className="w-full px-3 py-2 border rounded-md"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <Field
              type="password"
              name="password"
              autoComplete="new-password"
              className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-500"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-300 text-white rounded-md p-2 hover:bg-green-400"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
