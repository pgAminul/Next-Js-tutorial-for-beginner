import Link from "next/link";
import React from "react";

export default function page() {
  const people = [
    { name: "Alice", id: 1, age: 25 },
    { name: "Bob", id: 2, age: 30 },
    { name: "Charlie", id: 3, age: 22 },
    { name: "Diana", id: 4, age: 28 },
  ];

  return (
    <div>
      {people.map((p) => {
        return (
          <>
            <h2>{p.name}</h2>
            <Link href={`/story/${p.id}`}>Details</Link>
          </>
        );
      })}
      <div className="bg-black text-white p-5 rounded-3xl w-fit">
        <Link href={"/story/data"}>Data Page</Link>
      </div>
    </div>
  );
}
