import { useState, useEffect } from "react";
import axios from "axios";

export const UserProfile = () => {
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    (async () => {
      const uid = localStorage.getItem("uid");
      const response = await axios.get(`http://localhost:3003/users/${uid}`);

      setUserProfile(response.data.user.email);
    })();
  }, []);

  return (
    <div id="user_profile" className="modal">
      <div className="modal-content">
        <div className="flex flex-col w-full items-center justify-center">
          <a
            href="#close"
            title="Close"
            className="modal-close flex items-center justify-center"
          >
            <i className="fa fa-times"></i>
          </a>
          <div className="flex w-full items-center justify-center  border-b-2">
            <h1 className="text-3xl p-2 ">User Profile</h1>
          </div>
          <div className="flex w-full items-center justify-center mt-8 p-4">
            <h1>Your Email: {userProfile}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
