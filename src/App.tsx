import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewHomePage from './pages/NewHomePage';
import ErrorBoundary from './components/ErrorBoundary';
import { BASE_PATH, ROUTES } from './constants/paths';

// Lazy load routes for code splitting
const UnternehmenPage = lazy(() => import('./pages/UnternehmenPage'));
const FuehrungskraeftequalifizierungPage = lazy(() => import('./pages/FuehrungskraeftequalifizierungPage'));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename={BASE_PATH}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path={ROUTES.HOME} element={<NewHomePage />} />
            <Route path={ROUTES.UNTERNEHMEN} element={<UnternehmenPage />} />
            <Route path={ROUTES.FUEHRUNGSKRAEFTEQUALIFIZIERUNG} element={<FuehrungskraeftequalifizierungPage />} />
            <Route path={ROUTES.IMPRESSUM} element={<ImpressumPage />} />
            <Route path={ROUTES.DATENSCHUTZ} element={<DatenschutzPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
