
import React, { useRef, useState, forwardRef } from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section className="contact"> {/* Utilisez className */}
      <h3>📬 Contactez-moi</h3>
      <div className="contact-links"> {/* Utilisez className */}
        <a href="https://mail.google.com/mail/?view=cm&to=susymeli25@gmail.com" target="_blank" title="Email via Gmail">
          <img src="https://img.icons8.com/color/48/gmail--v1.png" alt="Email" />
        </a>
        <a href="https://github.com/suzuki233788gfjf" target="_blank" title="GitHub">
          <img src="https://img.icons8.com/color/48/github--v1.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/susy-meli-976910309/" target="_blank" title="LinkedIn">
          <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
       {/* Vous pourriez aussi vouloir ajouter d'autres moyens de contact si vous en aviez */}
       {/* <p><i className="fas fa-phone"></i> +123 456 7890</p> */}
       {/* <p><i className="fas fa-map-marker-alt"></i> Votre Ville</p> */}
    </section>
  );
}

export default ContactSection;