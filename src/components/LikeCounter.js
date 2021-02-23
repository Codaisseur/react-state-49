import React, { useState, useEffect } from "react";

const LikeCounter = () => {
  const [numLikes, setNumLikes] = useState(0);
  const [opened, setOpened] = useState(false);

  // console.log("numLikes", numLikes);
  // console.log("setNumLikes", setNumLikes);

  useEffect(() => {
    console.log("im in the useEffect");
  }, []); // dependency array.

  // Never reassign a state manually
  // numLikes = 3 // wrong!
  // Call the setter function

  const onButtonPress = () => {
    console.log("old counter state", numLikes);
    setNumLikes(numLikes + 1);
    console.log("new counter state", numLikes);
  };

  const openOrClose = () => {
    setOpened(!opened);
  };

  // console.log("counter state in component body", numLikes);

  // const buttonTitle = opened ? "Hide message" : "Show secret message";

  return (
    <div>
      <h3>Current number of likes: {numLikes}</h3>
      <button onClick={onButtonPress}>Like!</button>
      <button onClick={openOrClose}>
        {opened ? "Hide" : "Show"} secret message
      </button>
      {opened ? <h2>HEY THIS POST IS FAKE</h2> : null}
    </div>
  );
};

export default LikeCounter;
