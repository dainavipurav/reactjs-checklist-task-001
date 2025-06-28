import React from "react";
import ListItem from "./ListItem";

function RightBox(props) {
  return (
    <div className="box">
      <ul type="none">
        {props.list.map((element) => (
          <ListItem text={element} />
        ))}
      </ul>
    </div>
  );
}

export default RightBox;
