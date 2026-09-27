import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import api from '../../api';

function ArtisanDetail() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [formData, setFormData] = useState({ nom: '', email: '', objet: '', message: '' });
  const [statut, setStatut] = useState(null);

  useEffect(() => {
    api.get(`/api/artisans/${id}`)
      .then((response) => setArtisan(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post(`/api/contact/${id}`, formData)
      .then(() => {
        setStatut('success');
        setFormData({ nom: '', email: '', objet: '', message: '' });
      })
      .catch(() => setStatut('error'));
  };

  if (!artisan) return <p className="container py-4">Chargement...</p>;

  return (
    <div className="container py-4">
      <Helmet>
        <title>{artisan.nom} – Trouve ton artisan !</title>
        <meta name="description" content={`Contactez ${artisan.nom}, ${artisan.Specialite?.nom} à ${artisan.ville}.`} />
      </Helmet>

      <h1>{artisan.nom}</h1>
      <p>{artisan.Specialite?.nom} — {artisan.ville}</p>
      <p>Note : {artisan.note} / 5</p>

      <h2>À propos</h2>
      <p>{artisan.a_propos}</p>

      {artisan.site_web && (
        <p><a href={artisan.site_web} target="_blank" rel="noopener noreferrer">Site web</a></p>
      )}

      <h2>Contactez {artisan.nom}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom</label>
          <input type="text" id="nom" name="nom" className="form-control" value={formData.nom} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="objet" className="form-label">Objet</label>
          <input type="text" id="objet" name="objet" className="form-control" value={formData.objet} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" name="message" className="form-control" rows="4" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>

      {statut === 'success' && <p className="text-success mt-3">Message envoyé avec succès !</p>}
      {statut === 'error' && <p className="text-danger mt-3">Une erreur est survenue, réessayez.</p>}
    </div>
  );
}

export default ArtisanDetail;