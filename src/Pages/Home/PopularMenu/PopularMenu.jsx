
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu]= useMenu()
    const popular= menu.filter(item=>item.category=== 'popular')
    //       setMenu(popularItem)
    // const [menu, setMenu]= useState([])
    // useEffect(()=>{
    //     fetch('Menu.json')
    //     .then(res=> res.json())
    //     .then(data=>{
    //       const popularItem= data.filter(item=>item.category=== 'popular')
    //       setMenu(popularItem)
    //     }) 
    //     console.log(menu);
    // },[])
    return (
        <section className="mb-14 px-3">
          <SectionTitle
           subHeading={'Check it out'}
           heading={'FROM OUR MENU'}
          >
            </SectionTitle>  
            <div className="grid gap-3 md:grid-cols-2">
                {
                    popular.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    >
                    </MenuItem>)
                }
            </div>
           <div className="text-center my-3">
           <button className="btn border-0 border-b-4  btn-outline">View All Menu</button>
           </div>
        </section>
    );
};

export default PopularMenu;