import React from "react";

const Helmate = (props) => {
  document.title = "FurNish - " + props.title;

  return <div className="w-100">{props.children}</div>;
};

export default Helmate;
