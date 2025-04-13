export default function page({ params }) {
  const { id } = params;
  return (
    <div>
      <h2>this content id is {id}</h2>
    </div>
  );
}
