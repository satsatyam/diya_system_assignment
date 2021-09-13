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
import BuildCanvas from '../../assets/icon/build-canvas.png'
import BuildCases from '../../assets/icon/build-cases.png'
import BuildSidebar from '../../assets/icon/build-sidebar.png'
import BuildAddons from '../../assets/icon/build-addons.png'
import ShareSearch from '../../assets/icon/share-search.png'
import ShareCollaborate from '../../assets/icon/share-collaborate.png'
import ShareReuse from '../../assets/icon/share-reuse.png'
import ShareDocument from '../../assets/icon/share-document.png'

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
        </div>
        <div className="b">
        <button className="buttonn">Go to the docs</button>
        <button className="buttonm"><i className="fa fa-play" aria-hidden="true"></i> Watch video</button>
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
      <BenefitList
        imgSrc1={BuildCanvas}
        title1="Build UIs in isolation"
        desc1="Implement components and pages without needing to fuss with data, APIs, or business logic."

        imgSrc2={BuildCases}
        title2="Mock hard to reach use cases"
        desc2="Render components in key states that are tricky to reproduce in an app."

        imgSrc3={BuildSidebar}
        title3="Document use cases as stories"
        desc3="Save use cases as stories in"

        imgSrc4={BuildAddons}
        title4="Supercharge your workflow with addons"
        desc4="Use addons to customize your workflow, automate testing, and integrate with your favorite tools."

      />
      <Testimonial
        quote="“Storybook is a powerful frontend workshop environment tool that allows teams to design, build, and organize UI components (and even full screens!) without getting tripped up over business logic and plumbing.”"
        name="Brad Frost"
        title="Author of Atomic Design"
        img1="https://avatars3.githubusercontent.com/u/383701?s=460&amp;v=4"
        img2="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIHg9IjAiIHk9IjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMwMCAzMDAiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMwMCAzMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIGlkPSJhdG9tIj48Zz48Zz48Y2lyY2xlIGN4PSIxNDkuNSIgY3k9IjE0OS42IiByPSIxNDEuNiIgZmlsbD0iI0Y2RjRERSIgc3Ryb2tlPSIjMDEwMTAxIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMTUiLz48Y2lyY2xlIGN4PSIxNDkuNSIgY3k9IjE0OS42IiByPSI4MS42IiBmaWxsPSIjQkQ2OTI4Ii8+PC9nPjxwYXRoIGZpbGw9IiNCRDY5MjgiIGQ9Ik0yOTUuNyw2MS44YzAsMTkuMi0xNS41LDM0LjYtMzQuNiwzNC42UzIyNi41LDgxLDIyNi41LDYxLjhzMTUuNS0zNC42LDM0LjYtMzQuNiBDMjgwLjEsMjcuMiwyOTUuNyw0Mi42LDI5NS43LDYxLjh6Ii8+PC9nPjwvZz48L3N2Zz4="
      />
      <IndexScreen />

      <ValuePropsWrapper
        title="Document UI to share with your team"
        description="Stories show how UIs actually work not just how they're supposed to work. That makes gathering feedback and reproductions easy."
        videoSrc={WorkflowShare}
      />
      <BenefitList
        imgSrc1={ShareSearch}
        title1="Spot test in a glance"
        desc1="Whenever you write a story you get a handy test case. Quickly browse stories to make sure your UI looks right."

        imgSrc2={ShareCollaborate}
        title2="Visual test appearance"
        desc2="Pinpoint UI changes down to the pixel by comparing image snapshots of stories."

        imgSrc3={ShareReuse}
        title3="Unit test functionality"
        desc3="Reuse stories in your unit tests to confirm nuanced functionality."

        imgSrc4={ShareDocument}
        title4="Accessibility test"
        desc4="Check stories for WCAG and ARIA issues with the A11y addon."
      />

      <Testimonial
        quote="“Storybook has made developing components more streamlined by allowing us to easily include technical documentation within our design system!”"
        name="Taurie Davis"
        title="Author of Building Design Systems"
        img1="https://avatars0.githubusercontent.com/u/3028593?s=460&amp;v=4"
        img2="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTA1MiIgaGVpZ2h0PSIzNDIiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDEwNTIgMzQyIj48dGl0bGU+d21fd2ViPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBpZD0iUGFnZS0xIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48ZyBpZD0id21fd2ViIj48ZyBpZD0iR3JvdXAiIGZpbGw9IiM4QzkyOUQiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDY0LjAwMDAwMCwgOTEuMDAwMDAwKSI+PHBhdGggaWQ9IlNoYXBlIiBkPSJNMzAwLjM2NywzLjEzIEwyNzkuNTY0LDMuMTMgTDI3OS42MywxNTcuODcgTDM2My43ODUsMTU3Ljg3IEwzNjMuNzg1LDEzOC43MzQgTDMwMC40MzMsMTM4LjczNCBMMzAwLjM2NywzLjEzMSBMMzAwLjM2NywzLjEzIFogTTQ0My45MTcsMTMwLjcgQzQzOC43MTcsMTM2LjEzNCA0MjkuOTcxLDE0MS41NyA0MTguMTUxLDE0MS41NyBDNDAyLjMxMywxNDEuNTcgMzk1LjkzMSwxMzMuNzczIDM5NS45MzEsMTIzLjYxMyBDMzk1LjkzMSwxMDguMjU5IDQwNi41NjgsMTAwLjkzNSA0MjkuMjYzLDEwMC45MzUgQzQzMy41MTgsMTAwLjkzNSA0NDAuMzczLDEwMS40MDcgNDQzLjkxOCwxMDIuMTE1IEw0NDMuOTE4LDEzMC43MDEgTDQ0My45MTcsMTMwLjcgWiBNNDIyLjQwNywzNi45MTMgQzQwNS42MDcsMzYuOTEzIDM5MC4xOTksNDIuODY1IDM3OC4xNzcsNTIuNzcxIEwzODUuNTI5LDY1LjUwMSBDMzk0LjAzOSw2MC41MzkgNDA0LjQzOSw1NS41NzcgNDE5LjMzMSw1NS41NzcgQzQzNi4zNTEsNTUuNTc3IDQ0My45MTYsNjQuMzE5IDQ0My45MTYsNzguOTY3IEw0NDMuOTE2LDg2LjUyNyBDNDQwLjYwNiw4NS44MTcgNDMzLjc1Miw4NS4zNDMgNDI5LjQ5Niw4NS4zNDMgQzM5My4wOTIsODUuMzQzIDM3NC42NTQsOTguMSAzNzQuNjU0LDEyNC43OTcgQzM3NC42NTQsMTQ4LjY1NyAzODkuMzEsMTYwLjcwNSA0MTEuNTMsMTYwLjcwNSBDNDI2LjUsMTYwLjcwNSA0NDAuODQ0LDE1My44NTMgNDQ1LjgwOCwxNDIuNzUxIEw0NDkuNTksMTU3Ljg2OSBMNDY0LjI0NywxNTcuODY5IEw0NjQuMjQ3LDc4LjcyOSBDNDY0LjI0Nyw1My42ODkgNDUzLjM3MywzNi45MTQgNDIyLjQwNywzNi45MTQgTDQyMi40MDcsMzYuOTEzIFogTTUzMS4zNjgsMTQyLjI3NyBDNTIzLjU2NiwxNDIuMjc3IDUxNi43MTEsMTQxLjMzMiA1MTEuNTEsMTM4Ljk2OSBMNTExLjUxLDY3LjM4OSBDNTE4LjYwMyw2MS40ODEgNTI3LjM1LDU3LjIyOSA1MzguNDYsNTcuMjI5IEM1NTguNTUyLDU3LjIyOSA1NjYuMzUzLDcxLjQwMyA1NjYuMzUzLDk0LjMxOSBDNTY2LjM1MywxMjYuOTE5IDU1My44MjMsMTQyLjI3NiA1MzEuMzY4LDE0Mi4yNzYgTDUzMS4zNjgsMTQyLjI3NyBaIE01NDAuMTEsMzYuOTEyIEM1MjEuNTE4LDM2LjkxMiA1MTEuNTEsNDkuNTUyIDUxMS41MSw0OS41NTIgTDUxMS41MSwyOS41OSBMNTExLjQ0NCwzLjEzMiBMNDkxLjExNiwzLjEzMiBMNDkxLjE4MiwxNTQuMDg5IEM1MDEuMzQ2LDE1OC4zMzkgNTE1LjI5MiwxNjAuNzAyIDUzMC40MjIsMTYwLjcwMiBDNTY5LjE5LDE2MC43MDIgNTg3Ljg2NCwxMzUuODk4IDU4Ny44NjQsOTMuMTM4IEM1ODcuODY0LDU5LjM1NSA1NzAuNjA0LDM2LjkxMSA1NDAuMTEsMzYuOTExIEw1NDAuMTEsMzYuOTEyIFogTTc0LjIzOCwxOS45MDQgQzkyLjY3NiwxOS45MDQgMTA0LjQ5NiwyNi4wNDYgMTEyLjI5OCwzMi4xODkgTDEyMS4yMzYsMTYuNzEyIEMxMDkuMDUyLDYuMDM0IDkyLjY2MywwLjI5NSA3NS4xODMsMC4yOTUgQzMwLjk3OSwwLjI5NSAwLjAxMywyNy4yMjcgMC4wMTMsODEuNTYyIEMwLjAxMywxMzguNDk3IDMzLjQyLDE2MC43MDIgNzEuNjM3LDE2MC43MDIgQzkwLjc4NSwxNjAuNzAyIDEwNy4wOTcsMTU2LjIxNCAxMTcuNzMzLDE1MS43MjYgTDExNy4yOTgsOTAuODk0IEwxMTcuMjk4LDcxLjc2IEw2MC41NjQsNzEuNzYgTDYwLjU2NCw5MC44OTUgTDk2LjczMSw5MC44OTUgTDk3LjE2OCwxMzcuMDc5IEM5Mi40NDEsMTM5LjQ0MSA4NC4xNjgsMTQxLjMzMSA3My4wNTgsMTQxLjMzMSBDNDIuMzI4LDE0MS4zMzEgMjEuNzYxLDEyMi4wMTEgMjEuNzYxLDgxLjMyNSBDMjEuNzYxLDM5Ljk4NSA0My4wMzYsMTkuOTAzIDc0LjIzOSwxOS45MDMgTDc0LjIzOCwxOS45MDQgWiBNMjIwLjUzNCwzLjEzIEwyMDAuMjA0LDMuMTMgTDIwMC4yNywyOS4xMTggTDIwMC4yNywxMTguODg5IEMyMDAuMjcsMTQzLjkyOSAyMTEuMTQ0LDE2MC43MDMgMjQyLjExLDE2MC43MDMgQzI0Ni4zOSwxNjAuNzAzIDI1MC41NzUsMTYwLjMxMyAyNTQuNjQsMTU5LjU3NyBMMjU0LjY0LDE0MS4zMzIgQzI1MS42OTcsMTQxLjc4MiAyNDguNTU3LDE0Mi4wMzkgMjQ1LjE4NSwxNDIuMDM5IEMyMjguMTY1LDE0Mi4wMzkgMjIwLjYsMTMzLjI5OSAyMjAuNiwxMTguNjUyIEwyMjAuNiw1Ni43NTcgTDI1NC42NCw1Ni43NTcgTDI1NC42NCwzOS43NDcgTDIyMC42LDM5Ljc0NyBMMjIwLjUzNCwzLjEzIFogTTE0OC42MiwxNTcuODcgTDE2OC45NSwxNTcuODcgTDE2OC45NSwzOS43NDcgTDE0OC42MiwzOS43NDcgTDE0OC42MiwxNTcuODY3IEwxNDguNjIsMTU3Ljg3IFogTTE0OC42MiwyMy40NDggTDE2OC45NSwyMy40NDggTDE2OC45NSwzLjEzIEwxNDguNjIsMy4xMyBMMTQ4LjYyLDIzLjQ0OCBaIi8+PC9nPjxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjRTI0MzI5IiBwb2ludHM9IjE4NS4zOTggMzQxLjEzIDI1My40MTEgMTMxLjgwOCAxMTcuMzkgMTMxLjgwOCAxODUuNCAzNDEuMTMiLz48cG9seWdvbiBpZD0iUGF0aCIgZmlsbD0iI0ZDNkQyNiIgcG9pbnRzPSIxODUuMzk4IDM0MS4xMyAxMTcuMzg1IDEzMS44MDggMjIuMDY1IDEzMS44MDggMTg1LjQgMzQxLjEyOCIvPjxwYXRoIGlkPSJQYXRoIiBmaWxsPSIjRkNBMzI2IiBkPSJNMjIuMDY2LDEzMS44MDggTDEuMzk2LDE5NS40MTggQy0wLjQ4OCwyMDEuMjIxIDEuNTc2LDIwNy41NzggNi41MTMsMjExLjE2MiBMMTg1LjM5OCwzNDEuMTMgTDIyLjA2NiwxMzEuODA3IEwyMi4wNjYsMTMxLjgwOCBaIi8+PHBhdGggaWQ9IlBhdGgiIGZpbGw9IiNFMjQzMjkiIGQ9Ik0yMi4wNjYsMTMxLjgwOCBMMTE3LjM4NiwxMzEuODA4IEw3Ni40Miw1LjczNSBDNzQuMzEzLC0wLjc1MiA2NS4xMzYsLTAuNzUyIDYzLjAzLDUuNzM1IEwyMi4wNjUsMTMxLjgwOCBMMjIuMDY2LDEzMS44MDggWiIvPjxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjRkM2RDI2IiBwb2ludHM9IjE4NS4zOTggMzQxLjEzIDI1My40MTEgMTMxLjgwOCAzNDguNzMxIDEzMS44MDggMTg1LjQgMzQxLjEyOCIvPjxwYXRoIGlkPSJQYXRoIiBmaWxsPSIjRkNBMzI2IiBkPSJNMzQ4LjczLDEzMS44MDggTDM2OS40LDE5NS40MTggQzM3MS4yODQsMjAxLjIyMSAzNjkuMjIsMjA3LjU3OCAzNjQuMjgzLDIxMS4xNjIgTDE4NS4zOTgsMzQxLjEzIEwzNDguNzMsMTMxLjgwNyBMMzQ4LjczLDEzMS44MDggWiIvPjxwYXRoIGlkPSJQYXRoIiBmaWxsPSIjRTI0MzI5IiBkPSJNMzQ4LjczLDEzMS44MDggTDI1My40MSwxMzEuODA4IEwyOTQuMzc2LDUuNzM1IEMyOTYuNDg0LC0wLjc1MiAzMDUuNjYxLC0wLjc1MiAzMDcuNzY4LDUuNzM1IEwzNDguNzMxLDEzMS44MDggTDM0OC43MywxMzEuODA4IFoiLz48L2c+PC9nPjwvc3ZnPg=="
      />
      <CtaWrapper />
      <Footer />
    </>
  );
}
