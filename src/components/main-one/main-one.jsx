import React from 'react'
import "./main-one.css"
import img1 from "../../assets/main-one-card1.png"
import img2 from "../../assets/main-one-card2.png"
import img3 from "../../assets/main-one-card3.png"
const One = () => {
  return (
    <div className='main-one'>
        <div className="container">
            <div className="one-content">
                <div className="one-text">
                  <h3>Introducing Xref</h3>
                  <h1>Get feedback across the entire talent journey</h1>
                </div>
                <div className="two-text">
                  <div className="one">
                    <h2>Simple</h2>
                    <p>Save time: Create and send a survey in as little as 30 seconds. Feedback is compiled in easy to understand graphs for actionable insights.</p>
                  </div>
                  <div className="one">
                    <h2>Convenient</h2>
                    <p>Reduce admin: Surveys can be created and completed anywhere, any time, on any device. Let automation do the rest.</p>
                  </div>
                  <div className="one">
                    <h2>Secure</h2>
                    <p>Ensure peace of mind: Xref is ISO27001 certified and GDPR compliant so your data is kept safe and secure.</p>
                  </div>
                </div>
            </div>
            <div className="two-content">
                <div className="main-one-card">
                  <img src={img1} alt="" />
                  <h3>Reference</h3>
                  <h1>Recruit</h1>
                  <p>Reduce time to hire and secure top talent fast. Make informed, compliant hiring decisions with Xref’s automated reference checking software.</p>
                </div>
                <div className="main-one-card">
                  <img src={img2} alt="" />
                  <h3>Pulse</h3>
                  <h1>Retain</h1>
                  <p>Want the secret to reduce attrition and understand what metrics your organisation performs well at or can improve upon? Conduct a Pulse Survey.</p>
                </div>
                <div className="main-one-card">
                  <img src={img3} alt="" />
                  <h3>Exits</h3>
                  <h1>Remember</h1>
                  <p>Collect, analyse and measure feedback from departing employees. Reduce attrition and improve retention over time by collecting consistent data to improve organisational performance.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default One