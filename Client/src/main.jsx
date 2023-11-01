import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Router} from 'react-router-dom'
import DoorController from './DoorController'
import Wallet from './Wallet'
import Layout from './Layout'
import Lock from './Lock'
import Unlock from './Unlock'
import About from './About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Wallet />} />
      <Route path="controls" element={<DoorController />}>
        <Route path="/controls/lock" element={<Lock />} />
        <Route path="/controls/unlock" element={<Unlock />} />
      </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
