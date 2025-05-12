
import React from 'react';
import './TimelineSection.css';

function TimelineSection() {
  return (
    <section className="timeline-section"> {/* Utilisez className */}
      <h2>🕓 Mon parcours</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-date">2023 - Aujourd'hui</div>
          <div className="timeline-content">
            <h3>🎓 Étudiante en informatique</h3>
            <p>2e année, spécialité génie logiciel</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Août 2024</div>
          <div className="timeline-content">
            <h3>💼 Stage chez Te-SEA</h3>
            <p>Première immersion dans le développement professionnel</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">Fév. 2025</div>
          <div className="timeline-content">
            <h3>💼 Stage chez Te-SEA (2e)</h3>
            <p>Approfondissement en développement web</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2024</div>
          <div className="timeline-content">
            <h3>🚀 Digital Studio</h3>
            <p>Collaboration en développement web</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2024 - présent</div>
          <div className="timeline-content">
            <h3>🌐 Projets</h3>
            <p>Suzuki Travel, Application de gestion de finances</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-date">2025</div>
          <div className="timeline-content">
            <h3>🎨 UI/UX Design</h3>
            <p>Formation en design pour allier beauté et efficacité</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;