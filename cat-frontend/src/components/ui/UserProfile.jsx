import React from "react";
import { Link } from "react-router-dom";

const UserProfile = ({ user }) => {
  // console.log(user);  
  return (
    <div className="container mx-auto px-4">
      {/* <h1 className="text-xl font-bold">User Profile</h1> */}
      <div className="flex flex-col justify-center">
        <div>
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
        <div className="profile-info mt-4 space-y-4">
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p>
            <strong>Contact:</strong> {user.contact}
          </p>
        </div>
      </div>
      
      <div className="hidden md:block">

        {user.type === "shelterOwner" && (
          <div className="shelter-info mt-4">
            <h2 className="text-lg font-bold">Your Cat Posts</h2>
            {/* Display a list of cat posts */}
          </div>
        )}


        {user.type === "admin" && (
          <div className="admin-tools mt-4">
            <h2 className="text-lg font-bold">Admin Tools</h2>
            {/* Links to admin functionalities */}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
