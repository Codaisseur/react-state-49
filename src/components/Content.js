import React from "react";

// { name, imageUrl } ===>
/*
<div>
  <img />
  <h3> 
</div>

*/

const Content = props => {
  console.log("content props", props);

  return (
    <div>
      {props.productList.map(product => {
        return (
          <div>
            <img src={product.imageUrl}></img>
            <h3>{product.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
