import React from 'react'
import './ValuePropsWrapper.css'
import WorkflowBuild from '../video/storybook-workflow-build-optimized-lg.mp4'

const ValuePropsWrapper = () => {
  return (
    <div orientation="left" className="ValueProp__Wrapper-s27rv9-4 dyIjuO">
      <div className="ValueProp__Meta-s27rv9-3 cojJWW">
        <h2 className="ValueProp__Title-s27rv9-1 eXsXDL">Develop durable UIs</h2>
        <div className="ValueProp__Desc-s27rv9-2 dmgqgS">Storybook provides a sandbox to build UIs in isolation so you can develop hard-to-reach states and edge cases.</div>
      </div>
      <div className="ValueProp__Media-s27rv9-0 hySWSa">
        <div className="PlaceholderAspectRatio__Wrapper-gfrj8l-0 gAbpKH IndexScreen__Placeholder-sc-14a3yl6-2 iWcVxO">
          <video autoplay="" loop="" playsinline="" alt="Storybook build workflow video" className="Video__StyledVideo-sc-1d2xgwb-0 gXgTXy">
            <source src={WorkflowBuild} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
export default ValuePropsWrapper;
