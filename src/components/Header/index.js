import React from "react";
import Button from "../Button";
import Nav from "../Nav";
import "./header.css";
export default function Header() {
  return (
    <header>
      <section className="header-parent">
        <div className="web-name">
          <a href="/">
            <div></div>
          </a>
        </div>
        <div>
          <Nav />
        </div>
        <div>
          <Button getStyle="header-btn" text="Get in touch" />
        </div>
      </section>
    </header>
  );
}
