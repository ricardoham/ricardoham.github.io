import React from 'react';
import { prefix } from 'utils/prefix';
import Section from 'components/section/section/Section';

const Profile = () => {
  return (
    <div>
      <Section img={`${prefix}/assets/gifs/cat.webp`}>
        <h2>About me</h2>
        <p>
          My name is Ricardo Tadeu Manoel Junior, I'm from Brazil I live on
          Campinas city, known as <i>Princesa do Oeste</i>, the third most
          populous municipality in São Paulo state And consider one of the
          biggest center of technology and research in Latin America.
        </p>
        <p>
          I'm a software developer who loves to work with the most used and
          recently technologies, I've over 5 years of experience in the area and
          a good background in web development, especially with React
          applications. I also have nice communication and use my soft skills to
          solve problems or create new ideas, because that results in better
          teamwork and exceptional applications.
        </p>
        <p>
          And besides work, I love to spare time with my pets, playing
          video-games and study something new <br /> I also enjoy going out with
          friends especially to take a beer!
        </p>
      </Section>
    </div>
  );
};

export default Profile;
