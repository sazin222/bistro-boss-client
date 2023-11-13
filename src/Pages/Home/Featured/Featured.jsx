import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './featured-item.css'
const Featured = () => {
  return (
    <section className="featured-item text-white pt-6 ">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"featured item"}
      ></SectionTitle>
      <div className=" flex flex-col md:flex-row justify-center items-center pt-14 pb-16 pl-16 pr-20 gap-6">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div >
            <p>March 20, 2023</p>
            <p> WHERE CAN I GET SOME?</p>
          <p>
             Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur.
          </p>
          <button className="btn border-0 border-b-4 text-white btn-outline">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
