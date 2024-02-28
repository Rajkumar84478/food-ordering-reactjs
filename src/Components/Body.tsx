import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { cardData } from "./CardData";
// import { cardData } from "./CardData";

function Body() {
  // const cardsobject:any=JSON.parse(cardData);
  // console.log(cardsobject);
//   const [items, setItems] = useState(cardData.items);
  const [items, setItems] = useState([]);

  interface cardTypes {
    id?: string,
    name: string;
    areaName:string,
    cloudinaryImageId:string,
    costForTwo:string,
    cuisines: string[],
    avgRating:number,
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7429763&lng=77.117685&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await responseData.json();
    const cardsData=jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(cardsData);
    setItems(cardsData);

  };

  function filterList() {
    const filterData: any = items.filter(
      (card: any) => card.info.avgRating > 4
    );
    setItems(filterData);
  }

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => filterList()}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {items.map((data: any) => (
          <RestaurantCard key={data.info.id} resData={data.info} />
        ))}
      </div>
    </div>
  );
}

export default Body;
