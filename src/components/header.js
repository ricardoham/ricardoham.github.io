import React from 'react';

class Header extends React.PureComponent {

  renderSocialIcons = () => {
    return (
    <>
      <i className="fab fa-facebook-f"></i>
      <i className="fab fa-linkedin-in"></i>
      <i className="fab fa-github"></i>
      <i className="fab fa-gitlab"></i>
      <i className="fab fa-medium"></i>
    </>
    )
  }

  render() {
    return (
      <div className="header-container">
        <span className="header__text--name">Ricardo T. Manoel Junior</span>
        <span className="header__text--portfolio">Portfolio</span>
        <span className="header__social-icons">{this.renderSocialIcons()}</span>
      </div>
    )
  }
}

export default Header;
