import {authConstants} from "@/utils/constants/auth";
import localStorageService from "./localStorageService";
import { fromUnixTime, isAfter } from "date-fns";

const isTokenExpired = ()=>{

    
    const localAuth = localStorageService.getItem(authConstants.AUTH);

    if(!localAuth?.me?.exp){
        return false;
    }
    const expirationDate = fromUnixTime(localAuth?.me?.exp);

    // Get the current date and time
    const currentDate = new Date();

    // Check if the current date is after the expiration date
    return isAfter(currentDate, expirationDate);
}

const getToken = ()=>{
    
    const localAuth = localStorageService.getItem(authConstants.AUTH);
    if(!localAuth?.token || isTokenExpired()){
        return "";
    }
    return localAuth.token;
}
export default {
    isTokenExpired,
    getToken,
  };