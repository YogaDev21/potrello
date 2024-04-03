"use client";
const QuickNotes = () => {
  return (
    <>
      <h1 className="font-bold text-2xl pb-2">Quick Notes</h1>
      <div className="flex flex-col gap-3">
        <textarea
          cols="30"
          rows="9"
          className="bg-gray-200 rounded px-2 py-1"
          style={{ resize: "none" }}
        >
          Type Your Quick Note Here
        </textarea>
      </div>
    </>
  );
};

export default QuickNotes;
