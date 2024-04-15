function Pomodoro({ center = true }) {
  const pomodoroStyle = center
    ? "w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-5 items-center justify-center"
    : "flex flex-col items-center justify-center w-full h-full text-white";
  return (
    <div id="pomodoro" className={pomodoroStyle}>
      <div id="pomodoro-modes" className="flex gap-4">
        <button id="pomodoro-mode" className="pomodoro-mode active">
          pomodoro
        </button>
        <button id="short-break-mode" className="pomodoro-mode">
          short break
        </button>
        <button id="long-break-mode" className="pomodoro-mode">
          long break
        </button>
      </div>
      <div id="pomodoro-display" className="flex flex-col gap-4">
        <h1 id="pomodoro-timer-display" className="pomodoro-timer-display">
          25:00
        </h1>
      </div>
      <div id="pomodoro-controls" className="mt-2">
        <div id="pomodoro-timer-buttons">
          <button
            id="pomodoro-timer-start"
            className="pomodoro-timer-control cut-out-text"
          >
            start
          </button>
          <button
            id="pomodoro-timer-reset"
            className="pomodoro-timer-control-plain"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default Pomodoro;
