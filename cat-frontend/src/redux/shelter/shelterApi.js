import { apiSlice } from "@/redux/api/apiSlice";
import { baseEndpoints } from "../../utils/constants/apiEndpoints";

export const shelterApi = apiSlice.injectEndpoints({
  tagTypes: ["Shelter"],
  endpoints: (builder) => ({
    // Fetch all shelters
    getAllShelters: builder.query({
      query: () => `${baseEndpoints.shelters}`,
      providesTags: ["Shelter"],
    }),

    // Fetch a specific shelter by ID
    getShelterById: builder.query({
      query: (id) => `${baseEndpoints.shelters}/${id}`,
      providesTags: (result, error, id) => [{ type: "Shelter", id }],
    }),

    // Create a new shelter
    createShelter: builder.mutation({
      query: (newShelter) => ({
        url: `${baseEndpoints.shelters}/create`,
        method: "POST",
        body: newShelter,
      }),
      invalidatesTags: ["Shelter"],
    }),

    // Update a shelter
    updateShelter: builder.mutation({
      query: ({ id, updatedShelter }) => ({
        url: `${baseEndpoints.shelters}/${id}`,
        method: "PUT",
        body: updatedShelter,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Shelter", id }],
    }),

    // Delete a shelter
    deleteShelter: builder.mutation({
      query: (id) => ({
        url: `${baseEndpoints.shelters}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Shelter", id }],
    }),
  }),
  overrideExisting: false, // Avoid overwriting if already injected
});

// Export hooks for shelter endpoints
export const {
  useGetAllSheltersQuery,
  useGetShelterByIdQuery,
  useCreateShelterMutation,
  useUpdateShelterMutation,
  useDeleteShelterMutation,
} = shelterApi;
