"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Components
import SidebarItemGroup from "../molecules/SidebarItemGroup";
import SidebarItem from "../atoms/SidebarItem";

// Import Icons
import { PiHouseSimple } from "react-icons/pi";
import { LuUser2 } from "react-icons/lu";

// Initialize Variables
const buttonList = [
  {
    label: "Home",
    icon: <PiHouseSimple className="fill-gray-400 size-6" />,
  },
  {
    label: "Profile",
    icon: <LuUser2 className="stroke-gray-400 size-6" />,
  },
];

export default function Sidebar() {
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <div className="bg-potrello-white-100 min-h-full w-16 p-2 rounded-xl">
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col h-full">
          <Image
            src="/potrello.svg"
            width={24}
            height={24}
            quality={100}
            alt="potrello-logo"
            className="mt-2 mb-4"
          />
          <SidebarItemGroup>
            {buttonList.forEach((button) => {
              return <SidebarItem icon={button.icon} label={button.label} />;
            })}
            <SidebarItem
              icon={<PiHouseSimple />}
              label="Home"
              selected={true}
            />
            <SidebarItem icon={<LuUser2 />} label="Profile" />
          </SidebarItemGroup>
        </div>
      </div>
    </div>
  );
}
