"use client";
import { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Pomodoro = () => {
  const [pomodoroCategories, setPomodoroCategories] = useState([
    {
      category: "Pomodoro",
      finished: 0,
      time: 1500,
    },
    {
      category: "Breaks",
      finished: 0,
      time: 300,
    },
    {
      category: "Long Breaks",
      finished: 0,
      time: 900,
    },
  ]);
  const initialTime = 25 * 60;
  const [timer, setTimer] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [selectedPomo, setSelectedPomo] = useState("Pomodoro");

  useEffect(() => {
    let interval = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    if (timer === 0) {
      const selectedCategory = pomodoroCategories.find(
        (category) => category.category === selectedPomo
      );
      if (selectedCategory) {
        const updatedCategories = pomodoroCategories.map((category) => {
          if (category.category === selectedPomo) {
            setTimer(1500);
            setIsActive(false);
            console.log(category.time);
            return {
              ...category,
              finished: category.finished + 1,
            };
          }
          return category;
        });
        setPomodoroCategories(updatedCategories);
      }
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };
  const setPomo = (value) => {
    const selectedCategory = pomodoroCategories.find(
      (category) => category.category === value
    );

    if (selectedCategory) {
      const selectedTime = selectedCategory.time;
      setTimer(selectedTime);
      setIsActive(false);
    }

    setSelectedPomo(selectedCategory.category);
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10">
      <div className="flex items-center justify-center w-full">
        {pomodoroCategories.map((value) => (
          <div
            key={value.category}
            className="mx-10 flex gap-5 bg-potrello-white-100 py-2 px-3 cursor-pointer"
            onClick={() => setPomo(value.category)}
          >
            <h1 className="font-bold">{value.finished}</h1>
            {value.category}
          </div>
        ))}
      </div>
      <h1 className="text-7xl">{formatTime(timer)}</h1>
      <div className="flex flex-col items-center justify-center cursor-pointer">
        {isActive ? (
          <FaPause className="text-4xl" onClick={pauseTimer} />
        ) : (
          <FaPlay className="text-4xl" onClick={startTimer} />
        )}
      </div>
    </div>
  );
};

export default Pomodoro;
