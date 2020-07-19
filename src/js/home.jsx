import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Home = () => (
  <>
    <div className="profile">
      <div className="picture" />
      <div className="welcome">
        <div className="hello">
          <h1>Hello, my name is</h1>
          <div className="name">Jean Luis Urena</div>
        </div>

        <div className="text-center">
          I am a
          <span className="rw-words rw-words-1">
            <span>Software Developer</span>
            <span>Web Developer</span>
            <span>Student</span>
            <span>Car Enthusiast</span>
            <span>Coffee Fanatic</span>
          </span>
        </div>

        <div className="personal-info">
          <div className="email reverse">
            <a href="mailto:eljean@live.com?subject=&body=">
              moc.evil
              <span className="atsymbol" />
              naejle
            </a>
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Home;
