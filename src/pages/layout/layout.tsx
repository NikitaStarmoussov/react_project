import { Link, Outlet } from "react-router-dom"

export function Component(){
  return (
    <div>
      
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Outlet />
  
    </div>
  )
}

