import { createBrowserRouter } from "react-router-dom";
import { routesConstant } from "@/utils/constants/routes";
import { lazy } from "react";


// lazy load all the component and pages
const MainLayout = lazy(()=> import("@/layouts/main-layout"))
const ErrorPage = lazy(()=> import("@/components/error-page"))
const Test = lazy(() => import("@/components/Test"));
const Home = lazy(() => import("@/pages/main/home"));



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <Home/>
      },
      {
        path: routesConstant.testPage,
        element: <Test></Test>,
      },
    ]
  },
])