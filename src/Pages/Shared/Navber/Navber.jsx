import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/Authprovider";
import { BsCartPlusFill} from 'react-icons/bs';
import useCarts from "../../../Hooks/useCarts";
const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart]=useCarts()
  console.log(cart);
  const handelLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navlinks = (
    <>
      <li>
       
        <Link to={"/"}>Home</Link>
      </li>
      <li>
       
        <Link to={"/menu"}>Our Menu</Link>
      </li>
      <li>
       
        <Link to={"/order/salad"}> Order</Link>
      </li>
     
      <li>
       
        <Link to={"/secret"}> Secret</Link>
      </li>
      <li>
        <Link to={"/dashboard/cart"}>
          <button className="flex justify-center items-center">
          <BsCartPlusFill size={'20px'}></BsCartPlusFill>
            <div className="badge badge-secondary">+0{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <li >
            <Link onClick={handelLogOut}>Log out</Link>{" "}
          </li>
        </>
      ) : (
        <>
          <li>
           
            <Link to={"/login"}> Log in</Link>
          </li>{" "}
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 bg-black text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navber;
