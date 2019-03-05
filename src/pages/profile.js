import React from 'react';
import profile from '../assets/profile.jpg'

class Profile extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <section>
          <div className="row">
          <div class="col-3-of-4">

          <img className="profile__image" alt="profile" src={profile} />
          </div>

          <h2>Profile Context</h2>
          <p className="paragraph">Front-End Web developer working with the most used and 
            recent technologies: Modern JavaScript(ES6), React, Redux, 
            React- Native and so on. Always an enthusiast with JavaScript programming, 
            a geek passionate about expanding the knowledge, developing solutions 
            outside of the box to accelerate the delivery and quality of projects.</p>
            </div>
        </section>
      </div>
    )
  }
}

export default Profile;
