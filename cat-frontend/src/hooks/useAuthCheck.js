import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import localStorageService from "../utils/helper/localStorageService";
import { authConstants } from "@/utils/constants/auth";
import { setLoggedInInfo } from "@/redux/auth/authSlice";
import authService from "@/utils/helper/authService";

// This hooks just return if the auth-state was checked and updated and return true if the auth-state was updated
// Both for logged in or logged-out, valid or invalid user this hook just set the application api...
export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorageService.getItem(authConstants.AUTH);
    // console.log("Loal auth check: ",localAuth) //Debug
    if (localAuth && !authService.isTokenExpired()) {
      if (localAuth.loggedUser) {
        dispatch(setLoggedInInfo(localAuth));
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
