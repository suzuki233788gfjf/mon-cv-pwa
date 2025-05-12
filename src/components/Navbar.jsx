import React from 'react';
import './Navbar.css'; // Nous allons créer ce fichier CSS

function Navbar() {
  return (
    <nav className="navbar"> {/* 'class' devient 'className' en JSX */}
      <ul>
        {/* Les liens seront gérés plus tard pour le scroll */}
        <li><a href="#cv">Mon CV</a></li>
        <li><a href="#video">Vidéo</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar; // Permet d'utiliser ce composant ailleurs