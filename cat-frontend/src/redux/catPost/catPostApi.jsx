import { apiSlice } from "@/redux/api/apiSlice";
import { baseEndpoints } from "../../utils/constants/apiEndpoints";

export const catPostApi = apiSlice.injectEndpoints({
  tagTypes: ["CatPost"],
  endpoints: (builder) => ({
    createCatPost: builder.mutation({
      query: (data) => ({
        url: `${baseEndpoints.catPosts}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["CatPost"],
    }),
    invalidatesTags: ["CatPost"],

    getCatPostById: builder.query({
      query: (id) => ({
        url: `${baseEndpoints.catPosts}/${id}`,
        method: "GET",
      }),
      providesTags: ["CatPost"], // Cache the list of Bank accounts
    }),
    getAllCatPosts: builder.query({
      query: () => ({
        url: `${baseEndpoints.catPosts}`,
        method: "GET",
      }),
      providesTags: ["CatPost"],
    }),
    deleteCatPost: builder.mutation({
      query: (id) => ({
        url: `${baseEndpoints.catPosts}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CatPost"],
    }),
    updateCatPost: builder.mutation({
      query: ({ id, data }) => ({
        url: `${baseEndpoints.catPosts}/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["CatPost"],
    }),
  }),
});



export const { 
    useCreateCatPostMutation,
    useGetCatPostByIdQuery,
    useGetAllCatPostsQuery,
 } = catPostApi;