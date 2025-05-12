
import React from 'react';
import './Header.css'; // Nous allons créer ce fichier CSS

function Header() {
  // La fonction scrollToSection sera gérée différemment en React
  // Pour l'instant, on retire l'attribut onclick

  return (
    <header>
      <h1>Bienvenue dans mon univers ✨</h1>
      <p>Découvrez mon parcours, en mots, en sons et en images.</p>
      {/* On retire onclick="scrollToSection('cv')" pour l'instant */}
      <button>Voir mon CV</button>
    </header>
  );
}

export default Header;