import React from "react";
import { useGetEventsQuery } from "@/redux/event/eventApi";
import EventCard from "@/components/EventCard";
import DefaultLoader from "@/components/loader/deafult-loader";

const Events = () => {
  const { data, error, isLoading } = useGetEventsQuery();
  
  if (isLoading) return <DefaultLoader />;
  if (error) return <div>Error loading events: {error.message}</div>;
  const events = data.data;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events && events.length > 0 ? (
          events?.map((event, index) => (
            <EventCard
              key={index}
              event={event}
            />
          ))
        ) : (
          <p>No upcoming events available.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
