import React from "react";
import AddItemLF from "../components/AddItemLF.jsx";
import LF from "../components/LF.jsx";

const LostAndFound = () => {
    const items=[
        {
          "situation": "Lost",
          "item": "Laptop",
          "location": "Library, 2nd Floor",
          "contact": "john.doe@example.com",
          "photo": "https://picsum.photos/300/400?random=1"
        },
        {
          "situation": "Found",
          "item": "Water Bottle",
          "location": "Cafeteria",
          "contact": "jane.doe@example.com",
          "photo": "https://picsum.photos/300/400?random=2"
        },
        {
          "situation": "Lost",
          "item": "Notebook",
          "location": "Lecture Hall B1",
          "contact": "123-456-7890",
          "photo": "https://picsum.photos/300/400?random=3"
        },
        {
          "situation": "Found",
          "item": "Umbrella",
          "location": "Main Entrance Lobby",
          "contact": "found.items@collegemail.com",
          "photo": "https://picsum.photos/300/400?random=4"
        },
        {
          "situation": "Lost",
          "item": "Smartphone",
          "location": "Gym Locker Room",
          "contact": "987-654-3210",
          "photo": "https://picsum.photos/300/400?random=5"
        },
        {
          "situation": "Found",
          "item": "ID Card",
          "location": "Parking Lot C",
          "contact": "id.lostfound@collegemail.com",
          "photo": "https://picsum.photos/300/400?random=6"
        },
        {
          "situation": "Lost",
          "item": "Calculator",
          "location": "Physics Lab",
          "contact": "456-789-1234",
          "photo": "https://picsum.photos/300/400?random=7"
        },
        {
          "situation": "Found",
          "item": "Pair of Glasses",
          "location": "Auditorium, Row E",
          "contact": "helpdesk@collegemail.com",
          "photo": "https://picsum.photos/300/400?random=8"
        }
      ]
      

    return ( 
        <>
        <div className="relative p-5 px-36 w-full h-auto items-center">
        {items.map(function(ele){
          return <LF situation={ele.situation} item={ele.item} location={ele.location} contact={ele.contact} photo={ele.photo}/>
        })}        
        <AddItemLF/>
        </div>
        </>
     );
}
 
export default LostAndFound;