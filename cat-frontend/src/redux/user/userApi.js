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
    
    getUserCats: builder.query({
      query: (id) => `${baseEndpoints.users}/${id}/cats`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
  }),
  overrideExisting: false,
});

export const {
    useGetUserByIdQuery,
    useAddToWishListMutation,
    useGetUserCatsQuery,
} = userApi;
