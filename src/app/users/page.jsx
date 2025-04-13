import Link from "next/link";

export default async function users() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await data.json();
  return (
    <div>
      {result.map((user) => {
        return (
          <>
            <h2>{user.name}</h2>
            <Link href={`/users/${user.id}`}>See Users Details</Link>
          </>
        );
      })}
    </div>
  );
}
