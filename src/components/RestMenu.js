import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurantCard";

const RestMenu = () => {
  const { resId } = useParams();

  const menuList = useRestaurantCard(resId);
  if (menuList === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    menuList.cards[0].card.card.info;

  //Naam same dene hain jo api main hain wahi naam ayengy  jese {itemCards} api main yahi naam hai to yahi ayega
  const { itemCards } =
    menuList.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  const { title } =
    menuList.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  return (
    <div>
      <h1>{name}</h1>
      <h4>
        {cuisines.join(", ")} : {costForTwoMessage}
      </h4>
      <h4>{avgRatingString} stars</h4>
      <h3>Menu</h3>
      <h4>{title}</h4>
      <ul>
        {itemCards.map((value) => {
          return (
            <li key={value.card.info.id}>
              {value.card.info.name} : {"Rs."} {value.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestMenu;
