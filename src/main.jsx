import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UnknownPage from './pages/UnknownPage';
import PointPage from './pages/Point/PointPage';
import SettingsPage from './pages/SettingsPage';
import EmployeesPage from './pages/Employees/EmployeesPage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ponto" element={<PointPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/colaboradores" element={<EmployeesPage />} />
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
