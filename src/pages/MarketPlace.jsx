import React from "react";
import Cards from "../components/Cards.jsx";
import AddItem from "../components/AddItem.jsx";
import Upscroll from "../components/Upscroll.jsx";

const MarketPlace = () => {
    const items=[
        {
          "item": "Cooler",
          "price": 4500,
          "condition": "Good",
          "photo": "https://picsum.photos/400/300?random=1"
        },
        {
          "item": "Laptop",
          "price": 35000,
          "condition": "Very Good",
          "photo": "https://picsum.photos/400/300?random=2"
        },
        {
          "item": "Study Table",
          "price": 1500,
          "condition": "Good",
          "photo": "https://picsum.photos/400/300?random=3"
        },
        {
          "item": "Chair",
          "price": 800,
          "condition": "Fair",
          "photo": "https://picsum.photos/400/300?random=4"
        },
        {
          "item": "Ceiling Fan",
          "price": 2500,
          "condition": "Good",
          "photo": "https://picsum.photos/400/300?random=5"
        },
        {
          "item": "Mattress",
          "price": 1200,
          "condition": "Average",
          "photo": "https://picsum.photos/400/300?random=6"
        },
        {
          "item": "Bookshelf",
          "price": 1800,
          "condition": "Very Good",
          "photo": "https://picsum.photos/400/300?random=7"
        },
        {
          "item": "Cooler",
          "price": 4500,
          "condition": "Good",
          "photo": "https://picsum.photos/400/300?random=1"
        },
        {
          "item": "Laptop",
          "price": 35000,
          "condition": "Very Good",
          "photo": "https://picsum.photos/400/300?random=2"
        },
        {
          "item": "Study Table",
          "price": 1500,
          "condition": "Good",
          "photo": "https://picsum.photos/400/300?random=3"
        },
        {
          "item": "Chair",
          "price": 800,
          "condition": "Fair",
          "photo": "https://picsum.photos/400/300?random=4"
        },
        {
          "item": "Ceiling Fan",
          "price": 2500,
          "condition": "Good",
          "photo": "https://picsum.photos/400/300?random=5"
        },
        {
          "item": "Mattress",
          "price": 1200,
          "condition": "Average",
          "photo": "https://picsum.photos/400/300?random=6"
        },
        {
          "item": "Bookshelf",
          "price": 1800,
          "condition": "Very Good",
          "photo": "https://picsum.photos/400/300?random=7"
        }
      ]

    return ( 
        <>
        <div className="relative p-5 px-36 w-full h-auto items-center">
        {items.map(function(ele){
          return <Cards item={ele.item} price={ele.price} condition={ele.condition} photo={ele.photo}/>
        })}        
        {/* <AddItem/> */}
        {<Upscroll/>}
        </div>
        </>
     );
}
 
export default MarketPlace;