import { Helmet } from 'react-helmet-async';

function NotFound() {
  return (
   <><Helmet>
      <title>Page non trouvée – Trouve ton artisan !</title>
      <meta name="description" content="La page que vous recherchez n'existe pas." />
    </Helmet>
    
    <div className="container py-5 text-center">
        <h1>404 - Page non trouvée</h1>
        <p>La page que vous avez demandée n'existe pas ou plus.</p>
      </div></>
  );
}

export default NotFound;