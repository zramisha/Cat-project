import React from "react";

const OtherUser = ({ user }) => {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-xl font-bold my-5 text-center">Others Profile</h1>

      <div className="flex justify-center">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
      <div className="profile-info mt-4 space-y-3">
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
          <strong>User Type</strong> {user.type}
        </p>
        <p>
          <strong>Contact:</strong> {user.contact}
        </p>
      </div>
      {user.type === "shelterOwner" && (
        <div className="shelter-info mt-4">
          <h2 className="text-lg font-bold">Your Cat Posts</h2>
          {/* Display a list of cat posts */}
        </div>
      )}


      <div className="wishlist mt-4">
        <h2 className="text-lg font-bold">Wishlist</h2>
        {/* Map through wishlist items */}
      </div>


      <div className="requests mt-4">
        <h2 className="text-lg font-bold">Your Requests</h2>
        {/* Display user requests */}
      </div>

      
      {user.type === "admin" && (
        <div className="admin-tools mt-4">
          <h2 className="text-lg font-bold">Admin Tools</h2>
          {/* Links to admin functionalities */}
        </div>
      )}
    </div>
  );
};

export default OtherUser;
