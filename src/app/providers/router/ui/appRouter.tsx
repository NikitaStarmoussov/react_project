// import { AboutPage } from 'pages/aboutPage';
import { Layout } from 'pages/layout';
// import { MainPage } from 'pages/mainPage';
// import { NotFoundPage } from 'pages/notFoundPage';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { WithSuspense } from 'shared/ui/WithSuspense';

export const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={<WithSuspense>{element}</WithSuspense>} />
        ))}
        {/* <Route
          index
          element={
            <WithSuspense>
              <MainPage />
            </WithSuspense>
          }
        /> */}
        {/* <Route
          path='about'
          element={
            <WithSuspense>
              <AboutPage />
            </WithSuspense>
          }
        /> */}
        {/* <Route
          path='*'
          element={
            <WithSuspense>
              <NotFoundPage />
            </WithSuspense>
          }
        /> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
