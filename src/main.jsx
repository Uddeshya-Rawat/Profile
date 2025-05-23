import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './Component/NavBar.jsx'
import AboutME from './Component/AboutME.jsx'



const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>

  },
  {
    path:"/aboutMe",
    element:<AboutME/>
  }
])

createRoot(document.getElementById('root')).render(








  <StrictMode>
    <RouterProvider router={router}>
    
    </RouterProvider>
   
  </StrictMode>,
)
