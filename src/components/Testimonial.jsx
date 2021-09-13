import React from 'react'
import './Testimonial.css'

const Testimonial = ({quote,name,title,img1,img2}) => {
  return (

    <div className="Testimonial__Wrapper-sc-1qimxcb-10 dmoufd">

      {/* <div className="Testimonial__HrWrapper-sc-1qimxcb-7 fiIKnk">
        <hr className="Testimonial__Hr-sc-1qimxcb-8 kxQTAR" />
      </div> */}
      
      <div className="Testimonial__Inner-sc-1qimxcb-9 iENQhC">
        <div className="Testimonial__Quote-sc-1qimxcb-0 hOGBAo">
          <span>{quote}</span>
        </div>
        <div className="Testimonial__Attribution-sc-1qimxcb-6 grQCNZ">
          <div className="Testimonial__Author-sc-1qimxcb-4 VzdbB">
            <div src={img1} type="user" className="sc-htpNat iLMdzb">
              <img src={img1} alt={name} />
            </div>
            <div className="Testimonial__Meta-sc-1qimxcb-3 ipCLLb">
              <div className="Testimonial__Name-sc-1qimxcb-1 khMIQc">{name}
              </div>
              <div className="Testimonial__JobTitle-sc-1qimxcb-2 dLECXS">{title}
              </div>
            </div>
          </div>
          <div className="Testimonial__Logo-sc-1qimxcb-5 eaJvks">
            <img src={img2} alt="company logo" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonial;