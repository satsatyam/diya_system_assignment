import React from "react";
import "../../App.css";

import SocialWrapper from "../SocialWrapper";
import ValuePropsWrapper from "../ValuePropsWrapper";
import BenefitList from "../BenefitList";
import Testimonial from "../Testimonial";
import IndexScreen from "../IndexScreen";
import CtaWrapper from "../CtaWrapper";
import Footer from "../Footer";
import VideoWrapper from "../VideoWrapper";
import WorkflowBuild from '../../video/storybook-workflow-build-optimized-lg.mp4'
import WorkflowShare from '../../video/storybook-workflow-share-optimized-lg.mp4'

export default function Home() {
  return (
    <>
      <div className="a">
        <h1 className="home">
          Build component driven UIs faster
        </h1>
        <p>
          Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and
          documentation.
        </p>
        <button className="buttonn">Go to the docs</button>
        <button className="buttonm">
          <i class="fa fa-play" aria-hidden="true"></i> Watch video
        </button>
      </div>
      <VideoWrapper />
      <SocialWrapper />
      <div className="IndexScreen__Separator-sc-14a3yl6-1 jkmdPe">
        <hr />
      </div>
      <ValuePropsWrapper
        title="Develop durable UIs"
        description="Storybook provides a sandbox to build UIs in isolation so you can develop hard-to-reach states and edge cases."
        videoSrc={WorkflowBuild}
      />
      <BenefitList />
      <Testimonial />
      <IndexScreen />
      {/* RE useable component */}
      <ValuePropsWrapper
        title="Document UI to share with your team"
        description="Stories show how UIs actually work not just how they're supposed to work. That makes gathering feedback and reproductions easy."
        videoSrc={WorkflowShare}
      />

      <CtaWrapper />
      <Footer />
    </>
  );
}
