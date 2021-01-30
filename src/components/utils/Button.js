import React from "react";

function Button(props) {
  const msg = props.msg;
  return (
    <div>
      <p>
        <a
          href="#"
          className={msg === "Remove" ? "btn btn-red" : "btn btn-blue"}
          style={{ padding: msg === "+" ? "5px 10px" : "" }}
        >
          {props.msg}
        </a>
      </p>
    </div>
  );
}

export default Button;
