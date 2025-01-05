import { apiSlice } from "@/redux/api/apiSlice";
import { baseEndpoints } from "@/utils/constants/apiEndpoints";

export const userApi = apiSlice.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // Fetch a single user by ID
    getUserById: builder.query({
      query: (id) => `${baseEndpoints.users}/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    // Additional user-related endpoints can be defined here
  }),
  overrideExisting: false,
});

export const {
  useGetUserByIdQuery, // Export the hook for fetching a user by ID
  // Any additional hooks would be exported here
} = userApi;
