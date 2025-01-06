import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserProfile from "@/components/ui/UserProfile";
import { useGetUserByIdQuery } from "@/redux/user/userApi";
import { useSelector } from "react-redux";

const ProfileLayout = () => {
  const { loggedUser } = useSelector((state) => state.auth);
  const { data, error, isLoading } = useGetUserByIdQuery(loggedUser.userid);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const user = data.data;
  if (!user) return <div>User not found.</div>;

  return (
    <div className="mx-auto">
      <nav className="flex items-center justify-center space-x-5">
          <NavLink to="/profile/cats" className={({ isActive }) => `btn btn-outline ${isActive ? 'btn-active' : ''}`}>
              My Cats
          </NavLink>
          <NavLink to="/profile/cat-posts" className={({ isActive }) => `btn btn-outline ${isActive ? 'btn-active' : ''}`}>
              My Posts
          </NavLink>
          <NavLink to="/profile/wishlist" className={({ isActive }) => `btn btn-outline ${isActive ? 'btn-active' : ''}`}>
              Wishlist
          </NavLink>
          <NavLink to="/profile/catpost-requests" className={({ isActive }) => `btn btn-outline ${isActive ? 'btn-active' : ''}`}>
              Adoption/Purchase Requests
          </NavLink>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <div className="md:col-span-1">
          <UserProfile user={user} />
        </div>
        <div className="md:col-span-3 col-span-1 my-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
