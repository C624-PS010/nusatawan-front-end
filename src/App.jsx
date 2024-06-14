import react, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import AppLayout from "./pages/Layouts/AppLayout";
// import AuthLayout from "./pages/Layouts/AuthLayout";
// import Home from "./pages/home";
// import LoginPage from "./pages/login";
// import RegisterPage from "./pages/register";
// import ArtikelsPage from "./pages/artikel";
// import ArtikelDetails from "./pages/artikelDetails";
// import CampaignPage from "./pages/campaign";
// import CampaignDetails from "./pages/campaignDetails";
// import TentangPage from "./pages/tentang";
// import ErrorPage from "./pages/404";
// import Auth from "./components/Auth";

const AppLayout = lazy(() => import("./pages/Layouts/AppLayout"));
const AuthLayout = lazy(() => import("./pages/Layouts/AuthLayout"));
const Home = lazy(() => import("./pages/home"));
const LoginPage = lazy(() => import("./pages/login"));
const RegisterPage = lazy(() => import("./pages/register"));
const ArtikelsPage = lazy(() => import("./pages/artikel"));
const ArtikelDetails = lazy(() => import("./pages/artikelDetails"));
const CampaignPage = lazy(() => import("./pages/campaign"));
const CampaignDetails = lazy(() => import("./pages/campaignDetails"));
const TentangPage = lazy(() => import("./pages/tentang"));
const ErrorPage = lazy(() => import("./pages/404"));
const Auth = lazy(() => import("./components/Auth"));

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
        <Suspense fallback={<h1>Loading...</h1>}>
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
            <Route path="/dashboard" element={<Auth />}>
              <Route element={<DashboardLayout />}>
                <Route index element={<MainDashboard />} />
                <Route path="artikel" element={<TableArtikel />} />
                <Route path="artikel/:id" element={<ViewArtikel />} />
                <Route path="artikel/create" element={<CreateArtikel />} />
                <Route path="campaign" element={<TableCampaign />} />
                <Route path="campaign/:id" element={<ViewCampaign />} />
                <Route path="campaign/create" element={<CreateCampaign />} />
              </Route>
            </Route>

            {/* Error endpoint */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
