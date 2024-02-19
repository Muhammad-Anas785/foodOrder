import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filterRest, setFilterRest] = useState([]);
  const [searchBtn, setBtnSearch] = useState("");

  const handleSearch = (e) => {
    setBtnSearch(e.target.value);
  };

  const filterSearchCard = () => {
    const filteredCard = restList.filter((res) =>
      res.info.name.toLowerCase().includes(searchBtn.toLowerCase())
    );
    setFilterRest(filteredCard);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API);

    const json = await data.json();
    setRestList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterCards = () => {
    const filteredList = restList.filter((cards) => cards.info.avgRating >= 4);
    setFilterRest(filteredList);
  };

  const onlineStatus=useOnlineStatus();
  if(onlineStatus === false){
    return(
      <h1>Looks like you are offline</h1>
    )
  }
  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input type="text" value={searchBtn} onChange={handleSearch} />
        <button className="btnSearch" onClick={filterSearchCard}>
          Search
        </button>

        <button className="filter-btn" onClick={filterCards}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterRest.map((value) => {
          return (
            <Link
              to={"/restaurants/" + value.info.id}
              key={value.info.id}
              className="link-card"
            >
              <RestaurantCard resData={value.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
