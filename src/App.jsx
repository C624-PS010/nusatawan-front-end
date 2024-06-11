// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ArtikelsPage from './pages/artikel';
import ArtikelDetails from './pages/artikelDetails';
import CampaignPage from './pages/campaign';
import CampaignDetails from './pages/campaignDetails';
import TentangPage from './pages/tentang';

// Dashboard
import Dashboard from './dashboard/Dashboard';
import TableArtikel from './dashboard/Artikel';
import TableCampaign from './dashboard/Campaign';
import CreateCampaign from './dashboard/Campaign/create';
import CreateArtikel from './dashboard/Artikel/create';
import ViewCampaign from './dashboard/Campaign/view';
import EditCampaign from './dashboard/Campaign/edit';
import EditArtikel from './dashboard/Artikel/edit';
import ViewArtikel from './dashboard/Artikel/view';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />} >
                    <Route index element={<Home />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="artikel" element={<ArtikelsPage />} />
                    <Route path="artikel/:id" element={<ArtikelDetails />} />
                    <Route path="campaign" element={<CampaignPage />} />
                    <Route path="campaign/:id" element={<CampaignDetails />} />
                    <Route path="tentang" element={<TentangPage />} />
                </Route>
                <Route>
                    {/* Dashboard */}
                    <Route path="dashboard" element={<Dashboard />} />
                    {/* Artikel */}
                    <Route path="artikelDashboard" element={<TableArtikel />} />
                    <Route path="createArtikel" element={<CreateArtikel />} />
                    <Route path="editArtikel" element={<EditArtikel />} />
                    <Route path="viewArtikel" element={<ViewArtikel />} />
                    {/* Campaign */}
                    <Route path="campaignDashboard" element={<TableCampaign />} />
                    <Route path="createCampaign" element={<CreateCampaign />} />
                    <Route path="viewCampaign/:id" element={<ViewCampaign />} />
                    <Route path="editCampaign" element={<EditCampaign />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
