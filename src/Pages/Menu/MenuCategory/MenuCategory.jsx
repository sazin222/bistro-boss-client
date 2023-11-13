import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

 
const MenuCategory = ({items , title, img}) => {
    return (
        <div className="py-12">
          { title && <Cover img={img} title={title}></Cover> }
             <div className="grid gap-3 mt-16  px-3 md:grid-cols-2">
                {
                    items.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    >
                    </MenuItem>)
                }
            </div> 
            <Link to={`/order/${title}`}> 
            <button className="btn border-0 border-b-4 text-black btn-outline">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;