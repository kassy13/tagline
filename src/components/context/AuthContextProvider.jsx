import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import AuthContext from "./UserContext";

// const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  //   const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve existing users from local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUser(storedUsers);
  }, []);
  // SO this was wrapped in a useefect because we want on page load to get the existing users , plus retrieveing data from local storage is asynchronous in nature
  const signUp = (userData) => {
    // userData parameter in the signUp function represents the information provided by the user during the signup process. It typically includes details such as the username, email, and password that the user enters into the signup form.

    // Check if user with the same email already exists
    const existingUser = user.find((u) => u.email === userData.email);
    if (existingUser) {
      toast.error("User with this email already exists");
      return;
    }

    // Add new user to the list of existing users
    const updatedUsers = [...user, userData];
    // Save updated user list to local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUser(updatedUsers);
    toast.success("Signup successful!");
    // Navigate to the login page after a delay
    setTimeout(() => {
      navigate("/login");
    }, 2500); // 2000 milliseconds = 2 seconds
  };
  //   const login = (userData) => {
  //     console.log(user, "beeee");
  //     if (user.length === 0) {
  //       toast.error("No users signed up yet");
  //       return;
  //     }
  //     const foundUser = user.find(
  //       (user) =>
  //         user.email === userData.email && user.password === userData.password
  //     );
  //     console.log("found user", foundUser);
  //     if (foundUser) {
  //       setLoggedInUser(foundUser);
  //       toast.success("Login successful!");
  //       setTimeout(() => {
  //         navigate("/dashboard");
  //       }, 2500); // 2000 milliseconds = 2 seconds
  //     } else {
  //       toast.error("Invalid email or password");
  //     }
  //   };

  const login = (userData) => {
    if (user.length === 0) {
      toast.error("No users signed up yet");
      return;
    }

    const foundUser = user.find(
      (loginuser) =>
        loginuser.email === userData.email &&
        loginuser.password === userData.password
    );

    if (foundUser) {
      //   setLoggedInUser(foundUser);
      toast.success("Login successful!");

      // Store logged in user in session storage
      sessionStorage.setItem("loggedInUser", JSON.stringify(foundUser));

      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);
    } else {
      toast.error("Invalid email or password");
    }
  };
  const logout = () => {
    // Clear session storage
    sessionStorage.clear();
    // toast.info("Logged out successfully");
    // toast.success("Logged out successfully");
    // After clearing session storage, navigate to the login page

    navigate("/login");
  };

  const contextData = {
    user,
    // loggedInUser,
    signUp,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
// The useAuth custom hook is designed to provide a convenient way to access the authentication context within functional components of your application.
export default AuthContext;

