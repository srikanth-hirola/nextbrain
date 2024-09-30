/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-main-comp">
      <div
        data-w-id="df617927-7f5d-a8fb-83a8-1e1f31b37ac2"
        className="navbar_container"
      >
        <a
          href="/"
          id="w-node-df617927-7f5d-a8fb-83a8-1e1f31b37ac3-31b37ac1"
          aria-current="page"
          className="navbar_logo-link w-nav-brand w--current"
        >
          <div
            data-w-id="6f1f58fe-b831-0724-30c1-8a1c51c44599"
            className="navbar_logo is-full w-embed"
          >
            <img src="/assets/logo.svg" alt="" />
          </div>
          <div className="navbar_logo is-mark w-embed">
            <img src="/assets/logo.svg" alt="" />
          </div>
        </a>
        <nav
          role="navigation"
          id="w-node-df617927-7f5d-a8fb-83a8-1e1f31b37ac5-31b37ac1"
          className="navbar_menu w-nav-menu"
        >
          <div className="navbar_menu-link-wrapper">
          <Link to="/about" className="navbar_link w-nav-link">
              About
            </Link>
            <Link
              to="/blog"
              data-w-id="df617927-7f5d-a8fb-83a8-1e1f31b37ac7"
              className="navbar_link w-nav-link"
            >
              Blogs
            </Link>
            <Link to="/gallery" className="navbar_link w-nav-link">
              Gallery
            </Link>
            <Link to="/faq" className="navbar_link w-nav-link">
              FAqs
            </Link>
         
          </div>
        </nav>
        <div
          id="w-node-df617927-7f5d-a8fb-83a8-1e1f31b37acf-31b37ac1"
          className="navbar_button-wrapper"
        >
          <div>
            <div
              data-w-id="c70c4579-6e48-f314-6c9d-3eab596fc8e2"
              className="button is-nav"
            >
              <div className="button-text">Order now</div>
            </div>
          </div>
          <div className="navbar_menu-button w-nav-button">
            <div className="menu-icon">
              <div className="menu-icon_line-top"></div>
              <div className="menu-icon_line-middle">
                <div className="menu-icon_line-middle-inner"></div>
              </div>
              <div className="menu-icon_line-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
