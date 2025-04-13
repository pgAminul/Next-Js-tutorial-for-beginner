"use client";
export default function ButtonForHome() {
  const handleButton = () => {
    alert("hello");
  };
  return (
    <div>
      <button
        onClick={handleButton}
        className="bg-black text-white p-5 rounded-full mb-8 ml-10"
      >
        Click Me
      </button>
    </div>
  );
}
