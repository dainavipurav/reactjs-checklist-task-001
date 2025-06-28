import React, { useState } from "react";
import LeftArrow from "./components/LeftArrrow";
import RightArrow from "./components/RightArrow";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";
function App() {
  const [leftItems, setLeftItems] = useState([
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Litchi",
    "Jackfruit",
    "Watermelon",
    "Cherry",
  ]);
  const [rightItems, setRightItems] = useState([
    "Tiger",
    "Lion",
    "Dog",
    "Cat",
    "Mouse",
    "Cow",
    "Baffelo",
    "Parrot",
    "Crow",
    "Sparrow",
  ]);

  function rightClick() {
    if (leftItems.length <= 0) {
      alert("No items left");
      return;
    }
    setRightItems((previous) => [...previous, leftItems[0]]);
    console.log("Right Items : " + rightItems);
    setLeftItems((prevItems) => prevItems.slice(1));
    console.log("Left Items : " + leftItems);
  }

  function leftClick() {
    if (rightItems.length <= 0) {
      alert("No items left");
      return;
    }
    setLeftItems([...leftItems, rightItems[0]]);
    console.log("Left Items : " + leftItems);
    setRightItems((prevItems) => prevItems.slice(1));
    console.log("Right Items : " + rightItems);
  }

  return (
    <div className="container">
      <LeftBox list={leftItems} />
      <div className="middle-buttons">
        <LeftArrow
          onClick={leftClick}
          disabled={rightItems.length <= 0 ? true : false}
        />
        <RightArrow
          onClick={rightClick}
          list={leftItems}
          disabled={leftItems.length <= 0 ? true : false}
        />
      </div>
      <RightBox list={rightItems} />
    </div>
  );
}

export default App;
