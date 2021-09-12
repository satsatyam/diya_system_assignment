import React from 'react'
import './BenefitList.css'

import BuildCanvas from '../assets/icon/build-canvas.png'
import BuildCases from '../assets/icon/build-cases.png'
import BuildSidebar from '../assets/icon/build-sidebar.png'
import BuildAddons from '../assets/icon/build-addons.png'

const BenefitList = () => {
    return (
        <div className="BenefitList__Layout-ingo5i-0 bpydmA">
            <div className="BenefitItem__Wrapper-sir4bv-5 kDKTFd">
                <div className="BenefitItem__Image-sir4bv-0 kkyPFD">
                    <img src={BuildCanvas} alt="isolate" />
                </div>
                <div class="BenefitItem__Meta-sir4bv-3 bjcIcp">
                    <div className="BenefitItem__Title-sir4bv-1 hVOefc">Build UIs in isolation</div>
                    <div className="BenefitItem__Desc-sir4bv-2 AkjTR">Implement components and pages without needing to fuss with data, APIs, or business logic.</div>
                </div>
            </div>
            <div className="BenefitItem__Wrapper-sir4bv-5 kDKTFd">
                <div className="BenefitItem__Image-sir4bv-0 kkyPFD">
                    <img src={BuildCases} alt="mock states" />
                </div>
                <div className="BenefitItem__Meta-sir4bv-3 bjcIcp">
                    <div className="BenefitItem__Title-sir4bv-1 hVOefc">Mock hard to reach use cases
                    </div>
                    <div className="BenefitItem__Desc-sir4bv-2 AkjTR">Render components in key states that are tricky to reproduce in an app.
                    </div>
                </div>
            </div>
            <div className="BenefitItem__Wrapper-sir4bv-5 kDKTFd">
                <div className="BenefitItem__Image-sir4bv-0 kkyPFD">
                    <img src={BuildSidebar} alt="save use cases" />
                </div>
                <div className="BenefitItem__Meta-sir4bv-3 bjcIcp">
                    <div className="BenefitItem__Title-sir4bv-1 hVOefc">Document use cases as stories
                    </div>
                    <div className="BenefitItem__Desc-sir4bv-2 AkjTR">Save use cases as stories in
                        <a href="https://storybook.js.org/basics/writing-stories/" target="_blank" rel="noreferrer" className="sc-dxgOiQ hTjMfW sc-kpOJdX kjRNKK">
                            <span className="sc-kGXeez kZpzLg">plain JavaScript</span></a>
                        to revisit during development, testing, and QA.
                    </div>
                </div>
            </div>
            <div className="BenefitItem__Wrapper-sir4bv-5 kDKTFd">
                <div className="BenefitItem__Image-sir4bv-0 kkyPFD">
                    <img src={BuildAddons} alt="extend with addons" />
                </div>
                <div className="BenefitItem__Meta-sir4bv-3 bjcIcp">
                    <div className="BenefitItem__Title-sir4bv-1 hVOefc">Supercharge your workflow with addons
                    </div>
                    <div className="BenefitItem__Desc-sir4bv-2 AkjTR">Use addons to customize your workflow, automate testing, and integrate with your favorite tools.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BenefitList;