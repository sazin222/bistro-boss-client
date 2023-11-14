
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const FoodCard = ({item}) => {
  const {user}= useAuth()
  const navigate = useNavigate()
  const location = useLocation()
    const {name, image, price, recipe, _id} = item
    const handelAddCart = food =>{
      if(user && user?.email){
        // send the database 
        console.log(food, user.email);
          const cartItem ={
            menuId : _id,
            email: user.email,
            name,
            image,
            price,
          } 

          axios.post('http://localhost:5000/carts', cartItem)
          .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `${name}  has been Added`,
                showConfirmButton: false,
                timer: 1500
              });
            }
          })

      } else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please Log in Add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Log in !"
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login', {state: {from: location}})
          }
        });
      }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-black right-0 mr-5 mt-5 text-white absolute px-3">${price}</p>
        <div className="card-body text-center">
          <h2 className="font-semibold">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={()=> handelAddCart({item})}
             className="btn bg-slate-100 border-0 border-b-4 text-black btn-outline">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;