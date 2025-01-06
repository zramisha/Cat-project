import { apiSlice } from "@/redux/api/apiSlice";
import { baseEndpoints } from "@/utils/constants/apiEndpoints";

export const userApi = apiSlice.injectEndpoints({
  tagTypes: ["User", "CatPost"],
  endpoints: (builder) => ({
    // Fetch a single user by ID
    getUserById: builder.query({
      query: (id) => `${baseEndpoints.users}/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    addToWishList: builder.mutation({
        query: ({ postId }) => ({
          url: `${baseEndpoints.users}/wishlist`,
          method: "PATCH",
          body: {postId},
        }),
        invalidatesTags: (result, error, { postId }) => [
          { type: "CatPost", id: postId },{type: "User"}
        ],
      }),
    // Additional user-related endpoints can be defined here
  }),
  overrideExisting: false,
});

export const {
    useGetUserByIdQuery,
    useAddToWishListMutation,
} = userApi;
