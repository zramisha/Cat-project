import { apiSlice } from "@/redux/api/apiSlice";
import { baseEndpoints } from "../../utils/constants/apiEndpoints";

export const eventApi = apiSlice.injectEndpoints({
  tagTypes: ["Event"],
  endpoints: (builder) => ({
    // Fetch all events
    getEvents: builder.query({
      query: () => `${baseEndpoints.events}`,
      providesTags: ["Event"],
    }),

    // Fetch a specific event by ID
    getEventById: builder.query({
      query: (id) => `${baseEndpoints.events}/${id}`,
      providesTags: (result, error, id) => [{ type: "Event", id }],
    }),

    // Create a new event
    createEvent: builder.mutation({
      query: (newEvent) => ({
        url: `${baseEndpoints.events}/create`,
        method: "POST",
        body: newEvent,
      }),
      invalidatesTags: ["Event"],
    }),

    // Update an event
    updateEvent: builder.mutation({
      query: ({ id, updatedEvent }) => ({
        url: `${baseEndpoints.events}/${id}`,
        method: "PUT",
        body: updatedEvent,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Event", id }],
    }),

    // Delete an event
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `${baseEndpoints.events}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Event", id }],
    }),

    // Update attendance for an event
    updateAttendance: builder.mutation({
      query: ({ eventId, type }) => ({
        url: `${baseEndpoints.events}/${eventId}/attendance`,
        method: "PATCH",
        body: { eventId, type },
      }),
      invalidatesTags: (result, error, { eventId }) => [{ type: "Event", eventId }],
    })
  }),
  overrideExisting: false, // Avoid overwriting if already injected
});

// Export hooks for event endpoints
export const {
  useGetEventsQuery,
  useGetEventByIdQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
  useUpdateAttendanceMutation
} = eventApi;
