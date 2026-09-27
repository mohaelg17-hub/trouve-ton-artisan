import { Helmet } from 'react-helmet-async';
import logo from '../../assets/Logo.png';

function NotFound() {
  return (
    <div className="container py-5 text-center">
      <Helmet>
        <title>Page non trouvée – Trouve ton artisan !</title>
        <meta name="description" content="La page que vous recherchez n'existe pas." />
      </Helmet>

      <img src={logo} alt="Trouve ton artisan !" height="80" className="mb-4" />
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous avez demandée n'existe pas ou plus.</p>
    </div>
  );
}

export default NotFound;