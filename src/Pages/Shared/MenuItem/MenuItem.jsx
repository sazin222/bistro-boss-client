
const MenuItem = ({item}) => {
    const {name, image,recipe, price}= item
    return (
        <div className="flex  space-x-2">
           <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[90px] " src={image} alt="" /> 
           <div>
             <h3>{name}----------</h3>
             <p>{recipe}</p>
           </div>
           <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;