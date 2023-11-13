
const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item
    const handelAddCart = food =>{
      console.log(food);
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