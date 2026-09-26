import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container py-4">
        <div className="row">

          {/* Présentation */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h2 className="site-footer__title">Trouve ton artisan !</h2>
            <p className="site-footer__subtitle">Avec la région Auvergne-Rhône-Alpes</p>
            <p>Plateforme dédiée à la mise en relation entre les particuliers et les artisans de la région.</p>
          </div>

          {/* Menu pages légales */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h2 className="site-footer__title">Informations légales</h2>
            <ul className="list-unstyled">
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
              <li><Link to="/accessibilite">Accessibilité</Link></li>
              <li><Link to="/cookies">Cookies</Link></li>
            </ul>
          </div>

          {/* Adresse et contact */}
          <div className="col-md-4">
            <h2 className="site-footer__title">Nous contacter</h2>
            <address>
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
            </address>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;