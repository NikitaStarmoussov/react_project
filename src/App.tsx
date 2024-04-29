import React from 'react'
import './styles/index.scss'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import { classNames } from './helpers/classNames/classNames'

const router = createBrowserRouter(createRoutesFromElements(

      <Route path='/' lazy={async () => await import('./pages/layout/layout')} >
        <Route index lazy={async () => await import('./pages/mainPage/mainPage')} />
        <Route path="about" lazy={async () => await import('./pages/aboutPage/aboutPage')}/>
        <Route path="*" lazy={async () => await import('./pages/notFoundPage/notFoundPage')} />
      </Route>

))


const App = (): React.ReactElement => {
  const {theme} = useTheme();
  return (

    <div className={classNames('app', {}, [theme])}>
      <RouterProvider router={router} />
    </div>

  )
}

export default App
