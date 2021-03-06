import React from 'react'
import './ValuePropsWrapper.css'


const ValuePropsWrapper = ({title,description,videoSrc}) => {
  return (
    <div orientation="left" className="ValueProp__Wrapper-s27rv9-4 dyIjuO">
      <div className="ValueProp__Meta-s27rv9-3 cojJWW">
        <h2 className="ValueProp__Title-s27rv9-1 eXsXDL">{title}</h2>
        <div className="ValueProp__Desc-s27rv9-2 dmgqgS">{description}</div>
      </div>
      <div className="ValueProp__Media-s27rv9-0 hySWSa">
        <div className="PlaceholderAspectRatio__Wrapper-gfrj8l-0 gAbpKH IndexScreen__Placeholder-sc-14a3yl6-2 iWcVxO abcdef">
          <video autoplay="" loop="" playsinline="" alt="Storybook build workflow video" className="Video__StyledVideo-sc-1d2xgwb-0 gXgTXy">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
export default ValuePropsWrapper;
