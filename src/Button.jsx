import { useState } from "react";

export default function Button() {
  const [unlike, setlike] = useState(false);
  return (
    <button className="btnHeart" onClick={() => setlike(!unlike)}>
      {!unlike ? "🤍" : "❤️"}
    </button>
  );
}
