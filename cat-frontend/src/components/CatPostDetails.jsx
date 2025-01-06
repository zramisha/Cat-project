import React from "react";
import { Link, useParams } from "react-router-dom"; // For React Router
import { useGetCatPostByIdQuery, useAddRequestToPostMutation } from "@/redux/catPost/catPostApi"; // Assuming you have this query set up
import DefaultLoader from "@/components/loader/deafult-loader";
import { toast } from 'react-toastify';
import { useAddToWishListMutation } from "@/redux/user/userApi";

const CatPostDetails = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const { data, error, isLoading } = useGetCatPostByIdQuery(id); // Fetch the specific post
  const [addRequest, { isLoading: isRequestLoading, isSuccess }] = useAddRequestToPostMutation();
  const [addToWishList, { isLoading: isWishlistLoading, isAddToWishSuccess }] = useAddToWishListMutation();


  const handleRequest = async () => {
    try {
      await addRequest({ postId: id, type: postType }).unwrap();
      toast.success('Request sent successfully!');
    } catch (err) {
      toast.error(`Failed to send request: You might have alreay requested`);
    }
  };

  const handleAddToWishLilst = async () => {
    try {
      await addToWishList({ postId: id}).unwrap();
      toast.success('Added To Wishlist');
    } catch (err) {
      toast.error(`Failed to add to wishlist`);
    }
  };

  if (isLoading) return <DefaultLoader />;
  if (error) {
    const errorMessage = error?.data?.message || "An error occurred";
    return (
      <p className="text-red-400">Error fetching cat post: {errorMessage}</p>
    );
  }

  const catPost = data?.data;
  const {
    cat,
    postTitle,
    message,
    status,
    postType,
    price,
    currentOwner,
    requests,
  } = catPost;

  // console.log(catPost);

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-md font-semibold tracking-wider text-slate-900 uppercase rounded-none bg-teal-400">
              {postType}
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle
                      cx="1"
                      cy="1"
                      r=".7"
                    />
                  </pattern>
                </defs>
                <rect
                  fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>
            {postTitle}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">{message}</p>
        </div>
        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src={cat.image}
            alt=""
          />
        </div>
        {/* catpost in details */}
        <div className="text-start grid grid-cols-1 md:grid-cols-2 justify-between">
          <div className="mb-3">
            <h4 className="text-base font-semibold">Cat Details</h4>
            <p className="text-base text-gray-700">Name: <span className="text-secondary">{cat.name}</span></p>
            <p className="text-base text-gray-700">Age: <span className="text-secondary">{cat.age}</span> Months</p>
            <p className="text-base text-gray-700">Breed: <span className="text-secondary">{cat.breed}</span></p>
            <p className="text-base text-gray-700">Description: <span className="text-base capitalize">{cat.description}</span></p>
          </div>
          <div>
            <h4 className="text-base font-semibold">Health Status</h4>
            <p className="text-base text-gray-700">Vaccinated: <span className="text-base italic capitalize">{cat.healthStatus.vaccinated ? "Yes": "No"}</span></p>
            <p className="text-base text-gray-700">Weight: <span className="text-base italic capitalize">{cat.healthStatus?.weight || "Not mentioned"} (Kg)</span></p>
          </div>
          <div>
            <h4 className="text-base font-semibold">Cat Description</h4>
            <p className="mb-4 text-base text-gray-700">{cat.description}</p>
          </div>
          <div>
            <h4 className="text-base font-semibold">Current Owner</h4>
            <Link to={`/user/${catPost.currentOwner._id}`} className="mb-4 text-base text-gray-700">{catPost.currentOwner.username}</Link>
          </div>
        </div>

        {/* action */}
        <div className="flex justify-around">
          <button className="btn btn-secondary" onClick={handleRequest} disabled={isRequestLoading}>
            Want to {postType === "adoption" ? "Adopt" : "Buy"}
          </button>
          <button className="btn btn-outline" onClick={handleAddToWishLilst} disabled={isWishlistLoading}>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatPostDetails;
