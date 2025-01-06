import React from "react";
import { Link } from "react-router-dom";

const UserProfile = ({ user }) => {
  console.log(user);  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold">User Profile</h1>

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
      {user.type === "shelterOwner" && (
        <div className="shelter-info mt-4">
          <h2 className="text-lg font-bold">Your Cat Posts</h2>
          {/* Display a list of cat posts */}
        </div>
      )}

      <div className="wishlist mt-4">
        <h2 className="text-lg font-bold">Wishlist</h2>
        {/* Map through wishlist items */}
        <div>
          {user?.wishlist?.map((catPost, index) => (
            <div key={index}>
              <Link to={`/cat-posts/${catPost._id}`} className="link text-pink-500">{catPost.postTitle}</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="requests mt-4">
        <h2 className="text-lg font-bold">Your Requests</h2>
        {/* Display user requests */}
        <div>
          {user?.requests?.map((req, index) => (
            <div key={index}>
              <Link to={`/cat-posts/${req.post._id}`} className="text-blue-700 underline">{req.post.postTitle}</Link>
            </div>
          ))}
        </div>
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

export default UserProfile;
