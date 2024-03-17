"use client";

export default function Confirm() {
  return (
    <div className="border-black border-2 absolute">
      <span className="block">Are you sure?</span>
      <button className="p-2">Yes</button>
      <button className="p-2">No!</button>
    </div>
  );
}
