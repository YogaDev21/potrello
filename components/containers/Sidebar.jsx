"use client"


import React, { useState } from "react";

// Import Icons
import { PiHouseSimple } from "react-icons/pi";
import { LuUser2 } from "react-icons/lu";

// Initialize Variables
const buttonList = {
    Dashboard: <PiHouseSimple className="fill-gray-400 size-6" />,
    Profile: <LuUser2 className="stroke-gray-400 size-6" />,
}

export default function Sidebar() {
    const [selectedButton, setSelectedButton] = useState(null);

    return (
        <div className="bg-potrello-white-100 shadow-lg shadow-gray-300 min-h-screen w-12 p-1 pt-2 rounded-xl">
            <div className="flex flex-col items-center w-full h-full ">

                {Object.keys(buttonList).map((value) => (
                    <button
                        key={value}
                        className={`flex py-2 text-white font-normal ${selectedButton === value ? "bg-potrello-blue-1000" : ""}`}
                        onClick={() => setSelectedButton(value)}
                    >
                        {buttonList[value]}
                    </button>
                ))}
                
            </div>
        </div>
    );
}

