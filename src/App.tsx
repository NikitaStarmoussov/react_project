import React from 'react'
import './index.scss'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

const router = createBrowserRouter(createRoutesFromElements(

      <Route path='/' lazy={async () => await import('./pages/layout/layout')} >
<Route index lazy={async () => await import('./pages/mainPage/mainPage')} />
        <Route path="about" lazy={async () => await import('./pages/aboutPage/aboutPage')}/>
        <Route path="*" lazy={async () => await import('./pages/notFoundPage/notFoundPage')} />
      </Route>

))

const App = (): React.ReactElement => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
