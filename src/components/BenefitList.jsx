import React from 'react'
import './BenefitList.css'

const BenefitList = ({
  imgSrc1,
  title1,
  desc1,
  imgSrc2,
  title2,
  desc2,
  imgSrc3,
  title3,
  desc3,
  imgSrc4,
  title4,
  desc4,

}) => {
  return (
    <div className="BenefitList__Layout-ingo5i-0 bpydmA">
      <div className="BenefitItem__Wrapper-sir4bv-5 kDKTFd">
        <div className="BenefitItem__Image-sir4bv-0 kkyPFD">
          <img src={imgSrc1} alt="isolate" />
        </div>
        <div className="BenefitItem__Meta-sir4bv-3 bjcIcp">
          <div className="BenefitItem__Title-sir4bv-1 hVOefc">{title1}</div>
          <div className="BenefitItem__Desc-sir4bv-2 AkjTR">{desc1}</div>
        </div>
      </div>
      <div className="BenefitItem__Wrapper-sir4bv-5 kDKTFd">
        <div className="BenefitItem__Image-sir4bv-0 kkyPFD">
          <img src={imgSrc2} alt="mock states" />
        </div>
        <div className="BenefitItem__Meta-sir4bv-3 bjcIcp">
          <div className="BenefitItem__Title-sir4bv-1 hVOefc">{title2}
          </div>
          <div className="BenefitItem__Desc-sir4bv-2 AkjTR">{desc2}
          </div>
        </div>
      </div>
      <div className="BenefitItem__Wrapper-sir4bv-5 kDKTFd">
        <div className="BenefitItem__Image-sir4bv-0 kkyPFD">
          <img src={imgSrc3} alt="save use cases" />
        </div>
        <div className="BenefitItem__Meta-sir4bv-3 bjcIcp">
          <div className="BenefitItem__Title-sir4bv-1 hVOefc">{title3}
          </div>
          <div className="BenefitItem__Desc-sir4bv-2 AkjTR">{desc3}
            <a href="https://storybook.js.org/basics/writing-stories/" target="_blank" rel="noreferrer" className="sc-dxgOiQ hTjMfW sc-kpOJdX kjRNKK">
              <span className="sc-kGXeez kZpzLg">plain JavaScript</span></a>
            to revisit during development, testing, and QA.
          </div>
        </div>
      </div>
      <div className="BenefitItem__Wrapper-sir4bv-5 kDKTFd">
        <div className="BenefitItem__Image-sir4bv-0 kkyPFD">
          <img src={imgSrc4} alt="extend with addons" />
        </div>
        <div className="BenefitItem__Meta-sir4bv-3 bjcIcp">
          <div className="BenefitItem__Title-sir4bv-1 hVOefc">{title4}
          </div>
          <div className="BenefitItem__Desc-sir4bv-2 AkjTR">{desc4}
          </div>
        </div>
      </div>
    </div>
  )
}
export default BenefitList;