import { BsCartPlusFill } from "react-icons/bs";
import { FaCalendar, FaElementor, FaHome, FaReact } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">
              <ul className="menu">
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
                        My Cart
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
                <div className="divider"></div>
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