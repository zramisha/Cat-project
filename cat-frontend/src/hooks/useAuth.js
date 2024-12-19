import { useSelector } from "react-redux";
import authService from "@/utils/helper/authService";

// This hook just return if a user is logged in correctly or is the user is valid or if the token is valid till now

export default function useAuth() {
    const authState = useSelector(state=>state.auth);

    if (!!authState.loggedUser && !authService.isTokenExpired()) {
        return true;
    } else {
        return false;
    }
}