import React from "react";
import "../../App.css";

export default function Home() {
  return (
    <>
      <div className="a">
        <h1 className="home">
          Build component driven
          <br /> UIs faster
        </h1>
        <p>
          Storybook is an open source tool for building UI components and pages
          <br /> in isolation. It streamlines UI development, testing, and
          documentation.
        </p>
        <button className="buttonn">Go to the docs</button>
        <button className="buttonm">
          <i class="fa fa-play" aria-hidden="true"></i> Watch video
        </button>
      </div>
    </>
  );
}
