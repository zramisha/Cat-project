import React from "react";
import { Link } from "react-router-dom";
import { MapPinned } from "lucide-react";

const ShelterCard = ({ shelter }) => {
  // console.log(shelter);
  return (
    <div className="card card-compact bg-base-100 w-auto shadow-xl">
      <figure>
        <img
          src={shelter.image}
          alt="shelter.name"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{shelter.name}</h2>
        <div className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <p className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700">
            <MapPinned color="purple" />
          </p>
          <span className="text-purple-900">{shelter?.location.address}</span>
        </div>
        <p>{shelter?.description}</p>
        <Link
          to={`${shelter._id}`}
          className="card-actions justify-end"
        >
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ShelterCard;
