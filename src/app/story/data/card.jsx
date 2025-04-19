import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "200",
  subsets: ["latin"],
});

export default function card({ card }) {
  const { name, age, email } = card;
  console.log(card);
  return (
    <div>
      <div>
        <h2 className={roboto.className}>Name:{name}</h2>
        <h2>Age: {age}</h2>
        <h2>Email: {email}</h2>
      </div>
    </div>
  );
}
