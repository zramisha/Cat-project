import { createBrowserRouter } from "react-router-dom";
import { routesConstant } from "@/utils/constants/routes";
import { lazy } from "react";


// lazy load all the component and pages
const ProtectedRoute = lazy(() => import("@/router/protected-route"));
const PublicRoute = lazy(() => import("@/router/public-route"));
const PublicLayout = lazy(() => import("@/layouts/public-layout"));
const MainLayout = lazy(()=> import("@/layouts/main-layout"))
const ErrorPage = lazy(()=> import("@/components/error-page"))
const Home = lazy(() => import("@/pages/main/home"));
const Login = lazy(() => import("@/pages/auth/login"));
const Cats = lazy(() => import("@/pages/main/cats"));
const CatPosts = lazy(()=> import("@/pages/main/catposts"));
const CatPostDetails = lazy(()=> import("@/components/CatPostDetails"));
const SheltersPage = lazy(()=> import("@/pages/main/shelters"));
const ShelterDetails = lazy(()=> import("@/components/shelterDetails"));
const EventPage = lazy(()=> import("@/pages/main/events"));
const EventDetails = lazy(()=> import("@/components/eventDetails"));



export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <PublicLayout/>
      </PublicRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: routesConstant.login, element: <Login /> },
    ]
  },
  {
    
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout/>
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: routesConstant.exploreCats,
        element: <Cats />,
      },
      {
        path: routesConstant.catPosts,
        element: <CatPosts />,
      },
      {
        path: `${routesConstant.catPosts}/:id`,
        element: <CatPostDetails />,
      },
      {
        path: `${routesConstant.shelters}/`,
        element: <SheltersPage />,
      },
      {
        path: `${routesConstant.shelters}/:id`,
        element: <ShelterDetails />,
      },
      {
        path: `${routesConstant.events}/`,
        element: <EventPage />,
      },
      {
        path: `${routesConstant.events}/:id`,
        element: <EventDetails />,
      },
    ],
  },
]);