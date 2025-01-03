import React from "react";
import { Link } from "react-router-dom";

export const CatPostCard = ({ catPost }) => {
  const {
    cat,
    postTitle,
    message,
    status,
    postType,
    price,
    currentOwner,
  } = catPost;
  return (
    <div>
      <div className="relative overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <div className="relative">
          <img
            src={cat?.image || "/cat-bg.jpg"}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className={`absolute top-0 right-0 badge rounded-none text-md font-semibold capitalize ${postType === "adoption" ? "badge-primary": "badge-secondary" }`}>{postType}</div>
        </div>
        <div className="p-5 border border-t-0">
          {/* <div className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <p className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700">
                <MapPinned color="purple" />
              </p>
              <span className="text-purple-900">{props.location}</span>
            </div> */}
          <Link
            to={`/cat-posts/${catPost?._id}`}
            aria-label="Title"
            title={postTitle}
            className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-green-700"
          >
            {postTitle}
          </Link>
          <p className="mb-2 text-gray-700">{message}</p>

          <Link
            to={`/cat-posts/${catPost?._id}`}
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-primary hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatPostCard;
