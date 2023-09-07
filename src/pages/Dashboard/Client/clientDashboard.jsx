import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import Jobs from "./MyJobs";
import Actions from "./ClientActions";
import Messages from "./Messages";
import UpdateClientProfile from "./UpdateClientProfile";
import axios from "axios";

const ClientDashboard = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Retrieve user ID from local storage
    const userId = localStorage.getItem("_id");

    if (!userId) {
      setIsLoading(false); // No user ID found in local storage
      return;
    }

    // Make a GET request to fetch user info using the retrieved user ID
    axios
      .get(`https://assist-api-okgk.onrender.com/api/v1/${userId}`)
      .then((response) => {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    // Display a loading indicator while fetching user info
    return <div>Loading...</div>;
  }

  // Check if the user is approved
  const isApproved = user && user.isApproved;

  return (
    <>
      {isApproved ? (
        <main className="p-2 flex flex-col">
          <section className="w-full rounded-lg bg-purple-200">
            <Profile />
          </section>
          <section>
            <Actions />
          </section>
          <section className="flex">
            <div className="basis-2/3">
              <Jobs />
            </div>
            <div className="basis-1/3">
              <Messages />
            </div>
          </section>
        </main>
      ) : (
        <UpdateClientProfile />
      )}
    </>
  );
};

export default ClientDashboard;
