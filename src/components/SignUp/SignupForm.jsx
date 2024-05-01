// import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContextProvider";
import { ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const { signUp, user } = useAuth();
  // const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    try {
      signUp(values);
      // userData is the information collected from the signup form, while values in the handleSubmit function represents the form data submitted by the user, which includes the userData. They serve similar purposes but in different contexts within the Formik form handling process.
    } catch (error) {
      console.error("Error signing up:", error);
    }
    setSubmitting(false);
  };
  console.log("my new user", user);
  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="username" className="block font-medium">
                Username
              </label>
              <Field
                type="text"
                name="username"
                autoComplete="on"
                className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-500"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <Field
                type="email"
                name="email"
                autoComplete="on"
                className="w-full border border-green-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-green-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
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
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
