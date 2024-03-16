import { useEffect } from "react"

export default function RestaurantMenu() {

    useEffect(()=>{
     fetchMenu();
    },[]);
    
    const fetchMenu=async ()=>{
      const responseData=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7429763&lng=77.117685&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const jsonData=await responseData.json();
      console.log(jsonData);
      const cardsData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants[0].cta.link;
        console.log(cardsData);
    }
  return (
    <div className='menu'>RestaurantMenu
    <h1>Name of the Restaurant</h1>
    <h2>Menu</h2>
    <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
    </ul>
    </div>
  )
}
