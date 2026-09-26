import { Link } from 'react-router-dom';
import './ArtisanCard.scss';

function ArtisanCard({ artisan }) {
  // Génère les étoiles pleines/vides selon la note
  const etoiles = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>{i < Math.round(artisan.note) ? '★' : '☆'}</span>
  ));

  return (
    <Link to={`/artisan/${artisan.id}`} className="artisan-card">
      <h3 className="artisan-card__nom">{artisan.nom}</h3>
      <p className="artisan-card__specialite">{artisan.Specialite?.nom}</p>
      <div className="artisan-card__note">{etoiles}</div>
      <p className="artisan-card__ville">{artisan.ville}</p>
    </Link>
  );
}

export default ArtisanCard;