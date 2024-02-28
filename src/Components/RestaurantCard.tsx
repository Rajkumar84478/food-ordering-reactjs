// import React from "react";

interface cardTypes {
  id?: string,
  name: string;
  areaName:string,
  cloudinaryImageId:string,
  costForTwo:string,
  cuisines: string[],
  avgRating:number,
}

function RestaurantCard({ resData }:any) {
//   const { id, name, description, price, image, rating } = resData;

const {name,areaName,avgRating,cloudinaryImageId,costForTwo,cuisines}=resData;
 
const imageSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId;
  return (
    <div className="res-card">
      <img className="card-image" src={imageSrc} alt="card-logo" />
      <div className="card-content">
        <h4>{name}</h4>
        <div className="rating-container">
          <img
            id="rating"
            src="https://st.depositphotos.com/1915171/3472/i/450/depositphotos_34720817-stock-illustration-golden-star-icon-for-rating.jpg"
            alt="rating"
          />
          <span>{avgRating}</span>
        </div>
        <p>{cuisines.join(',')}</p>
        <section>{areaName}</section>
      </div>
    </div>
  );
}

export default RestaurantCard;
