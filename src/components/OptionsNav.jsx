import React, { useState } from "react";
import { Link } from "react-router-dom";

const OptionsNav = () => {
    const [clickedLink, setClickedLink] = useState("");

    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-between gap-3 px-10 text-xl">
            <Link
                to="/lostandfound"
                className={`w-48 text-center rounded-tl-md rounded-tr-lg cursor-pointer ${
                    clickedLink === "lostandfound" ? "bg-emerald-700 text-white" : "hover:bg-emerald-800 "
                }`}
                onClick={() => setClickedLink("lostandfound")}
            >
                Lost and Found
            </Link>

            <Link
                to="/"
                className={`w-48 text-center rounded-tl-md rounded-tr-lg cursor-pointer ${
                    clickedLink === "marketplace" ? "bg-emerald-700 text-white" : "hover:bg-emerald-800"
                }`}
                onClick={() => setClickedLink("marketplace")}
            >
                Marketplace
            </Link>

            <Link
                to="/donate"
                className={`w-48 text-center rounded-tl-md rounded-tr-lg cursor-pointer ${
                    clickedLink === "donate" ? "bg-emerald-700 text-white" : "hover:bg-emerald-800"
                }`}
                onClick={() => setClickedLink("donate")}
            >
                Donate
            </Link>

            <Link
                to="/myuploads"
                className={`w-48 text-center rounded-tl-md rounded-tr-lg cursor-pointer ${
                    clickedLink === "myuploads" ? "bg-emerald-700 text-white" : "hover:bg-emerald-800"
                }`}
                onClick={() => setClickedLink("myuploads")}
            >
                My Uploads
            </Link>
        </div>
    );
};

export default OptionsNav;
