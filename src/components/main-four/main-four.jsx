import React from 'react'
import "./main-four.css"
import tayoq from "../../assets/tayoq.png"
const Four = () => {
  return (
    <div>
        <div className="container">
            <div className="four-text">
                <p>What our customers say</p>
                <h1>Trusted by the companies you trust</h1>
            </div>
            <div className="four-cards">
                <div className="f-card">
                    <h1>How Westpac benefit from Xref’s tailored service</h1>
                    <a href="">Learn more</a>
                </div>
                <div className="f-card">
                    <h1>Getting to know candidates with Xref</h1>
                    <a href="">Learn more</a>
                </div>
                <div className="f-card">
                    <h1>Enjoying Fast, Effective and Accurate Results</h1>
                    <a href="">Learn more</a>
                </div>
                <div className="f-one-card">
                    <div className="one-b">
                        <h1>Over <span>200</span></h1>
                        <p>User reviews have proven to outperform any other assessments in the consumer world. That’s why we’re proud of what our reviewers have to say.</p>
                        <span>Why users love us</span>
                    </div>
                    <img src={tayoq} alt="" />
                    <div className="two-b">
                        <h1>4.7 <span>out of 5</span></h1>
                        <p><span> 9.4 </span> Ease of use</p>
                        <p><span>9.5</span> Quality of support</p>
                        <p><span>9.6</span> Ease of setup</p>
                    </div>
                </div>
                <div className="f-card ff-card">
                    <h1>Leading the pack</h1>
                    <div className="f-group">
                        <div className="f-gr">
                            <h2>Capterra</h2>
                            <p>93 reviews as of 7/10/2022</p>
                        </div>
                        <div className="f-gr">
                            <h2>Google</h2>
                            <p>744 reviews as of 7/10/2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Four