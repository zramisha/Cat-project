import { useState, useEffect } from "react";
import CatCard from "@/components/CatCard";
import DefaultLoader from "@/components/loader/deafult-loader";
import { useGetUserCatsQuery } from "@/redux/user/userApi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cats = () => {

  const { loggedUser } = useSelector(state => state.auth); 
  // API calling
  const { data, error, isLoading } = useGetUserCatsQuery(loggedUser.userid);

  if (isLoading) return <DefaultLoader />;

  if (error) {
    const errorMessage = error?.data?.message || "An error occurred";
    return (
      <p className="text-red-400">Error fetching cat posts: {errorMessage}</p>
    );
  }
  // Extract cats safely
  const cats = data?.data;
  // console.log(data);

  return (
    <div className="mx-auto">
      {/* <h1 className="text-xl">Cat's by <Link to={`/user/${loggedUser.userid}`} className="link text-blue-400">{loggedUser.username}</Link></h1> */}
      {/* <button onClick={handleGenerateCats} type="button" className="btn btn-outline">Regenerate Cats</button> */}
      <div className="">
        {/* Ensure Cat exists before mapping */}
        {cats && cats.length > 0 ? (
          cats?.map((cat, index) => (
            <div key={index} className="mb-4">
              <div className="flex gap-5 items-center border p-3 border-3 justify-between shadow-md bg-slate-200">
                <Link to={`/explore-cats`}>{cat.name}</Link>
                <div className="space-x-3">
                  <button className="btn btn-sm btn-outline">Create Post</button>
                  <button className="btn btn-sm btn-success">Edit</button>
                  <button className="btn btn-sm btn-error">Delete</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cats available.</p>
        )}
      </div>
    </div>
  );
};

export default Cats;
