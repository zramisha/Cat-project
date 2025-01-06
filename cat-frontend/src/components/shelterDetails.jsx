import { Link, useParams } from "react-router-dom";
import { useGetShelterByIdQuery } from "@/redux/shelter/shelterApi";
import DefaultLoader from "./loader/deafult-loader";
import { PhoneCall, MailOpen, MapPinned } from "lucide-react";
import Map from "./map";

const ShelterDetails = () => {
  const { id } = useParams(); // Get the id from the route
  const { data, isFetching, isError, error } = useGetShelterByIdQuery(id);

  const shelter = data?.data;

  if (isFetching) return <DefaultLoader />;
  if (isError) return <div>Error: {error.message}</div>;

  if (!shelter) return <div>No shelter found</div>;

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{shelter?.name}</h1>
      <img
        src={shelter?.image}
        alt={shelter?.name}
        width={800}
        height={600}
        className="w-full max-h-96 object-cover rounded-lg mb-4"
      />
      <div className="text-gray-700">
        <div className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <p className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700">
            <MapPinned color="purple" />
          </p>
          <span className="text-purple-900">{shelter?.location.address}</span>
        </div>
        <Link to={`/user/${shelter.shelterOwner._id}`} className="mb-2"><strong>Shelter Owner:</strong> {shelter.shelterOwner.username}</Link>
        <p className="mb-2"><strong>Capacity:</strong> {shelter.capacity}</p>
        <p className="mb-2">
          <strong>Description:</strong> {shelter?.description}
        </p>
      </div>
      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="btn btn-outline">
          <a href={`mailto:${shelter?.contactDetails.email}`}>
            <MailOpen className="inline-flex" /> Email
          </a>
        </button>

        <button className="btn btn-outline">
          <a href={`tel:${shelter.contactDetails.phone}`}>
            <PhoneCall className="inline-flex self-start" /> Call
          </a>
        </button>
      </div>

      {/* map */}
      <Map coordinates={shelter.location.coordinates} />
    </div>
  );
};

export default ShelterDetails;
