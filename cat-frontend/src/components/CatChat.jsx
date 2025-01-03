import React from "react";

const CatCard = ({ cat }) => {


  const isAvailable = cat.status === "available";
  
  const handleAdopt = (cat) => {
    console.log(cat.name, " is cliked to adopt") //TODo::Implement later
  }



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
            <div className={`badge ${cat?.status === "available" ? "badge-secondary"  : "badge-neutral"}`}>{cat?.status}</div>
          </h2>
          <p>{cat?.description}</p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{cat?.breed}</div>
          </div>

            {/* conditional rendering or based on props */}
            <div className="card-actions justify-between mt-3">
              <button className="btn btn-sm btn-primary" type="button" onClick={()=> handleAdopt(cat)} disabled={!isAvailable}>{isAvailable ? "Want to Adopt": "Adopted"}</button>
              <button className="btn btn-sm btn-warning" type="button" onClick={()=>handleWishlist(cat)} disabled={!isAvailable}>Wish List</button>
            </div>
        </div>

      </div>

    </div>
  );
};

export default CatCard;