import { useState } from "react";
import Product from "./Product";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <Product name="Iphone" onAdd={handleClick} />
      <Product name="MacBook" onAdd={handleClick} />
      <Product name="AppleTV" onAdd={handleClick} />
      <p>Всего добавлено: {count}</p>
    </>
  );
}
