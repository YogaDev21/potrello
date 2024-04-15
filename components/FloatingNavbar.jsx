import { useState, useEffect } from "react";

// MD
import { MdMusicNote } from "react-icons/md";
import { MdFullscreen } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdSettings } from "react-icons/md";

// PI
import { PiPlantFill } from "react-icons/pi";

function FloatingNavbar() {
  const [mode, setMode] = useState("");
  useEffect(() => {
    // Fetch mode from local storage
    const mode = localStorage.getItem("mode");
    if (mode) {
      setMode(mode);
    }
  }, []);

  function changeMode(mode) {
    localStorage.setItem("mode", mode);
    setMode(mode);
  }

  return (
    <div
      id="floating-buttons"
      className="w-full flex items-center justify-between"
    >
      <div id="left" className="flex gap-3">
        <a
          href=""
          className="floating-navbar-button"
        >
          <MdMusicNote className="size-6 fill-white" />
        </a>
      </div>
      <div id="right" className="flex gap-3">
        <div id="modes" className="flex border-2 border-gray-300 rounded-full">
          <a
            href=""
            className={`floating-navbar-mode-button ${mode === "plant" ? "active" : ""}`}
            onClick={() => changeMode("plant")}
          >
            <PiPlantFill className="size-7 fill-white" />
          </a>
          <a
            href=""
            className={`floating-navbar-mode-button ${mode === "home" ? "active" : ""}`}
            onClick={() => changeMode("home")}
          >
            <MdHomeFilled className="size-7 fill-white" />
          </a>
          <a
            href=""
            className={`floating-navbar-mode-button ${mode === "tasks" ? "active" : ""}`}
            onClick={() => changeMode("tasks")}
          >
            <MdOutlineTaskAlt className="size-7 fill-white" />
          </a>
        </div>
        <a
          href=""
          className="floating-navbar-button"
        >
          <MdSettings className="size-8 fill-white" />
        </a>
        <a
          href=""
          className="floating-navbar-button"
        >
          <MdFullscreen className="size-9 fill-white" />
        </a>
      </div>
    </div>
  );
}

export default FloatingNavbar;
