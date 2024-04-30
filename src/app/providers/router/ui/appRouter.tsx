import React from 'react';
import { Suspense } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

const MainPage = React.lazy(() => import('pages/mainPage/ui/mainPage'));
const AboutPage = React.lazy(() => import('pages/aboutPage/ui/aboutPage'));

export const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        lazy={async () => await import('pages/layout')}
        hydrateFallbackElement={<div>loading</div>}
      >
        <Route
          index
          element={
            <Suspense fallback={<div>loading</div>}>
              <MainPage />
            </Suspense>
          }
        />
        <Route
          path='about'
          element={
            <Suspense fallback={<div>loading</div>}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route path='*' lazy={async () => await import('pages/notFoundPage')} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
