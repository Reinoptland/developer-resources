import React from "react";

export default function Resource(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.type}</h2>
      <a href={props.url}> LINK </a>
    </div>
  );
}
