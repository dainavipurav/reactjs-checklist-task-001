import React from "react";
import ListItem from "./ListItem";
function LeftBox(props) {
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

export default LeftBox;
