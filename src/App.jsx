// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./pages/Layouts/AppLayout";
import AuthLayout from "./pages/Layouts/AuthLayout";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ArtikelsPage from "./pages/artikel";
import ArtikelDetails from "./pages/artikelDetails";
import CampaignPage from "./pages/campaign";
import CampaignDetails from "./pages/campaignDetails";
import TentangPage from "./pages/tentang";
import ErrorPage from "./pages/404";

// Dashboard
import DashboardLayout from "./pages/Layouts/DashboardLayout";
import MainDashboard from "./dashboard/Main/Main";
import TableArtikel from "./dashboard/Artikel";
import ViewArtikel from "./dashboard/Artikel/view";
import CreateArtikel from "./dashboard/Artikel/create";
import TableCampaign from "./dashboard/Campaign";
import CreateCampaign from "./dashboard/Campaign/create";
import ViewCampaign from "./dashboard/Campaign/view";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* App Endpoint */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="artikel" element={<ArtikelsPage />} />
            <Route path="artikel/:id" element={<ArtikelDetails />} />
            <Route path="campaign" element={<CampaignPage />} />
            <Route path="campaign/:id" element={<CampaignDetails />} />
            <Route path="tentang" element={<TentangPage />} />
          </Route>

          {/* Auth endpoint */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Navigate to="/auth/login" />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          {/* Dashboard endpoint */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<MainDashboard />} />
            <Route path="artikel" element={<TableArtikel />} />
            <Route path="artikel/:id" element={<ViewArtikel />} />
            <Route path="artikel/create" element={<CreateArtikel />} />
            <Route path="campaign" element={<TableCampaign />} />
            <Route path="campaign/:id" element={<ViewCampaign />} />
            <Route path="campaign/create" element={<CreateCampaign />} />
          </Route>

          {/* Error endpoint */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
