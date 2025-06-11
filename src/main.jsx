import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UnknownPage from './pages/UnknownPage';
import PontoPage from './pages/PontoPage';
import SettingsPage from './pages/SettingsPage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ponto" element={<PontoPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<UnknownPage />} /> {/* not found */}
    </Routes>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
