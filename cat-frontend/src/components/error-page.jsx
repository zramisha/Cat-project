import { useRouteError } from "react-router-dom";
import SadCatIcon from "@/components/SadCatIcon";
import {FaCat} from "react-icons/fa"


const ErrorPage = () => {

  const error = useRouteError();
  console.error(error);


  return (
    <div className="flex items-center justify-center min-h-[80vh]">

      <div className="text-center space-y-4 mx-2">
        <div className="flex justify-center">
          {/* <SadCatIcon/> */}
          <FaCat size={80} color="gray"/>
        </div>
        {/* <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p> */}
        <h1 className="text-5xl font-bold text-error">{error?.status}</h1>
        <h1 className="text-4xl font-semibold text-gray-600">{error?.statusText}</h1>
        <p className="text-md">{error?.message || error?.data}</p>
        <a href="/" className="btn btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
