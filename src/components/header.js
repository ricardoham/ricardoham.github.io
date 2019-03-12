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
        <span>Ricardo T. Manoel Junior</span>
        <span>Portfolio</span>
        {this.renderSocialIcons()}
      </div>
    )
  }
}

export default Header;
