import React from "react";
import "./main-three.css";
import oneimg from "../../assets/main-three-one.png";
import twoimg from "../../assets/main-three-two.png"
import right from "../../assets/right.png"
const Three = () => {
  return (
    <div>
      <div className="container">
        <div className="cards">
          <div className="one-card">
            <div className="text">
              <p>For teams</p>
              <h1>Fits seamlessly into your ecosystem</h1>
              <div className="card">
                <h3>Talent acquisition</h3>
                <p>
                  In a fast-paced market, efficiency and trust are essential for
                  Talent Acquisition. Data-driven insights can help confident
                  hiring.
                </p>
                <a href="">Learn more</a>
              </div>
              <div className="card">
                <h3>People and culture</h3>
                <p>
                  In a fast-paced, people-driven market, recruiting and
                  retaining talent is a challenge. Data-driven feedback is vital
                  to recruit, retain and remember top talent.
                </p>
                <a href="">Learn more</a>
              </div>
              <div className="card">
                <h3>Unbiased</h3>
                <p>
                  Unbiased, efficient hiring is imperative for staffing and
                  recruitment firms. Fast, data-driven candidate insights can
                  help.
                </p>
                <a href="">Learn more</a>
              </div>
            </div>
            <div className="img">
              <img src={oneimg} alt="" />
            </div>
          </div>
          <div className="two-cardd">
            <div className="img">
              <img src={twoimg} alt="" />
            </div>
            <div className="two-text">
              <h3>For industries</h3>
              <h1>Tailored to the unique needs of your industry</h1>
              <p>At Xref, we're people-focused, so no matter what industry you're in, we cater to your unique needs to provide you with one source of talent truth.</p>
              <div className="group">
                <div className="gr-one">
                  <h2>Not-For-Profit</h2>
                  <div className="circle">
                    <img src={right} alt="" />
                  </div>
                </div>
                <div className="gr-one">
                  <h2>Retail</h2>
                  <div className="circle">
                    <img src={right} alt="" />
                  </div>
                </div>
                <div className="gr-one">
                  <h2>Health and Aged Care</h2>
                  <div className="circle">
                    <img src={right} alt="" />
                  </div>
                </div>
                <div className="gr-one">
                  <h2>Hospitality</h2>
                  <div className="circle">
                    <img src={right} alt="" />
                  </div>
                </div>
                <div className="gr-one">
                  <h2>Government</h2>
                  <div className="circle">
                    <img src={right} alt="" />
                  </div>
                </div>
                <div className="gr-one">
                  <h2>Construction</h2>
                  <div className="circle">
                    <img src={right} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Three;
