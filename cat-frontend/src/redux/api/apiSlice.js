import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import authService from "@/utils/helper/authService";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_CAT_API_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = authService.getToken();
      if (token && token.length) {
        headers.set("Authorization", `Bearer ${token}`);
        // headers.set('Access-Control-Allow-Origin', '*');
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
