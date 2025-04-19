"use client";
import Card from "./card";
import { useEffect, useState } from "react";

export default function data() {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div>
      <h2>this is all Data Pages</h2>
      {cards.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}
