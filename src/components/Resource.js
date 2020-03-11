import React from "react";

export default function Resource(props) {
  return (
    <div>
      <p>
        The {` ${props.name} ${props.type}`}
        <a href={props.url}> LINK </a>
      </p>
    </div>
  );
}
