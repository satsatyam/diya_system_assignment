import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="sign-up">
      <button className="btn">
        <i class="fa fa-headphones" aria-hidden="true"></i> Star
      </button>
    </Link>
  );
}
