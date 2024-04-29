import { Link, Outlet } from "react-router-dom"
import { useTheme } from "../../hooks/useTheme";

export function Component(){


  
  

  const {toggleTheme} = useTheme();
  return (
    <div>
      <button type="button" onClick={toggleTheme}>Theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Outlet />
  
    </div>
  )
}

