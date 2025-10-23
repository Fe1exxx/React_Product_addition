export default function Product({ name, onAdd }) {
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={onAdd}>Добавить</button>
    </div>
  );
}
