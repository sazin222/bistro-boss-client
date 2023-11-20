import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const {name, category, recipe , price, _id } = useLoaderData()
    const axiosSecure= useAxiosSecure()
    const axiosPublic = useAxiosPublic()
 
    const { register, handleSubmit , } = useForm();
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
      const menuRes= await axiosSecure.patch(`/menu/${_id}`, menuItems)
          console.log(menuRes.data);
          if(menuRes.data.modifiedCount> 0){
            // reset()
            Swal.fire({
        position: "top-end",
        icon: "success",
       title: `${data.name} has been updated`,
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
           heading="Update item"
           subHeading={"refresh your item"}
           >
            </SectionTitle> 
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name *</span>
            </label>
            <input
              type="text"
           
              defaultValue={name}
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
              defaultValue={category}
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
                defaultValue={price}
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
            defaultValue={recipe}
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
            Update menu item
          </button>
        </form>
      </div>
        </div>
    );
};

export default UpdateItem;