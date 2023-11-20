import { FaTrash } from "react-icons/fa";
import useCarts from "../../../Hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart,refetch] = useCarts();
  const axiosSecure= useAxiosSecure()
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log(cart);
  const handelDeleted = id=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        axiosSecure.delete(`/carts/${id}`)
        .then(res=>{
          console.log(res.data);
          if(res.data.deletedCount>0){
            refetch()
             Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
         });
          }
        })
      }
    });
  }
  return (
    <div>
      <div className="flex flex-col lg:flex-row  items-center justify-evenly">
        <h2 className=" text-2xl lg:text-4xl">Total Order: {cart.length}</h2>
        <h2 className="text-2xl lg:text-4xl">Total Price: {totalPrice}</h2>
     { cart.length ? <Link to={"/dashboard/payment"}>
     <button className="btn btn-primary">Pay</button>
       </Link> :<button disabled className="btn btn-primary">Pay</button> }
      </div>
      {/* table */}

      <div className="overflow-x-auto">
        <table className="table lg:w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
               #
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map((item, index)=> <tr key={item._id}>
                    <th>
                     {index+1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                     {item.name}
                    </td>
                    <td>${item.price}</td>
                    <th>
                      <button onClick={()=>handelDeleted(item._id)} className="btn btn-ghost btn-lg"> <FaTrash className="text-red-600 "></FaTrash> </button>
                    </th>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
