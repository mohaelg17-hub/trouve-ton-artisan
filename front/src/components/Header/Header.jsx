import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Header.scss';

function Header() {
  const [categories, setCategories] = useState([]);
  const [recherche, setRecherche] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des catégories :', error);
      });
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (recherche.trim() !== '') {
      navigate(`/artisans?recherche=${encodeURIComponent(recherche)}`);
    }
  };

  return (
    <header className="site-header">
      <div className="container d-flex align-items-center justify-content-between py-3">
        
        <Link to="/" className="site-header__logo">
          Trouve ton artisan !
        </Link>

        <nav className="site-header__nav">
          <ul className="d-flex list-unstyled gap-4 mb-0">
            {categories.map((categorie) => (
              <li key={categorie.id}>
                <Link to={`/artisans?categorie=${categorie.id}`}>{categorie.nom}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <form className="site-header__search d-flex" role="search" onSubmit={handleSearchSubmit}>
          <input
            type="search"
            className="form-control"
            placeholder="Rechercher un artisan..."
            aria-label="Rechercher un artisan"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Rechercher
          </button>
        </form>

      </div>
    </header>
  );
}

export default Header;