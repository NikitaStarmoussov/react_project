import { Layout } from 'pages/layout';
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
          <Route
            key={path}
            path={path}
            element={
              <WithSuspense>
                <div className='page-wrapper'>{element}</div>
              </WithSuspense>
            }
          />
        ))}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
