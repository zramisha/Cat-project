import { apiSlice } from "@/redux/api/apiSlice";
import { baseEndpoints } from "../../utils/constants/apiEndpoints";

export const catApi = apiSlice.injectEndpoints({
  tagTypes: ["Cat"],
  endpoints: (builder) => ({
    createCat: builder.mutation({
      query: (data) => ({
        url: `${baseEndpoints.cats}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Cat"],
    }),
    invalidatesTags: ["Cat"],

    getCatById: builder.query({
      query: (id) => ({
        url: `${baseEndpoints.cats}/${id}`,
        method: "GET",
      }),
      providesTags: ["Cat"], 
    }),
    getAllCats: builder.query({
      query: () => ({
        url: `${baseEndpoints.cats}`,
        method: "GET",
      }),
      providesTags: ["Cat"],
    }),
    deleteCat: builder.mutation({
      query: (id) => ({
        url: `${baseEndpoints.cats}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cat"],
    }),
    updateCat: builder.mutation({
      query: ({ id, data }) => ({
        url: `${baseEndpoints.cats}/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Cat"],
    }),
  }),
});



export const {
    useCreateCatMutation,
    useGetCatByIdQuery,
    useGetAllCatsQuery,
    useDeleteCatMutation,
    useUpdateCatMutation,
} = catApi;
