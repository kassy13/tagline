import { useEffect, useState } from "react";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Retrieve the logged-in user from session storage
    const userFromStorage = sessionStorage.getItem("loggedInUser");

    // Parse the user data if it exists in session storage
    if (userFromStorage) {
      const user = JSON.parse(userFromStorage);
      setLoggedInUser(user);
    }
  }, []);

  return (
    <div className="p-4">
      <h1>DASHBOARD</h1>
      {loggedInUser ? (
        <p>Welcome {loggedInUser.username}</p>
      ) : (
        <p>Welcome guest</p>
      )}
    </div>
  );
};

export default Dashboard;
