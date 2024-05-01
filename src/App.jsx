// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import HomePopular from "./components/Home/HomePopular.jsx";
import Error from "./components/404/Error.jsx";
import SignupForm from "./components/SignUp/SignupForm.jsx";
import LoginForm from "./components/Login/LoginForm.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

import DashLayout from "./components/Dashboard/DashLayout.jsx";
import "react-toastify/dist/ReactToastify.css";
import { AuthContexProvider } from "./components/context/AuthContextProvider.jsx";
import ProtectedRoute from "./components/Protected ROute/ProtectedROute.jsx";
import Logout from "./components/Logout/Logout.jsx";
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//

//       <Route path="/" element={<DashLayout />}>
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/auth" element={<AuthContexProvider />} />
//       </Route>
//       {/* </Route> */}
//     </>
//   )
// );

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContexProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />}></Route>

              {/* Route for HomePopular with dynamic ID */}
              <Route path="popular/:id" element={<HomePopular />} />
              <Route path="about" element={<About />} />
              <Route path="contact-us" element={<Contact />} />
              <Route path="signup" element={<SignupForm />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="logout" element={<Logout />} />
            </Route>
            {/* Protected ROutes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<DashLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Route>
            {/* 404 error  should be the last*/}
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthContexProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
