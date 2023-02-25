import React from "react";
import "./hero.css";
import { BodyBtn } from "../Buttons";
export default function Hero() {
  return (
    <section className="hero-img">
      <section className="parent-hero-content">
        <div className="img"></div>
        <div>
          <h2>Frictionless Customer Journeys</h2>
        </div>
        <div>
          <h3>in SaaS, Finance and Health</h3>
        </div>
        <div>
          <p>
            habitable.co helps digital leaders understand what customers need,
            identify gaps,
          </p>
          <p>
            prioritize what to build next, and rally everyone around
            <strong> customer experience 2.0</strong>
          </p>
        </div>
        <div>
          <BodyBtn getClassStyle="body-btn" inlineStyle={{ color: "white" }} />
        </div>
      </section>
    </section>
  );
}
