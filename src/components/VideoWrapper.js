import React from 'react'
import './VideoWrapper.css'

import HeroVedio from '../video/storybook-hero-video-optimized-lg.mp4'
import LogoReact from '../assets/icon/logo-react.svg'
import VueLogo from '../assets/icon/logo-vue.svg'
import Angular from '../assets/icon/logo-angular.svg'
import WebComponent from '../assets/icon/logo-web-components.svg'
import EmberLogo from '../assets/icon/logo-ember.svg'
import HtmlLogo from '../assets/icon/logo-html.svg'
import MithrilLogo from '../assets/icon/logo-mithril.svg'
import MarkoLogo from '../assets/icon/logo-marko.svg'
import SvelteLogo from '../assets/icon/logo-svelte.svg'
import RiotLogo from '../assets/icon/logo-riot.svg'
import PreactLogo from '../assets/icon/logo-preact.svg'
import RaxLogo from '../assets/icon/logo-rax.png'

const allIcon = [
  { "id": 1, "icon": LogoReact, "title": "React", "link": "https://storybook.js.org/docs/react/get-started/introduction" },
  { "id": 2, "icon": VueLogo, "title": "Vue", "link": "https://storybook.js.org/docs/vue/get-started/introduction"},
  { "id": 3, "icon": Angular, "title": "Angular", "link": "https://storybook.js.org/docs/angular/get-started/introduction" },
  { "id": 4, "icon": WebComponent, "title": "Web Components", "link": "https://storybook.js.org/docs/web-components/get-started/introduction" },
  { "id": 5, "icon": EmberLogo, "title": "Ember", "link": "https://storybook.js.org/docs/ember/get-started/introduction" },
  { "id": 6, "icon": HtmlLogo, "title": "HTML", "link": "https://storybook.js.org/docs/html/get-started/introduction" },
  { "id": 7, "icon": MithrilLogo, "title": "Mithril", "link": "https://storybook.js.org/docs/mithril/get-started/introduction" },
  { "id": 8, "icon": MarkoLogo, "title": "Marko", "link": "https://storybook.js.org/docs/marko/get-started/introduction" },
  { "id": 9, "icon": SvelteLogo, "title": "Svelte", "link": "https://storybook.js.org/docs/svelte/get-started/introduction" },
  { "id": 10, "icon": RiotLogo, "title": "Riot", "link": "https://storybook.js.org/docs/riot/get-started/introduction" },
  { "id": 11, "icon": PreactLogo, "title": "Preact", "link": "https://storybook.js.org/docs/preact/get-started/introduction" },
  { "id": 12, "icon": RaxLogo, "title": "Rax", "link": "https://storybook.js.org/docs/rax/get-started/introduction" }
]

