import React from 'react'
import './IndexScreen.css'

import WorkflowTest from '../video/storybook-workflow-test-optimized-lg.mp4'
import TestVisual from '../assets/icon/test-visual.png'
import TestVisualRegression from '../assets/icon/test-visual-regression.png'
import TestUnit from '../assets/icon/test-unit.png'
import TestAccessibility from '../assets/icon/test-accessibility.png'

const IndexScreen = () => {
    return (
        <div className="IndexScreen__Contrast-sc-14a3yl6-0 kauxnU">
            <hr className="IndexScreen__Separator-sc-14a3yl6-1 jkmdPe" />
            <div orientation="right" className="ValueProp__Wrapper-s27rv9-4 eSBIDw">
                <div className="ValueProp__Meta-s27rv9-3 cojJWW">
                    <h2 className="ValueProp__Title-s27rv9-1 eXsXDL">Test UIs with less effort and no flake</h2>
                    <div className="ValueProp__Desc-s27rv9-2 dmgqgS">Stories are a pragmatic, reproducible way to keep track of UI edge cases. Write stories once then reuse them to power automated tests.</div>
                </div>
                <div className="ValueProp__Media-s27rv9-0 hySWSa">
                    <div className="PlaceholderAspectRatio__Wrapper-gfrj8l-0 gAbpKH IndexScreen__Placeholder-sc-14a3yl6-2 iWcVxO">
                        <video autoplay="" loop="" playsinline="" alt="Storybook testing workflow video" className="Video__StyledVideo-sc-1d2xgwb-0 gXgTXy">
                            <source src={WorkflowTest} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className="BenefitList__Layout-ingo5i-0 bpydmA">
                <div className="BenefitItem__Wrapper-sir4bv-5 kDKTFd">
                    <div className="BenefitItem__Image-sir4bv-0 kkyPFD">
                        <img src={TestVisual} alt="visual test" />
                    </div>
                    <div className="BenefitItem__Meta-sir4bv-3 bjcIcp">
                        <div className="BenefitItem__Title-sir4bv-1 hVOefc">Spot test in a glance
                        </div>
                        <div className="BenefitItem__Desc-sir4bv-2 AkjTR">Whenever you write a story you get a handy test case. Quickly browse stories to make sure your UI looks right.
                        </div>
                    </div>
                </div>
                <div className="BenefitItem__Wrapper-sir4bv-5 kDKTFd">
                    <div className="BenefitItem__Image-sir4bv-0 kkyPFD">
                        <img src={TestVisualRegression} alt="visual regression test" />
                    </div>
                    <div className="BenefitItem__Meta-sir4bv-3 bjcIcp">
                        <div className="BenefitItem__Title-sir4bv-1 hVOefc">Visual test appearance
                        </div>
                        <div className="BenefitItem__Desc-sir4bv-2 AkjTR">Pinpoint UI changes down to the pixel by comparing image snapshots of stories.</div>
                    </div>
                </div>
                <div clclassNameass="BenefitItem__Wrapper-sir4bv-5 kDKTFd">
                    <div className="BenefitItem__Image-sir4bv-0 kkyPFD">
                        <img src={TestUnit} alt="unit test" />
                    </div>
                    <div className="BenefitItem__Meta-sir4bv-3 bjcIcp">
                        <div className="BenefitItem__Title-sir4bv-1 hVOefc">Unit test functionality
                        </div>
                        <div className="BenefitItem__Desc-sir4bv-2 AkjTR">Reuse stories in your unit tests to confirm nuanced functionality.
                        </div>
                    </div>
                </div>
                <div className="BenefitItem__Wrapper-sir4bv-5 kDKTFd">
                    <div className="BenefitItem__Image-sir4bv-0 kkyPFD">
                        <img src={TestAccessibility} alt="accessibility test" />
                    </div>
                    <div className="BenefitItem__Meta-sir4bv-3 bjcIcp">
                        <div className="BenefitItem__Title-sir4bv-1 hVOefc">Accessibility test
                        </div>
                        <div className="BenefitItem__Desc-sir4bv-2 AkjTR">Check stories for WCAG and ARIA issues with the
                            <a className="sc-kpOJdX kjRNKK" href="/addons/@storybook/addon-a11y/">
                                <span className="sc-kGXeez kZpzLg">A11y addon</span>
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
            <div className="Testimonial__Wrapper-sc-1qimxcb-10 dmoufd">
                <div className="Testimonial__HrWrapper-sc-1qimxcb-7 fiIKnk">
                    <hr className="Testimonial__Hr-sc-1qimxcb-8 kxQTAR" />
                </div>
                <div className="Testimonial__Inner-sc-1qimxcb-9 iENQhC">
                    <div className="Testimonial__Quote-sc-1qimxcb-0 hOGBAo">
                        <span>“The tool we use for editing UI is Storybook. It is the perfect place to make sure your work aligns with designs to the pixel across breakpoints.”</span>
                    </div>
                    <div className="Testimonial__Attribution-sc-1qimxcb-6 grQCNZ">
                        <div className="Testimonial__Author-sc-1qimxcb-4 VzdbB">
                            <div src="https://avatars2.githubusercontent.com/u/1247751?s=100&amp;v=4" type="user" className="sc-htpNat iLMdzb">
                                <img src="https://avatars2.githubusercontent.com/u/1247751?s=100&amp;v=4" alt="Adam Neary" />
                            </div>
                            <div className="Testimonial__Meta-sc-1qimxcb-3 ipCLLb">
                                <div className="Testimonial__Name-sc-1qimxcb-1 khMIQc">Adam Neary
                                </div>
                                <div className="Testimonial__JobTitle-sc-1qimxcb-2 dLECXS">Tech lead
                                </div>
                            </div>
                        </div>
                        <div className="Testimonial__Logo-sc-1qimxcb-5 eaJvks">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iOTQiIHZpZXdCb3g9IjAgMCAzMjAuMSA5OS45Ij48cGF0aCBmaWxsPSIjRkY1QTVGIiBkPSJNMTY4LjcgMjUuMWMwIDMuNi0yLjkgNi41LTYuNSA2LjVzLTYuNS0yLjktNi41LTYuNSAyLjgtNi41IDYuNS02LjVjMy43LjEgNi41IDMgNi41IDYuNXptLTI2LjggMTMuMXYxLjZzLTMuMS00LTkuNy00Yy0xMC45IDAtMTkuNCA4LjMtMTkuNCAxOS44IDAgMTEuNCA4LjQgMTkuOCAxOS40IDE5LjggNi43IDAgOS43LTQuMSA5LjctNC4xVjczYzAgLjguNiAxLjQgMS40IDEuNGg4LjFWMzYuOGgtOC4xYy0uOCAwLTEuNC43LTEuNCAxLjR6bTAgMjQuMWMtMS41IDIuMi00LjUgNC4xLTguMSA0LjEtNi40IDAtMTEuMy00LTExLjMtMTAuOHM0LjktMTAuOCAxMS4zLTEwLjhjMy41IDAgNi43IDIgOC4xIDQuMXYxMy40em0xNS41LTI1LjVoOS42djM3LjZoLTkuNlYzNi44em0xNDMuNC0xYy02LjYgMC05LjcgNC05LjcgNFYxOC43aC05LjZ2NTUuN2g4LjFjLjggMCAxLjQtLjcgMS40LTEuNHYtMS43czMuMSA0LjEgOS43IDQuMWMxMC45IDAgMTkuNC04LjQgMTkuNC0xOS44cy04LjUtMTkuOC0xOS4zLTE5Ljh6bS0xLjYgMzAuNWMtMy43IDAtNi42LTEuOS04LjEtNC4xVjQ4LjhjMS41LTIgNC43LTQuMSA4LjEtNC4xIDYuNCAwIDExLjMgNCAxMS4zIDEwLjhzLTQuOSAxMC44LTExLjMgMTAuOHptLTIyLjctMTQuMnYyMi40aC05LjZWNTMuMmMwLTYuMi0yLTguNy03LjQtOC43LTIuOSAwLTUuOSAxLjUtNy44IDMuN3YyNi4yaC05LjZWMzYuOGg3LjZjLjggMCAxLjQuNyAxLjQgMS40djEuNmMyLjgtMi45IDYuNS00IDEwLjItNCA0LjIgMCA3LjcgMS4yIDEwLjUgMy42IDMuNCAyLjggNC43IDYuNCA0LjcgMTIuN3ptLTU3LjctMTYuM2MtNi42IDAtOS43IDQtOS43IDRWMTguN2gtOS42djU1LjdoOC4xYy44IDAgMS40LS43IDEuNC0xLjR2LTEuN3MzLjEgNC4xIDkuNyA0LjFjMTAuOSAwIDE5LjQtOC40IDE5LjQtMTkuOC4xLTExLjQtOC40LTE5LjgtMTkuMy0xOS44em0tMS42IDMwLjVjLTMuNyAwLTYuNi0xLjktOC4xLTQuMVY0OC44YzEuNS0yIDQuNy00LjEgOC4xLTQuMSA2LjQgMCAxMS4zIDQgMTEuMyAxMC44cy00LjkgMTAuOC0xMS4zIDEwLjh6bS0yNi0zMC41YzIuOSAwIDQuNC41IDQuNC41djguOXMtOC0yLjctMTMgM3YyNi4zSDE3M1YzNi44aDguMWMuOCAwIDEuNC43IDEuNCAxLjR2MS42YzEuOC0yLjEgNS43LTQgOC43LTR6TTkxLjUgNzFjLS41LTEuMi0xLTIuNS0xLjUtMy42LS44LTEuOC0xLjYtMy41LTIuMy01LjFsLS4xLS4xQzgwLjcgNDcuMiA3My4zIDMyIDY1LjUgMTdsLS4zLS42Yy0uOC0xLjUtMS42LTMuMS0yLjQtNC43LTEtMS44LTItMy43LTMuNi01LjVDNTYgMi4yIDUxLjQgMCA0Ni41IDBjLTUgMC05LjUgMi4yLTEyLjggNi0xLjUgMS44LTIuNiAzLjctMy42IDUuNS0uOCAxLjYtMS42IDMuMi0yLjQgNC43bC0uMy42QzE5LjcgMzEuOCAxMi4yIDQ3IDUuMyA2MmwtLjEuMmMtLjcgMS42LTEuNSAzLjMtMi4zIDUuMS0uNSAxLjEtMSAyLjMtMS41IDMuNkMuMSA3NC42LS4zIDc4LjEuMiA4MS43YzEuMSA3LjUgNi4xIDEzLjggMTMgMTYuNiAyLjYgMS4xIDUuMyAxLjYgOC4xIDEuNi44IDAgMS44LS4xIDIuNi0uMiAzLjMtLjQgNi43LTEuNSAxMC0zLjQgNC4xLTIuMyA4LTUuNiAxMi40LTEwLjQgNC40IDQuOCA4LjQgOC4xIDEyLjQgMTAuNCAzLjMgMS45IDYuNyAzIDEwIDMuNC44LjEgMS44LjIgMi42LjIgMi44IDAgNS42LS41IDguMS0xLjYgNy0yLjggMTEuOS05LjIgMTMtMTYuNi44LTMuNS40LTctLjktMTAuN3ptLTQ1LjEgNS4yQzQxIDY5LjQgMzcuNSA2MyAzNi4zIDU3LjZjLS41LTIuMy0uNi00LjMtLjMtNi4xLjItMS42LjgtMyAxLjYtNC4yIDEuOS0yLjcgNS4xLTQuNCA4LjgtNC40IDMuNyAwIDcgMS42IDguOCA0LjQuOCAxLjIgMS40IDIuNiAxLjYgNC4yLjMgMS44LjIgMy45LS4zIDYuMS0xLjIgNS4zLTQuNyAxMS43LTEwLjEgMTguNnptMzkuOSA0LjdjLS43IDUuMi00LjIgOS43LTkuMSAxMS43LTIuNCAxLTUgMS4zLTcuNiAxLTIuNS0uMy01LTEuMS03LjYtMi42LTMuNi0yLTcuMi01LjEtMTEuNC05LjcgNi42LTguMSAxMC42LTE1LjUgMTIuMS0yMi4xLjctMy4xLjgtNS45LjUtOC41LS40LTIuNS0xLjMtNC44LTIuNy02LjgtMy4xLTQuNS04LjMtNy4xLTE0LjEtNy4xcy0xMSAyLjctMTQuMSA3LjFjLTEuNCAyLTIuMyA0LjMtMi43IDYuOC0uNCAyLjYtLjMgNS41LjUgOC41IDEuNSA2LjYgNS42IDE0LjEgMTIuMSAyMi4yLTQuMSA0LjYtNy44IDcuNy0xMS40IDkuNy0yLjYgMS41LTUuMSAyLjMtNy42IDIuNi0yLjcuMy01LjMtLjEtNy42LTEtNC45LTItOC40LTYuNS05LjEtMTEuNy0uMy0yLjUtLjEtNSAuOS03LjguMy0xIC44LTIgMS4zLTMuMi43LTEuNiAxLjUtMy4zIDIuMy01bC4xLS4yYzYuOS0xNC45IDE0LjMtMzAuMSAyMi00NC45bC4zLS42Yy44LTEuNSAxLjYtMy4xIDIuNC00LjYuOC0xLjYgMS43LTMuMSAyLjgtNC40IDIuMS0yLjQgNC45LTMuNyA4LTMuNyAzLjEgMCA1LjkgMS4zIDggMy43IDEuMSAxLjMgMiAyLjggMi44IDQuNC44IDEuNSAxLjYgMy4xIDIuNCA0LjZsLjMuNmM3LjYgMTQuOSAxNSAzMC4xIDIxLjkgNDV2LjFjLjggMS42IDEuNSAzLjQgMi4zIDUgLjUgMS4yIDEgMi4yIDEuMyAzLjIuOCAyLjYgMS4xIDUuMS43IDcuN3oiLz48L3N2Zz4=" alt="company logo" />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="IndexScreen__Separator-sc-14a3yl6-1 jkmdPe" />
        </div>
    )
}
export default IndexScreen;