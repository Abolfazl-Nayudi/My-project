import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./nav.css";
export default function Nav() {
  return (
    <nav>
      <section>
        <ul className="nav-list">
          <li className="nav-link special-link">
            <a href="/">Solutions</a>
            <FontAwesomeIcon
              className="angle-down-icon"
              icon={faAngleDown}
            ></FontAwesomeIcon>
            <ul className="opened-link">
              <li>
                <a href="/">Customer Experiece</a>
              </li>
              <li>
                <a href="/">User Experiece</a>
              </li>
              <li>
                <a href="/">Talent Outsourcing</a>
              </li>
            </ul>
          </li>
          <li className="nav-link special-link">
            <a href="/">Audiences</a>
            <FontAwesomeIcon
              className="angle-down-icon"
              icon={faAngleDown}
            ></FontAwesomeIcon>
            <ul className="opened-link">
              <li>
                <a href="/">For Excutives</a>
              </li>
              <li>
                <a href="/">For Marketig and Sales Teams</a>
              </li>
              <li>
                <a href="/">For Product Teams</a>
              </li>
              <li>
                <a href="/">For Design Teams</a>
              </li>
              <li>
                <a href="/">For Human Resources Teams</a>
              </li>
            </ul>
          </li>
          <li className="nav-link">
            <a href="/">Portfolio</a>
          </li>
          <li className="nav-link">
            <a href="/">Blog</a>
          </li>
          <li className="nav-link">
            <a href="/">About Us</a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
