import Image from "next/image";
import React from "react";

// Import Icons
import { MdImage } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import Pomodoro from "../button/Pomodoro";

export default function Home() {
  return (
    <div className="flex-1 pl-3">
      <div id="content" className="h-full gap-3 grid grid-cols-12">
        <div
          id="first-column"
          className="col-span-3 flex flex-col gap-3 rounded-lg h-full "
        >
          <div
            id="song-list"
            className="flex flex-col gap-3 p-3 bg-potrello-white-100 rounded-lg h-[60%] shadow-sm shadow-gray-100 border border-gray-200/85"
          >
            <div
              id="image"
              className="flex items-center justify-center h-24 bg-gray-200 rounded-md"
            >
              <MdImage className="size-7" />
            </div>
            {/* <Image className="" /> */}
            <div id="song-list-content" className="p-2 flex flex-col gap-3">
              <div
                id="song-title"
                className="flex items-center justify-between"
              >
                <p className="text-sm">Josh Hutcherson || Whistle</p>
                <SlOptionsVertical className="size-4 fill-gray-500" />
              </div>
            </div>
          </div>
          <div
            id="todolist"
            className="p-3 bg-potrello-white-100 rounded-lg h-[40%] shadow-sm shadow-gray-100 border border-gray-200/85"
          >
            <div id="todolist-title"></div>
            <div
              id="todolist-content"
              className="p-2 flex flex-col gap-3"
            ></div>
          </div>
        </div>
        <div id="second-column" className="col-span-6 p-3 rounded-lg h-full">
          <div className="flex items-center justify-center">
            <Pomodoro />
          </div>
        </div>
        <div id="third-column" className="flex flex-col gap-3 col-span-3">
          <div
            id="song-list"
            className="flex flex-col gap-3 p-3 bg-potrello-white-100 rounded-lg h-[60%] shadow-sm shadow-gray-100 border border-gray-200/85"
          >
            <div
              id="image"
              className="flex items-center justify-center h-24 bg-gray-200 rounded-md"
            >
              <MdImage className="size-7" />
            </div>
            {/* <Image className="" /> */}
            <div id="song-list-content" className="p-2 flex flex-col gap-3">
              <div
                id="song-title"
                className="flex items-center justify-between"
              >
                <p className="text-sm">Josh Hutcherson || Whistle</p>
                <SlOptionsVertical className="size-4 fill-gray-500" />
              </div>
            </div>
          </div>
          <div
            id="todolist"
            className="p-3 bg-potrello-white-100 rounded-lg h-[40%] shadow-md shadow-gray-100 border border-gray-200/85"
          >
            <div id="todolist-title"></div>
            <div
              id="todolist-content"
              className="p-2 flex flex-col gap-3"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
