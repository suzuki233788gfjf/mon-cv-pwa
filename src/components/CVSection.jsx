
import React, { useRef, useState, forwardRef } from 'react';
import './CVSection.css'; 


const CVSection = forwardRef((props, ref) => {
    const audioRef = useRef(null);
    // État pour savoir si l'audio est en cours de lecture (optionnel, mais utile pour le bouton)
    const [isPlaying, setIsPlaying] = useState(false);
  
    // Fonction pour jouer ou mettre en pause l'audio
    const togglePlayPause = () => {
      if (audioRef.current) { // Vérifier que l'élément audio existe
        if (audioRef.current.paused) {
          audioRef.current.play();
          setIsPlaying(true); // Mettre à jour l'état
        } else {
          audioRef.current.pause();
          setIsPlaying(false); // Mettre à jour l'état
        }
      }
    };
  
    // Optionnel : Mettre à jour l'état si la lecture se termine toute seule
     const handleAudioEnd = () => {
       setIsPlaying(false);
     };
  return (
    <div ref={ref}>
    <section id="cv"> {/* Gardons l'ID pour les liens de la navbar */}
      <h2>Mon CV</h2>

      <div className="intro-container">
        <div className="intro-image">
          {/* Chemin mis à jour pour le dossier public */}
          <img src="/img/portrait.png" alt="Photo de profil" />
        </div>

        <div className="cv-intro">
          <p>Bonjour et bienvenue sur mon site !</p>
          <p>Je m'appelle <strong>Meli Tsaki Susy</strong>, j'ai 20 ans et je suis étudiante en deuxième année d’informatique, spécialité génie logiciel.</p>
          <p>Je suis passionnée de code, de danse, de chant, de peinture, et de tout ce qui me permet de m’exprimer pleinement.</p>
          <p>Côté pro, j’ai effectué deux stages enrichissants chez Te-SEA, en août 2024, puis depuis février 2025.</p>
          <p>J’ai aussi travaillé avec la startup Digital Studio, où j’ai mis mes compétences web en pratique.</p>
          <p>J’ai développé des sites comme Suzuki Travel, et je travaille actuellement sur une application de gestion de finances.</p>
          <p>Pour aller encore plus loin, je me forme aussi en UI/UX design, car pour moi, la technique et l’esthétique vont de pair.</p>
          <p><em>Merci d’être là, et bonne découverte 🌟</em></p>
        </div>
      </div>

      <div className="cv-text">
        <p>👩‍🎓 Étudiante en informatique, 2e année, 20 ans</p>
        <p>🎨 Passionnée de code, danse, chant, peinture</p>
        <p>🛠️ Stages chez Te-SEA (août 2024 et depuis février 2025)</p>
        <p>💻 Développement web avec la startup Digital Studio</p>
        <p>🌐 Projets réalisés : SUZUKI TRAVEL, app de finances</p>
        <p>🎨 Formation en UI/UX Design</p>
        <p> Langues Francais et anglais</p>
      </div>

      <button className="cv-audio-btn" onClick={togglePlayPause}>
        {isPlaying ? '⏸️ Mettre en pause' : '🎧 Écouter mon CV'}
      </button>
      {/* Attacher la référence à l'élément audio et l'événement 'onEnded' */}
      <audio ref={audioRef} src="/audio/ma-voix.mp3" preload="auto" onEnded={handleAudioEnd}></audio>
    </section>
    </div>
  );
  });

export default CVSection;