const VideoWrapper = () => {
  return (
    <div className="Hero__Wrapper-sc-1c410mj-22 kLLxhB">
      <section className="Hero__Content-sc-1c410mj-21 gdHMmb">
        {/* Video Part */}
        <div className="Hero__Primary-sc-1c410mj-19 fgvsWb">
          <div className="Hero__VideoWrapper-sc-1c410mj-8 cEiGWL">
            <div className="PlaceholderAspectRatio__Wrapper-gfrj8l-0 gAbpKH Hero__Placeholder-sc-1c410mj-0 RIVMe" style={{ paddingBottom: "calc(66.7%)" }}>
              <video autoplay="" loop="" playsinline="" alt="Demo video" className="Video__StyledVideo-sc-1d2xgwb-0 gXgTXy">
                <source src={HeroVedio} type="video/mp4" />
              </video>
            </div>
            <span role="button" trigger="hover" className="Hero__TooltipCanvas-sc-1c410mj-9 fblSBC" aria-controls="a14bd418-4e9a-492c-b37c-b54d7787663b" tabindex="0"></span>
            <span role="button" trigger="hover" className="Hero__TooltipSidebar-sc-1c410mj-10 cUXCXG" aria-controls="6b93b0bc-9d25-4fb6-a30a-41131b0a6f65" tabindex="0"></span>
            <span role="button" trigger="hover" className="Hero__TooltipAddons-sc-1c410mj-11 cukEay" aria-controls="c0d0f28d-4157-4af4-b926-361cda83c8d1" tabindex="0"></span>
          </div>
        </div>
        {/* Second part all LINK */}
        <div className="Hero__Secondary-sc-1c410mj-20 guHmdB">
          <span className="sc-hSdWYo enEkAE Hero__SecondarySubheading-sc-1c410mj-18 chNPPh">Made for</span>

          <div className="Hero__FrameworkList-sc-1c410mj-14 bErHEr">
            {allIcon?.map((item) => {
              return (
                <div className="Hero__FrameworkItem-sc-1c410mj-13 ifSOTA" key={item.id}>
                  <a target="_blank" className="sc-kpOJdX kjRNKK Hero__FrameworkLink-sc-1c410mj-12 MHqKs primary" href={item?.link} rel="noreferrer"  >
                    <span className="sc-kGXeez gxmhng">
                      <img src={item?.icon} alt="react" />
                      <span>{item?.title}</span>
                      <svg viewBox="0 0 1024 1024" width="20px" height="20px" className="sc-bdVaJa erzNjr">
                        <path d="M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z" className="sc-bwzfXH jvzEsx">
                        </path>
                      </svg>
                    </span>
                  </a>
                </div>
              )
            })}
          </div>
          <span class="sc-hSdWYo enEkAE Hero__SecondarySubheading-sc-1c410mj-18 chNPPh">GitHub</span>
          <div class="Hero__Stats-sc-1c410mj-17 jkFlnI">
            <a href="https://github.com/storybookjs/storybook/releases" class="sc-dxgOiQ hTjMfW sc-kpOJdX kjRNKK Hero__Stat-sc-1c410mj-15 fCdtiY">
              <span class="sc-kGXeez kZpzLg"><div class="Cardinal__CardinalInner-sc-6wnl01-2 dtxUFu Hero__Stat-sc-1c410mj-15 fCdtiY">
                <div class="Cardinal__Count-sc-6wnl01-0 hYwgQV">
                  <span>v6.3</span></div>
                <div class="Cardinal__Text-sc-6wnl01-1 eMGsVd">
                  <span>Latest version</span>
                </div>
              </div>
              </span>
            </a>
            <a href="https://www.npmjs.com/package/@storybook/react" class="sc-dxgOiQ hTjMfW sc-kpOJdX kjRNKK Hero__NpmDownloadStat-sc-1c410mj-16 iXEvfz chromatic-ignore">
              <span class="sc-kGXeez kZpzLg">
                <div class="Cardinal__CardinalInner-sc-6wnl01-2 dtxUFu Hero__NpmDownloadStat-sc-1c410mj-16 iXEvfz chromatic-ignore">
                  <div class="Cardinal__Count-sc-6wnl01-0 cIDBLi">
                    <span>11.57m</span>
                  </div>
                  <div class="Cardinal__Text-sc-6wnl01-1 eMGsVd">
                    <span>Installs per month</span>
                  </div>
                </div>
              </span>
            </a>
            <a href="https://github.com/storybookjs/storybook/graphs/contributors" class="sc-dxgOiQ hTjMfW sc-kpOJdX kjRNKK Hero__Stat-sc-1c410mj-15 fCdtiY">
              <span class="sc-kGXeez kZpzLg">
                <div class="Cardinal__CardinalInner-sc-6wnl01-2 dtxUFu Hero__Stat-sc-1c410mj-15 fCdtiY">
                  <div class="Cardinal__Count-sc-6wnl01-0 hCboAk">
                    <span>1290+</span>
                  </div>
                  <div class="Cardinal__Text-sc-6wnl01-1 eMGsVd">
                    <span>Contributors</span>
                  </div>
                </div>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default VideoWrapper
