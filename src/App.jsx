import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
const DashboardLayout = lazy(() => import("./pages/Layouts/DashboardLayout"));
const MainDashboard = lazy(() => import("./dashboard/Main/Main"));
const TableArtikel = lazy(() => import("./dashboard/Artikel"));
const ViewArtikel = lazy(() => import("./dashboard/Artikel/view"));
const CreateArtikel = lazy(() => import("./dashboard/Artikel/create"));
const TableCampaign = lazy(() => import("./dashboard/Campaign"));
const CreateCampaign = lazy(() => import("./dashboard/Campaign/create"));
const ViewCampaign = lazy(() => import("./dashboard/Campaign/view"));
import LoadingSpin from "./components/Loading/LoadingSpin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <LoadingSpin size="10"></LoadingSpin>
            </div>
          }
        >
          <a href="#maincontent" className="skip-link">
            Menuju ke konten
          </a>
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
