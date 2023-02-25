import React from "react";
import "./button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function HeaderBtn(props) {
  return (
    <div>
      <button className={props.getStyle}>{props.text}</button>
    </div>
  );
}

export function BodyBtn(props) {
  return (
    <div>
      <button className={props.getClassStyle} style={props.inlineStyle}>
        <span>Get in Touch</span>
        <FontAwesomeIcon
          className="arrow-icon"
          icon={faArrowRight}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
}
