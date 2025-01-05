import { useState, useEffect } from "react";
import CatCard from "@/components/CatCard";
import DefaultLoader from "@/components/loader/deafult-loader";
import { useGetAllCatsQuery } from "@/redux/cat/catApi";

const Cats = () => {
  // API calling
  const { data, error, isLoading } = useGetAllCatsQuery();

  if (isLoading) return <DefaultLoader />;

  if (error) {
    const errorMessage = error?.data?.message || "An error occurred";
    return (
      <p className="text-red-400">Error fetching cat posts: {errorMessage}</p>
    );
  }
  // Extract cats safely
  const cats = data?.cats;
  console.log(data);

  return (
    <div className="mx-auto">
      <h1>Cat List</h1>
      {/* <button onClick={handleGenerateCats} type="button" className="btn btn-outline">Regenerate Cats</button> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mx-auto items-center justify-around">
        {/* Ensure Cat exists before mapping */}
        {cats && cats.length > 0 ? (
          cats?.map((cat, index) => (
            <CatCard
              key={index}
              cat={cat}
            />
          ))
        ) : (
          <p>No cat posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Cats;
