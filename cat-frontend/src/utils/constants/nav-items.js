import { routesConstant } from "./routes";
// import icons
import {
  MdOutlineDashboard
} from "react-icons/md";
import {
  AiOutlineUser,
  AiOutlineHeart,
} from "react-icons/ai";

import { RiSettings4Line } from "react-icons/ri";



export const navItems = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "Profile", link: routesConstant.profile,  },
    { name: "Explore Cats", link: routesConstant.exploreCats, },
    {name: "Cat Posts", link: routesConstant.catPosts},
    { name: "Wishlist", link: routesConstant.wishList, },
    { name: "Setting", link: "/",  },

  ];