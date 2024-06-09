// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ArtikelsPage from './pages/artikel';
import ArtikelDetails from './pages/artikelDetails';
import CampaignPage from './pages/campaign';
import CampaignDetails from './pages/campaignDetails';
import TentangPage from './pages/tentang';

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
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App