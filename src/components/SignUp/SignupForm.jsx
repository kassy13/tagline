import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
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

  const navigate = useNavigate();

  // Define the checkIfUserExists function
  const checkIfUserExists = async (email) => {
    // Simulate the check for existing user
    // Replace this with your actual logic to check if the user exists
    return false; // For demonstration purposes, always return false
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Check if user with the provided email already exists
      const existingUser = await checkIfUserExists(values.email);

      if (existingUser) {
        // Display error message if user already exists
        toast.error("User with this email already exists");
      } else {
        // Save user data to local storage
        localStorage.setItem("user", JSON.stringify(values));

        // Display success message
        toast.success("Signup successful!", {
          onClose: () => {
            // Redirect to login page with form autofilled
            // navigate.push({
            //   pathname: "/login",
            //   state: { autofilledValues: values },
            // });
            navigate("/login");
          },
        });
      }
    } catch (error) {
      // Handle any errors that occur during the check
      console.error("Error checking user existence:", error);
      toast.error("An error occurred. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-medium">
              Username
            </label>
            <Field
              type="text"
              name="username"
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
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignupForm;
