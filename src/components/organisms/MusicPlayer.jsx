"use client";
import { useState, useEffect } from "react";
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
    <div>
      <h2>Music Player</h2>
      {/* <p>Now playing: {currentMusic.name}</p> */}
      <audio id="audio" autoPlay controls>
        <source src={musicList[selectRandomMusic].music}></source>
      </audio>
    </div>
  );
};

export default MusicPlayer;
