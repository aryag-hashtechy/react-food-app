import { parseCookies } from "nookies";
import { clearWishlist } from "../feature/wishlist/wishlistSlice";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const ManageleWishlist = () => {
  const cookies = parseCookies();
  const dispatch = useDispatch();

  if (!cookies.accessToken) {
    dispatch(clearWishlist());
  }

  return <Outlet />
};

export default ManageleWishlist;
