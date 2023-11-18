import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from '../../../Hooks/useAxiosPublic'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Additems = () => {
  const { register, handleSubmit , reset} = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSecure= useAxiosSecure()
  const onSubmit = async (data) => {
    console.log(data); 
    const imageFiles= {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFiles,{
      headers:{
        'content-type': 'multipart/form-data'
      }
    })
    if(res.data.success){
      // send the menu item data to the server with image url 
      const menuItems ={
        name:data.name ,
        category: data.category ,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url

      }
      const menuRes= await axiosSecure.post('/menu', menuItems)
      console.log(menuRes.data);
      if(menuRes.data.insertedId){
        reset()
        Swal.fire({
    position: "top-end",
    icon: "success",
   title: "Your work has been saved",
   showConfirmButton: false,
   timer: 1500
  });
      }
    }
    console.log('with image Url',res.data);
  };
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"what is new"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name *</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name", {required: true})}
              className="input input-bordered w-full "
            />
          </div>

          <div className="flex gap-4">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
              defaultValue="default"
                {...register("category",{required: true})}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text"> Price *</span>
              </label>
              <input
                type="number"
                placeholder="price"
                {...register("price",{required: true})}
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
            {...register("recipe",{required: true})}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className=" my-5">
          <input type="file"
            {...register("image",{required: true})}
           className="file-input w-full max-w-xs" />
         
          </div>

          <button type="submit" className="btn">
            Add Items <FaUtensils className="ml-2"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Additems;
