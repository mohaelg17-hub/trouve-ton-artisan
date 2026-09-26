import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Header.scss';

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des catégories :', error);
      });
  }, []);

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

        <form className="site-header__search d-flex" role="search">
          <input
            type="search"
            className="form-control"
            placeholder="Rechercher un artisan..."
            aria-label="Rechercher un artisan"
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