import React from "react";
import { Link } from "react-router-dom";

const CatCard = ({ cat }) => {
  
  // console.log(cat)




  const handleWishlist = (cat) => {
    console.log(cat.name, " is added to wishlist") //TODO::Implement later
  }



  return (
    <div>
      <div className="card bg-base-100 max-w-96 shadow-xl mx-auto">
        <figure className="h-64 overflow-hidden">
          <img src={cat?.image} alt={cat?.name} className="w-full h-full object-cover"/>
        </figure> 
        <div className="card-body">
          <h2 className="card-title">
            {cat?.name}
            {/* <div className={`badge ${cat?.status === "available" ? "badge-secondary"  : "badge-neutral"}`}>{cat?.status}</div> */}
          </h2>
          <div className="space-y-3">
            <p>{cat?.description}</p>
            <p>{cat?.age} Months old</p>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">{cat?.breed}</div>
            </div>
            <div>Owned by <Link to={`/user/${cat?.createdBy._id}`} className="link text-blue-500">{cat?.createdBy.username}</Link></div>
          </div>

          {/* conditional rendering or based on props */}
          <div className="card-actions justify-between mt-3">
            {/* <button className="btn btn-sm btn-primary" type="button" onClick={()=> handleAdopt(cat)} disabled={!isAvailable}>{isAvailable ? "Want to Adopt": "Adopted"}</button> */}
            <button className="btn btn-sm btn-warning" type="button" onClick={()=>handleWishlist(cat)}> Add to Wish List</button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CatCard;
