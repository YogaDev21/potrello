function Clock({
  center = true,
  topText = "As simplicitic as productivity could be",
}) {
  const clockStyle = center
    ? "w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center"
    : "flex flex-col items-center justify-center w-full h-full text-white";
  return (
    <div
      id="center"
      className={clockStyle}
    >
      <div id="content">
        <p className="text-white font-light text-3xl translate-y-9">
          As simplicitic as productivity could be
        </p>
        <h2 className="text-white font-bold text-10xl text-center">9:20</h2>
      </div>
    </div>
  );
}

export default Clock;
