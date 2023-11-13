import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import Menuimg from "../../../assets/menu/banner3.jpg";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupdBg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const Dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="mb-14 ">
      <Helmet>
        <title>Bistro Boss| Menu</title>
      </Helmet>
      <Cover img={Menuimg} title="Our menu"></Cover>
      <SectionTitle
        heading={"don`t miss"}
        subHeading={"TODAY`S OFFER"}
      ></SectionTitle>

      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory
        items={Dessert}
        title="dessert"
        img={dessertBg}
      ></MenuCategory>
      <MenuCategory items={pizza} title="pizza" img={pizzaBg}></MenuCategory>
      <MenuCategory items={salad} title="salad" img={saladBg}></MenuCategory>
      <MenuCategory items={soup} title="soup" img={soupdBg}></MenuCategory>
    </div>
  );
};

export default Menu;
