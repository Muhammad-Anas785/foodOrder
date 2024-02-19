import React, { useEffect, useState } from "react";
import { API } from "./constants";

const useMenuCards = () => {
  const [menuCard, setMenuCards] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API);
    const json = await data.json();
    setMenuCards(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  return menuCard;
};
export default useMenuCards;
