import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const PublicInformation = () => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentDay = currentTime
    ? currentTime.toLocaleDateString("en-US", { weekday: "long" })
    : "";
  const currentDate = currentTime
    ? currentTime.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";
  const currentTimeString = currentTime
    ? currentTime.toLocaleTimeString("en-US")
    : "";

  return (
    <div>
      {currentTime ? (
        <>
          <h1 className="font-bold text-4xl">{currentTimeString}</h1>
          <div className="flex items-center justify-between">
            <p>{currentDay}</p>
            <p>{currentDate}</p>
          </div>
          <Link
            href="https://github.com/YogaDev21/potrello"
            className="text-3xl w-max"
          >
            <FaGithub />
          </Link>
        </>
      ) : (
        <div className="flex flex-col gap-1">
          <div className="bg-gray-200 w-full h-4 rounded"></div>
          <div className="bg-gray-200 w-3/5 h-4 rounded"></div>
          <div className="bg-gray-200 w-2/5 h-4 rounded"></div>
          <div className="bg-gray-200 w-1/5 h-4 rounded"></div>
        </div>
      )}
    </div>
  );
};

export default PublicInformation;
