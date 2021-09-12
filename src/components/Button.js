import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="sign-up" className="sidebutton">
      <button className="btn"><i class="fa fa-headphones" aria-hidden="true"></i> Star</button>
      <button className="btn"> 64586</button>
    </Link>
  );
}
