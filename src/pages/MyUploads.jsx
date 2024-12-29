import React from "react";
import Upscroll from "../components/Upscroll";
import LF from "../components/LF";
import Cards from "../components/Cards";
import AddItem from "../components/AddItem";

const MyUploads = () => {
    const myuplods = [
        {
            "check": true,
            "title": "Lost: Wallet",
            "info1": "Library Entrance",
            "info2": "123-456-7890",
            "picture": "https://picsum.photos/300/400?random=1"
        },
        {
            "check": true,
            "title": "Found: Keys",
            "info1": "Cafeteria",
            "info2": "foundkeys@example.com",
            "picture": "https://picsum.photos/300/400?random=2"
        },
        {
            "check": true,
            "title": "Lost: Smartphone",
            "info1": "Main Auditorium",
            "info2": "987-654-3210",
            "picture": "https://picsum.photos/300/400?random=3"
        },
        {
            "check": false,
            "title": "Bicycle",
            "info1": "$150",
            "info2": ": Good",
            "picture": "https://picsum.photos/300/400?random=4"
        },
        {
            "check": false,
            "title": "Laptop",
            "info1": "$800",
            "info2": "Like new",
            "picture": "https://picsum.photos/300/400?random=5"
        },
        {
            "check": true,
            "title": "Found: Notebook",
            "info1": "Study Hall",
            "info2": "foundnote@example.com",
            "picture": "https://picsum.photos/300/400?random=6"
        },
        {
            "check": false,
            "title": "Microwave",
            "info1": "$50",
            "info2": "Functional",
            "picture": "https://picsum.photos/300/400?random=7"
        },
        {
            "check": false,
            "title": "Guitar",
            "info1": "$300",
            "info2": "Excellent",
            "picture": "https://picsum.photos/300/400?random=8"
        }
    ]


    return (
        <div className="relative p-5 px-36 w-full h-auto items-center">
            <AddItem/>
            {myuplods.map(function (ele) {
                if (ele.check == true) {
                    return <LF item={ele.title} location={ele.info1} contact={ele.info2} photo={ele.picture} />
                }
                else {
                    return <Cards item={ele.title} price={ele.info1} photo={ele.picture} />
                }
            })}
            {<Upscroll />}
        </div>
    );
}

export default MyUploads;