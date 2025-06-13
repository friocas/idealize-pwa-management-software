import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UnknownPage from "./pages/UnknownPage";
import PointPage from "./pages/Point/PointPage";
import SettingsPage from "./pages/SettingsPage";
import EmployeesPage from "./pages/Employees/EmployeesPage";
import HarvestManagementPage from "./pages/HarvestManagement/HarvestManagementPage";
import ProtectedRouteComp from "./components/ProtectedRouteComp";
import HarvestRecordPage from "./pages/HarvestRecord/HarvestRecordPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ponto" element={<ProtectedRouteComp><PointPage /></ProtectedRouteComp>} />
      <Route path="/colheita" element={<ProtectedRouteComp><HarvestManagementPage /></ProtectedRouteComp>} />
      <Route path="/settings" element={<ProtectedRouteComp><SettingsPage /></ProtectedRouteComp>} />
      <Route path="/colaboradores" element={<ProtectedRouteComp><EmployeesPage /></ProtectedRouteComp>} />
      <Route path="/registo-colheita" element={<HarvestRecordPage />} />
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
