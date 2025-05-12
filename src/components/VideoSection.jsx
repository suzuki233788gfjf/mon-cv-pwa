import React, { forwardRef } from 'react';
import './VideoSection.css';

const VideoSection = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <section id="video">
        <h2>Ma Vidéo de Présentation</h2>
        <p>Découvrez ma présentation vidéo pour en savoir plus sur mon parcours et mes motivations.</p>

        {/* AJOUTEZ VOTRE VIDÉO ICI */}
        <div className="video-container">
          <video
            controls // Permet d'afficher les contrôles de lecture (play, pause, volume)
            preload="metadata" // Charge seulement les métadonnées (durée, dimensions) pour un chargement plus rapide
            width="100%" // La vidéo prendra 100% de la largeur de son conteneur
            // height="auto" // La hauteur s'ajustera automatiquement pour maintenir les proportions
            src="/video/ma-presentation.mp4" // Le chemin vers votre fichier vidéo dans public/video/
            type="video/mp4" // Indique le type de vidéo pour le navigateur
          >
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
        {/* N'oubliez pas de remplacer "ma-presentation-video.mp4" par le nom exact de votre fichier vidéo */}

        <p>J'espère que cette vidéo vous donnera un aperçu plus dynamique de ma personnalité.</p>
        {/* Vous pouvez ajouter plus de contenu ou des liens ici */}
      </section>
    </div>
  );
});

export default VideoSection;