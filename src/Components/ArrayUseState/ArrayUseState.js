import React, { useState } from "react";

const ArrayUseState = () => {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Grapes"]);

  return (
    <div>
      <p>{fruits}</p>

      <button
        onClick={() => {
          const temp = [...fruits];
          temp.push("Guava");
          // setFruits(temp);
          setFruits([...fruits, "Guava"]);
          // setFruits(fruits.push("Guava")) - do not mutate directly, instead spread it and use it as ike above
        }}
      >
        Update Fruit
      </button>
    </div>
  );
};

export default ArrayUseState;
