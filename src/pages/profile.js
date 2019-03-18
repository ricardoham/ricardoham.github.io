import React from 'react';
import profile from '../assets/profile.jpg'

class Profile extends React.PureComponent {
  render() {
    return (
      <div className="profile-container">
        <section>
          <div className="row">
          <div className="col-1-of-3">

          <img className="profile__image" alt="profile" src={profile} />
          </div>
          <div className="col-2-of-3">
          <h1>Who am I?</h1>
          <p className="paragraph">Front-End Web developer working with the most used and 
            recent technologies: Modern JavaScript(ES6), React, Redux, 
            React- Native and so on. Always an enthusiast with JavaScript programming, 
            a geek passionate about expanding the knowledge, developing solutions 
            outside of the box to accelerate the delivery and quality of projects.</p>
            </div>
            </div>
        </section>
      </div>
    )
  }
}

export default Profile;
