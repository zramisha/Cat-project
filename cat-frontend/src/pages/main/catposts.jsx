import React from "react";
import { useGetAllCatPostsQuery } from "@/redux/catPost/catPostApi";
import DefaultLoader from "@/components/loader/deafult-loader";
import CatPostCard from "@/components/CatPostCard";
import { Blog } from "@/components/BlogCard";

export default function CatPosts() {
  // API calling
  const { data, error, isLoading } = useGetAllCatPostsQuery();

  // Extract catPosts safely
  const catPosts = data?.data;

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
          Adoption & Selling posts
        </h1>
      </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:max-w-md sm:mx-auto md:max-w-full lg:max-w-full">
          {/* Ensure catPosts exists before mapping */}
          {catPosts && catPosts.length > 0 ? (
            catPosts.map((catPost, index) => (
              <CatPostCard
                key={index}
                catPost={catPost}
              />
            ))
          ) : (
            <p>No cat posts available.</p>
          )}
        </div>
    </div>
  );
}
