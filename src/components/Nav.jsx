import React, { Component } from "react";
import "../CSS/Nav.css"

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="brand">
          <div className="brand-logo">
            <img src="" alt="" />
          </div>
          <div className="brand-name">Amine Info</div>
        </div>
          <div className="search">
            <input
              type="search"
              name="s"
              id="search"
              placeholder="Search..."
              aria-placeholder="Search..."
              title="Search..."
            />
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
          <div className="menu">
            <ul>
              <li>
                <a href="/" title="Home">
                  Home
                </a>
              </li>
              <li><a href="/top-anime">Top Anime</a></li>
              <li><a href="/rec">Recommonded</a></li>
              {/* <li></li> */}
            </ul>
          </div>
        </div>
    );
  }
}
