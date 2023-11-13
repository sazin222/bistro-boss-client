import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navber from "../Pages/Shared/Navber/Navber";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const isLogin =
    location.pathname.includes("login") || location.pathname.includes("register");
  return (
    <div>
      {isLogin || <Navber></Navber>}
      <Outlet></Outlet>
      {isLogin || <Footer></Footer>}
    </div>
  );
};

export default Main;
