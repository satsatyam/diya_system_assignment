import React from 'react'
import './videoContainer.css'
import HeroVedio from '../video/storybook-hero-video-optimized-lg.mp4'

const videoContainer = () => {
  return (
    <div className="Hero__Wrapper-sc-1c410mj-22 kLLxhB">
      <section className="Hero__Content-sc-1c410mj-21 gdHMmb">
        <div className="Hero__Primary-sc-1c410mj-19 fgvsWb">
          <div className="Hero__VideoWrapper-sc-1c410mj-8 cEiGWL">
            <div class="PlaceholderAspectRatio__Wrapper-gfrj8l-0 gAbpKH Hero__Placeholder-sc-1c410mj-0 RIVMe" style={{ paddingBottom: "calc(66.7%)" }}>
              <video autoplay="" loop="" playsinline="" alt="Demo video" className="Video__StyledVideo-sc-1d2xgwb-0 gXgTXy">
                <source src={HeroVedio} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default videoContainer
