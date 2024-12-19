import { apiSlice } from "@/redux/api/apiSlice";
import localStorageService from "@/utils/helper/localStorageService";
import { setLoggedInInfo } from "@/redux/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { authConstants } from "@/utils/constants/auth";
import { mainApiEndpoints } from "@/utils/constants/apiEndpoints";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${mainApiEndpoints.auth.login}`,
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          if (result && result?.data?.token) {
            const loggedUser = jwtDecode(result?.data?.token);

            const authInfo = {
              token: result?.data?.token,
              loggedUser,
            };

            localStorageService.setItem(authConstants.AUTH, authInfo);

            // console.log({
            //   "authInfo": authInfo,
            // }) //DEBUG

            dispatch(setLoggedInInfo(authInfo));
          }
        } catch (err) {
          console.log(err);

          // do nothing
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
