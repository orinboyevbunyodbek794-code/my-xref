import React from "react";
import "./main-two.css";
import top from "../../assets/two-top.png";
import contentimg from "../../assets/two-two-content-img.png"
function Two() {
  return (
    <div>
      <div className="container">
        <div className="two-top">
          <div className="top-text">
            <p>Platform</p>
            <h1>Automating your people journey</h1>
          </div>
          <div className="two">
            <img src={top} alt="" />
          </div>
        </div>
        <div className="two-medium">
          <div className="cards">
            <div className="two-card">
              <h2>Survey builder</h2>
              <p>Create compliant, non-bias surveys in seconds. Choose a Reference or Exit Survey template or build your own from a selection of HR-approved, compliant, non-bias questions.</p>
              <a href="#">Learn more</a>
            </div>
            <div className="two-card">
              <h2>Automated requests</h2>
              <p>Receive feedback faster with automated requests. Save time and reduce manual, repetitive tasks with automated survey requests, easily accessible all in one place.</p>
              <a href="#">Learn more</a>
            </div>
            <div className="two-card">
              <h2>People records</h2>
              <p>Build strong talent relationships with centralised people records. Person-specific feedback is stored in one place to easily recruit, retain and remember talent.</p>
              <a href="#">Learn more</a>
            </div>
            <div className="two-card">
              <h2>Insights</h2>
              <p>Know your next move with people and organisational insights. From an aggregated overview of data to detailed feedback, find the insights you need to make confident business decisions.</p>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
        <div className="two-two-content">
          <div className="text">
            <h3>Additional checks</h3>
            <h1>Connecting you to the world of digital trust</h1>
            <p>As a growing community of global checking vendors, Trust Marketplace is an aggregator for enhanced due diligence in the online trust environment.</p>
            <button>Visit website</button>
          </div>
          <div className="img">
            <img src={contentimg} alt="" />
          </div>
        </div>
        <div className="two-pas-cards">
          <div className="card">
            <h3>Security and compliance</h3>
            <p>We lead with a security-first mindset, a robust infrastructure, and a compliant operating environment.</p>
            <a href="">Learn more</a>
          </div>
          <div className="card">
            <h3>Integrations</h3>
            <p>Integrate Xref with your everyday tools for simplified people management within a single platform.</p>
            <a href="">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Two;
