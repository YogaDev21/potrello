"use client";
import { useState, useEffect } from "react";
import { MdImage } from "react-icons/md";
const musicList = [
  {
    name: "music 1",
    image: "",
    music: "../../assets/music/lofi1.mp3",
  },
  {
    name: "music 2",
    image: "",
    music: "../../assets/music/lofi2.mp3",
  },
];

const MusicPlayer = () => {
  const selectRandomMusic = Math.floor(Math.random() * musicList.length);
  console.log(musicList[selectRandomMusic].music);
  return (
    <div className="flex flex-col gap-3">
      <div
        id="image"
        className="flex items-center justify-center h-24 bg-gray-200 rounded-md"
      >
        <MdImage className="size-7" />
      </div>
      {/* <p>Now playing: {currentMusic.name}</p> */}
      <audio id="audio" autoPlay controls>
        <source src={musicList[selectRandomMusic].music}></source>
      </audio>
      <h2>Music Name</h2>
    </div>
  );
};

export default MusicPlayer;
