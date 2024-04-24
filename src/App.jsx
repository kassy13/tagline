import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import HomePopular from "./components/Home/HomePopular.jsx";
import Error from "./components/404/Error.jsx";
import SignupForm from "./components/SignUp/SignupForm.jsx";
import LoginForm from "./components/Login/LoginForm.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>

      {/* Route for HomePopular with dynamic ID */}
      <Route path="popular/:id" element={<HomePopular />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="signup" element={<SignupForm />} />
      <Route path="login" element={<LoginForm />} />
      {/*Protected Routes */}
      {/* 404 error  should be the last*/}
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
// 04.so what happened here is that we imported createBrowser router and then createRoutesElements to help in creating our routes from the router-dom, the next thing is to have our Routes and this routes is nothing its just like components, theses routes can take a couple of parameters and it works inform of sandwich model   //

//04. The route takes in two parameters and this is like a format that we are going to be following which is after we have our routes we declare a path and then the components that will be loading when we go to that path.

//04.  Now for us to load our routes plus the elements in the dom we employ another helper from the react-router dom which is the "ROuteProvider", this reactprovider just takes in one attribute which is the router and in our case the router is our router.

// GO BACK TO THE 01.step.txt FOR THE NEXT STEP
