import { useState, useEffect } from 'react';
import ArtisanCard from '../../components/ArtisanCard/ArtisanCard';
import { Helmet } from 'react-helmet-async';
import api from '../../api';

function Home() {
  const [artisansDuMois, setArtisansDuMois] = useState([]);

  useEffect(() => {
    api.get('/api/artisans', {
      params: { top: true },
    })
      .then((response) => setArtisansDuMois(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Helmet>
        <title>Trouve ton artisan ! Accueil</title>
        <meta name="description" content="Trouvez facilement un artisan près de chez vous en Auvergne-Rhône-Alpes : bâtiment, services, fabrication, alimentation." />
      </Helmet>

      <div className="container py-4">
        <section className="mb-5">
          <h1>Comment trouver mon artisan ?</h1>
          <ol className="list-unstyled">
            <li className="mb-3">
              <strong>1.</strong> Choisir la catégorie d'artisanat dans le menu.
            </li>
            <li className="mb-3">
              <strong>2.</strong> Choisir un artisan.
            </li>
            <li className="mb-3">
              <strong>3.</strong> Le contacter via le formulaire de contact.
            </li>
            <li className="mb-3">
              <strong>4.</strong> Une réponse sera apportée sous 48h.
            </li>
          </ol>
        </section>

        <section>
          <h2>Les artisans du mois</h2>
          <div className="row g-3">
            {artisansDuMois.map((artisan) => (
              <div className="col-12 col-md-4" key={artisan.id}>
                <ArtisanCard artisan={artisan} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;