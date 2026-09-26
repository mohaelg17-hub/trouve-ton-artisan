import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ArtisanList from './pages/ArtisanList/ArtisanList';
import ArtisanDetail from './pages/ArtisanDetail/ArtisanDetail';
import NotFound from './pages/NotFound/NotFound';
import LegalPage from './pages/LegalPage/LegalPage';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artisans" element={<ArtisanList />} />
          <Route path="/artisan/:id" element={<ArtisanDetail />} />

          <Route path="/mentions-legales" element={<LegalPage titre="Mentions légales" />} />
          <Route path="/donnees-personnelles" element={<LegalPage titre="Données personnelles" />} />
          <Route path="/accessibilite" element={<LegalPage titre="Accessibilité" />} />
          <Route path="/cookies" element={<LegalPage titre="Cookies" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;