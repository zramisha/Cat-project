import React from "react";
import { useUpdateAttendanceMutation } from "@/redux/event/eventApi";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  // const [updateAttendance, { isLoading }] = useUpdateAttendanceMutation();

  // const handleAttendanceChange = (e) => {

  //   updateAttendance({ eventId: event?._id, type: e.target.value });
  // };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-lg font-bold">{event.name}</h2>
      <p className="mb-2 text-gray-500">{event.description}</p>
      <p className="mb-2 text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
      <p className="mb-2 text-gray-500">{event.going.length} people going</p>
      <p className="mb-2 text-gray-500">{event.interested.length} People are interested</p>
      <div className="flex justify-between items-center">
        <Link
          to={`/events/${event._id}`}
          className="text-blue-500 hover:text-blue-700"
        >
          View Details
        </Link>
        {/* <select
          onChange={handleAttendanceChange}
          disabled={isLoading}
          className="mt-2 border rounded p-1"
        >
          <option value="">Select Status</option>
          <option value="interested">Interested</option>
          <option value="going">Going</option>
        </select> */}
      </div>
    </div>
  );
};

export default EventCard;
