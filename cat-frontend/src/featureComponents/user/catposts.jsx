import { useState, useEffect } from "react";
import CatCard from "@/components/CatCard";
import DefaultLoader from "@/components/loader/deafult-loader";
import { useGetUserByIdQuery } from "@/redux/user/userApi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Catposts = () => {

  const { loggedUser } = useSelector(state => state.auth); 
  const { data, error, isLoading } = useGetUserByIdQuery(loggedUser.userid);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const user = data.data
  if (!user) return <div>User not found.</div>;

  console.log(user)
  return (
    <div className="mx-auto">

      <div className="">
        {/* Ensure Cat exists before mapping */}
        {user && user.catPosts.length> 0 ? (
          user?.catPosts?.map((post, index) => (
            <div key={index} className="mb-4">
              <div className="flex gap-5 items-center border p-3 border-3 justify-between shadow-md bg-slate-200">
                <Link to={`/cat-posts/${post._id}`} className="link text-blue-500">{post.postTitle}</Link>
                <div className="space-x-3">
                  <button className="btn btn-sm btn-error">Manage</button>
                </div>
              </div>
            </div>
          ))
        ) : (
            <p>No adoption or purchase request made</p>
        )}
      </div>
    </div>
  );
};

export default Catposts;
