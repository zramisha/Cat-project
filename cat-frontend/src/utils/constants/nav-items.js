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
    { name: "Profile", link: routesConstant.profile, icon: AiOutlineUser },
    // { name: "Explore Cats", link: routesConstant.exploreCats, icon: FiMessageSquare },
    { name: "Wishlist", link: routesConstant.wishList, icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },

  ];