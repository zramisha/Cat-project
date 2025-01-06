import React from "react";
import { useGetAllSheltersQuery } from "@/redux/shelter/shelterApi";
import DefaultLoader from "@/components/loader/deafult-loader";
import ShelterDetails from "@/components/shelterDetails";
import ShelterCard from "@/components/shelterCard";

export default function SheltersPage() {
  // API calling
  const { data, error, isLoading } = useGetAllSheltersQuery();
  console.log(data);
  // Extract catPosts safely
  const shelters = data?.data;

  if (isLoading) return <DefaultLoader />;

  if (error) {
    const errorMessage = error?.data?.message || "An error occurred";
    return (
      <p className="text-red-400">Error fetching cat posts: {errorMessage}</p>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mb-8 md:mb-12">
        <h1 className="text-center text-md md:text-3xl font-extrabold">
          Shelters In town
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Ensure shelters exists before mapping */}
        {shelters && shelters.length > 0 ? (
          shelters.map((shelter, index) => (
            <ShelterCard
              key={index}
              shelter={shelter}
            />
          ))
        ) : (
          <p>No Shelters available.</p>
        )}
      </div>
    </div>
  );
}
