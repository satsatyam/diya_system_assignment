import React from 'react'
import './SocialWrapper.css'
import GithubLogo from '../assets/icon/logo-github.svg'
import DropboxLogo from '../assets/icon/logo-dropbox.svg'
import AirbnbLogo from '../assets/icon/logo-airbnb.svg'
import LyftLogo from '../assets/icon/logo-lyft.svg'
import MozillaLogo from '../assets/icon/logo-mozilla.svg'
import JetBrainsLogo from '../assets/icon/logo-jetbrains.svg'

const allIcon = [
  { "id": 1, "icon": GithubLogo, "title": "github" },
  { "id": 2, "icon": DropboxLogo, "title": "github" },
  { "id": 3, "icon": AirbnbLogo, "title": "github" },
  { "id": 4, "icon": LyftLogo, "title": "github" },
  { "id": 5, "icon": MozillaLogo, "title": "github" },
  { "id": 6, "icon": JetBrainsLogo, "title": "github" }
]

const socialWrapper = () => {
  return (
      <div className="SocialProof__Wrapper-fci71t-5 bWYMFU">
        <div className="SocialProof__Logos-fci71t-3 cbBygD">
          {allIcon?.map((item) => {
            return (
              <div title={item.title} className="SocialProof__LogoWrapper-fci71t-2 dWstdF" key={item?.id}>
                <img src={item?.icon} alt={item?.title} className="SocialProof__Logo-fci71t-1 dOfkYs" />
              </div>
            )
          })}
        </div>
      </div>
  )
}

export default socialWrapper
