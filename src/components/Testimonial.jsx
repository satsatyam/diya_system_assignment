import React from 'react'
import './Testimonial.css'

const Testimonial = ({quote,name,title,img1,img2}) => {
  return (

    <div class="Testimonial__Wrapper-sc-1qimxcb-10 dmoufd">

      {/* <div class="Testimonial__HrWrapper-sc-1qimxcb-7 fiIKnk">
        <hr class="Testimonial__Hr-sc-1qimxcb-8 kxQTAR" />
      </div> */}
      
      <div class="Testimonial__Inner-sc-1qimxcb-9 iENQhC">
        <div class="Testimonial__Quote-sc-1qimxcb-0 hOGBAo">
          <span>{quote}</span>
        </div>
        <div class="Testimonial__Attribution-sc-1qimxcb-6 grQCNZ">
          <div class="Testimonial__Author-sc-1qimxcb-4 VzdbB">
            <div src={img1} type="user" class="sc-htpNat iLMdzb">
              <img src={img1} alt={name} />
            </div>
            <div class="Testimonial__Meta-sc-1qimxcb-3 ipCLLb">
              <div class="Testimonial__Name-sc-1qimxcb-1 khMIQc">{name}
              </div>
              <div class="Testimonial__JobTitle-sc-1qimxcb-2 dLECXS">{title}
              </div>
            </div>
          </div>
          <div class="Testimonial__Logo-sc-1qimxcb-5 eaJvks">
            <img src={img2} alt="company logo" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonial;