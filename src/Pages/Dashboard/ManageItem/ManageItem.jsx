import { FaRegEdit, FaTrash,  } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import Swal from "sweetalert2";


const ManageItem = () => {
    const [menu, ,refetch]= useMenu()
    const axiosSecure= useAxiosSecure()

    const handelDeletedItem = (item) =>{
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then( async  (result) => {
  if (result.isConfirmed) {

    const res = await axiosSecure.delete(`/menu/${item._id}`);
    console.log(res.data);
    if(res.data.deletedCount > 0){
      refetch()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }

    
  }
});
        
    }
    return (
        <div>
            <SectionTitle
             heading="Manage All Items"
             subHeading={'Hurry Up'}
            ></SectionTitle>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item,index)=>  <tr key={item._id}>
            <td>
              {index + 1}
            </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
              {item.name}
             
            </td>
            <td>{item.price}</td>
            <th>
            <button  className="btn  bg-orange-500"> <FaRegEdit className="text-white "> </FaRegEdit > </button>
            </th>
            <th>
            <button onClick={()=>handelDeletedItem(item)} className="btn btn-ghost btn-lg"> <FaTrash className="text-red-600 "></FaTrash> </button>
            </th>
          </tr>)
      }
     
    
     
    </tbody>
    
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItem;