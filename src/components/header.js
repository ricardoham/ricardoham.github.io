import React from 'react';

class Header extends React.PureComponent {
  renderSocialIcons = () => (
    <>
      <li className="header__social-icon">
        <a href="https://www.linkedin.com/in/ricardo-manoel">
          <i className="fab fa-linkedin-in" />
        </a>
      </li>
      <li className="header__social-icon">
        <a href="https://github.com/ricardoham">
          <i className="fab fa-github" />
        </a>
      </li>
      <li className="header__social-icon">
        <a href="https://gitlab.com/rmanoel">
          <i className="fab fa-gitlab" />
        </a>
      </li>
      <li className="header__social-icon">
        <a href="https://medium.com/@rdomanoel">
          <i className="fab fa-medium" />
        </a>
      </li>
    </>
  )

  render() {
    const { children } = this.props;

    return (
      <div className="header-container">
        <span className="header__text--name">Ricardo T. Manoel Junior</span>
        <span className="header__text--portfolio">Portfolio</span>
        <ul className="header__social-icons-list">{this.renderSocialIcons()}</ul>
        {children}
      </div>
    );
  }
}

export default Header;
