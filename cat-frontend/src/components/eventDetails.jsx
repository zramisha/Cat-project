import { Link, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useGetEventByIdQuery, useUpdateAttendanceMutation } from "@/redux/event/eventApi";
import DefaultLoader from "./loader/deafult-loader";
import {  MapPinned } from "lucide-react";
import Map from "./map";
import CountDown from "./countDown";
import Carousel from "./Carousel";

const EventDetails = () => {
  const { id } = useParams(); // Get the id from the route
  const { data, isFetching, isError, error } = useGetEventByIdQuery(id);
  const { loggedUser } = useSelector(state => state.auth); 
  const [updateAttendance, { isLoading }] = useUpdateAttendanceMutation();
  console.log(loggedUser);

  const getUserAttendanceStatus = () => {
    if (event.interested.includes(loggedUser.userid)) return "interested";
    if (event.going.includes(loggedUser.userid)) return "going";
    return ""; // Neither
};

  const handleAttendanceChange = (e) => {
    updateAttendance({ eventId: event?._id, type: e.target.value });
  };

  if (isFetching) return <DefaultLoader />; 
  if (isError) return <div>Error: {error.message}</div>;

  const event = data?.data;
  if (!event) return <div>No Event found</div>;

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Event: {event?.name}</h1>
      <CountDown date={event.date} />
      {/* <img
        src={event?.image}
        alt={event?.name}
        width={800}
        height={600}
        className="w-full max-h-96 object-cover rounded-lg mb-4"
      /> */}

      {/* carousel */}
      
      <Carousel/>

      <div className="text-gray-700">
        <div className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <p className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700">
            <MapPinned color="purple" />
          </p>
          <span className="text-purple-900">{event?.location}</span>
        </div>
        <Link
          to={`/shelters/${event.hostedBy._id}`}
          className="mb-2"
        >
          <strong>Hosted By </strong> <span>{event?.hostedBy.name}</span>
        </Link>
        <p className="mb-2">
          <strong>Capacity:</strong> {event.capacity}
        </p>
        <p className="mb-2">
          <strong>Description:</strong> {event?.description}
        </p>
        <p className="mb-2 text-gray-500">{event.going.length} people going</p>
        <p className="mb-2 text-gray-500">
          {event.interested.length} People are interested
        </p>
        <div>
          <select
            onChange={handleAttendanceChange}
            value={getUserAttendanceStatus()}
            disabled={isLoading}
            className="mt-2 border rounded p-1"
          >
            <option value="">Select Status</option>
            <option value="interested">Interested</option>
            <option value="going">Going</option>
          </select>
        </div>
      </div>
      {/* Action Buttons */}

      {/* map */}
      {/* <Map coordinates={event.location.coordinates} />   */}
    </div>
  );
};

export default EventDetails;
