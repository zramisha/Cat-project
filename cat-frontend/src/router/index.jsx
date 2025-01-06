import { createBrowserRouter } from "react-router-dom";
import { routesConstant } from "@/utils/constants/routes";
import { lazy } from "react";
import Catposts from "@/featureComponents/user/catposts";


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
const Profile = lazy(()=> import("@/pages/main/profile"));
const User = lazy(()=> import("@/pages/main/user"));
const ProfileLayout = lazy(()=> import("@/layouts/profile-layout"));
const UserCats = lazy(()=> import("@/featureComponents/user/cats"));
const Wishlist = lazy(() => import("@/featureComponents/user/wishlist"));
const CatpostRequests = lazy(() => import("@/featureComponents/user/catpostRequest"));



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
      {
        path: `${routesConstant.profile}`,
        element: <ProfileLayout />,
        children: [
          // {index: true, element: <ProfileOption/>}
          {
            path: "cats",
            element: <UserCats /> 
          },
          {
            path: "cat-posts",
            element: <Catposts /> 
          },
          {
            path: "wishlist",
            element: <Wishlist />
          },
          {
            path: "catpost-requests",
            element: <CatpostRequests />
          },
        ]
      },
      {
        path: `${routesConstant.user}/:id`,
        element: <User />,
      },
    ],
  },
]);