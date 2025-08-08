 import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Find a squad or Join one</h1>
        <p>
          A go-to platform for cohort students to discover teammates, or join existing teams. Whether you’re working on a project, startup idea, or study group, SquadUp makes it easy to search by interests, skills, and goals—so you can team up with the right people and get things done.
        </p>
        <button className="btn btn-primary">Let's Squad Up</button>
        <div className="reviews">
        <div className="avatars">
            <img src="https://picsum.photos/40/40?random=1" alt="User 1" />
            <img src="https://picsum.photos/40/40?random=2" alt="User 2" />
            <img src="https://picsum.photos/40/40?random=3" alt="User 3" />
            <img src="https://picsum.photos/40/40?random=4" alt="User 4" />
            <img src="https://picsum.photos/40/40?random=5" alt="User 5" />
          </div>
          <div className="rating">
            ⭐⭐⭐⭐ 4.0 from 99+ reviews
          </div>
        </div>
      </section>

      <section className="profile-section">
        <h2>Create your profile to become discoverable</h2>
        <p>
          Let others know who you are! Add your skills, interests, and goals so batchmates can find and connect with you. A complete profile helps you get matched with the right teams and projects.
        </p>
      </section>
    </div>
  );
};

export default Home;