import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  return (
    <div>
      <header>
        <h1>Single Page Website</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="home">
        <h2>Home</h2>
        <p>Welcome to our single page website!</p>
      </section>
      <section id="about">
        <h2>About</h2>
        <p>Learn more about us and what we do.</p>
      </section>
      <section id="services">
        <h2>Services</h2>
        <p>Discover the services we offer.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Get in touch with us.</p>
      </section>
    </div>
  );
};

export default App;