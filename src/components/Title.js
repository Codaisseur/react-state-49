import React from "react";

const Title = props => {
  // console.log("title props", props);
  return (
    <div>
      <h1 style={{ color: props.alert ? "#00ff15" : "white" }}>{props.text}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

export default Title;
