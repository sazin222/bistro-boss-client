import { BsCartPlusFill } from "react-icons/bs";
import { FaBook, FaCalendar, FaElementor, FaEnvelope, FaHome, FaList, FaReact, FaUser, FaUtensils,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [cart]= useCarts()
    // TODO: admin value wiil get from database
    const [isAdmin]= useAdmin()
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-gray-300">
              <ul className="menu">
               {
                isAdmin? <> 
                 <li>
                  
                  <NavLink to={'/dashboard/adminHome'}>
                  <FaHome />
                     Admin Home
                  </NavLink>
              </li>
              <li>
                
                  <NavLink to={'/dashboard/addItem'}>
                  <FaUtensils></FaUtensils>
                     Add Item
                  </NavLink>
              </li>
              <li>
                
                  <NavLink to={'/dashboard/manageItems'}>
                  <FaList></FaList>
                      Manage Item
                  </NavLink>
              </li>
              <li>
                
                  <NavLink to={'/dashboard/managebooking'}>
                  <FaBook></FaBook>
                   Manage Booking
                  </NavLink>
              </li>
              <li>
                
                  <NavLink to={'/dashboard/allUser'}>
                  <FaUser></FaUser>
                     All User
                  </NavLink>
              </li>
                </>: 
                <> 
                <li>
                  
                  <NavLink to={'/dashboard/userHome'}>
                  <FaHome />
                     User Home
                  </NavLink>
              </li>
              <li>
                
                  <NavLink to={'/dashboard/reservation'}>
                  <FaCalendar />
                     User Home
                  </NavLink>
              </li>
              <li>
                
                  <NavLink to={'/dashboard/cart'}>
                  <BsCartPlusFill></BsCartPlusFill>
                      My Cart ({cart.length})
                  </NavLink>
              </li>
              <li>
                
                  <NavLink to={'/dashboard/review'}>
                  <FaReact></FaReact>
                    Add a Review 
                  </NavLink>
              </li>
              <li>
                
                  <NavLink to={'/dashboard/review'}>
                  <FaReact></FaReact>
                     My booking
                  </NavLink>
              </li>
                
                </>
               }
                <div className="divider"></div>
                {/* common nav links */}
                <li>
                  
                  <NavLink to={'/'}>
                  <FaHome />
                      Home
                  </NavLink>
              </li>
                <li>
                  
                  <NavLink to={'/order/salad'}>
                  <FaElementor/>
                     Menu
                  </NavLink>
              </li>
                <li>
                  
                  <NavLink to={'/order/contact'}>
                   <FaEnvelope></FaEnvelope>
                     Contact
                  </NavLink>
              </li>

              </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-7">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;