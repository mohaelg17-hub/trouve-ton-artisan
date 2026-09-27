import { Helmet } from 'react-helmet-async';

function LegalPage({ titre }) {
  return (
   <><Helmet>
      <title>{titre} – Trouve ton artisan !</title>
      <meta name="description" content={`${titre} de Trouve ton artisan.`} />
    </Helmet>

    <div className="container py-4">
        <h1>{titre}</h1>
        <p>Page en construction.</p>
      </div></>
  );
}

export default LegalPage;