import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ArtisanCard from '../../components/ArtisanCard/ArtisanCard';
import { Helmet } from 'react-helmet-async';

function ArtisanList() {
  const [artisans, setArtisans] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categorie = searchParams.get('categorie');
    const recherche = searchParams.get('recherche');

    axios.get('http://localhost:3001/api/artisans', {
      params: { categorie, recherche },
    })
      .then((response) => {
        setArtisans(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des artisans :', error);
      });
  }, [searchParams]);

  return (

    <><Helmet>
      <title>Liste des artisans – Trouve ton artisan !</title>
      <meta name="description" content="Parcourez la liste des artisans de la région Auvergne-Rhône-Alpes, filtrez par catégorie ou recherchez par nom." />
    </Helmet>
    
    <div className="container py-4">
        <h1>Liste des artisans</h1>
        <div className="row g-3">
          {artisans.map((artisan) => (
            <div className="col-12 col-md-6 col-lg-4" key={artisan.id}>
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      </div></>
  );
}

export default ArtisanList;