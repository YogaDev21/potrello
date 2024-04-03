import Image from "next/image";
import React from "react";

// Import Components
import Button from "@/src/components/atoms/Button";

// Import Icons
import { MdImage } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import TodoList from "../organisms/TodoList";
import MusicPlayer from "../organisms/MusicPlayer";
import Pomodoro from "../organisms/Pomodoro";
import QuickNotes from "../organisms/QuickNotes";
import PublicInformation from "../organisms/PublicInformation";

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
            <PublicInformation />
          </div>
          <div
            id="todolist"
            className="p-3 bg-potrello-white-100 rounded-lg h-[40%] shadow-sm shadow-gray-100 border border-gray-200/85"
          >
            <QuickNotes />
          </div>
        </div>
        <div
          id="second-column"
          className="col-span-6 p-3 rounded-lg h-full flex"
        >
          <Pomodoro />
        </div>
        <div id="third-column" className="flex flex-col gap-3 col-span-3">
          <div
            id="song-list"
            className="flex flex-col gap-3 p-3 bg-potrello-white-100 rounded-lg h-[60%]   shadow-sm shadow-gray-100 border border-gray-200/85"
          >
            <MusicPlayer />
          </div>
          <div
            id="todolist"
            className="p-3 bg-potrello-white-100 rounded-lg h-[40%] shadow-md shadow-gray-100 border border-gray-200/85"
          >
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}
