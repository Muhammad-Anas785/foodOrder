import React from "react";
import { IMG_URL, RES_IMG_CDN } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData;
  return (
    
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={RES_IMG_CDN + cloudinaryImageId}
        alt="not found"
      />
      <h3 className="title">{name}</h3>
      <h4 className="title">{cuisines.join(", ")}</h4>
      <h4 className="title">{costForTwo}</h4>
      <h5 className="title">{avgRating} stars</h5>
    </div>
  );
};
export default RestaurantCard;
