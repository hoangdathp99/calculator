import React from "react";
import "../css/OutputScreen_row.css";
const OutputScreenRow = (props) => {
  return (
    <div className="screen-row">
      <input type="text" readOnly value={props.value}></input>
    </div>
  );
};
export default OutputScreenRow;
