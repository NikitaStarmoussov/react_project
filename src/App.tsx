
import "./index.scss"
import {
  Await,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";


const router = createBrowserRouter(createRoutesFromElements(


      <Route path='/' lazy={()=> import('./pages/layout/layout')} >
<Route index lazy={() => import("./pages/mainPage/mainPage")} />
        <Route path="about" lazy={()=> import('./pages/aboutPage/aboutPage')}/>
        <Route path="*" lazy={()=> import('./pages/notFoundPage/notFoundPage')} />
      </Route>


));


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App