import React from 'react';
import Navbar from './navbar';

class Header extends React.PureComponent {

  renderSocialIcons = () => {
    return (
    <>
      <li>
        <a href="https://www.linkedin.com/in/ricardo-manoel">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/ricardoham">
          <i className="fab fa-github"></i>
        </a>
      </li>
      <li>
        <a href="https://gitlab.com/rmanoel">
          <i className="fab fa-gitlab"></i>
        </a>
      </li>
      <li>
        <a href="https://medium.com/@rdomanoel">
        <i className="fab fa-medium"></i>
        </a>
      </li>
    </>
    )
  }

  render() {
    return (
      <div className="header-container">
        <span className="header__text--name">Ricardo T. Manoel Junior</span>
        <span className="header__text--portfolio">Portfolio</span>
        <ul className="header__social-icons">{this.renderSocialIcons()}</ul>
        <Navbar />
      </div>
    )
  }
}

export default Header;
