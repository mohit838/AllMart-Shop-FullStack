import React from "react";

const Helmate = (props) => {
  document.title = "AllMart - " + props.title;

  return <div className="w-100">{props.children}</div>;
};

export default Helmate;
