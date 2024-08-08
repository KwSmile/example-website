import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './AppParts/Home/Home';
import Root from './Root';
import Dark from './AppParts/Dark/Dark';
import Tech from './AppParts/Tech/Tech';
import Game from './AppParts/Game/Game';

export default function App() {
  // const [tab, setTab] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/', element: <Root />, children: [
        { path: '/', element: <Home /> },
        { path: '/dark', element: <Dark /> },
        { path: '/tech', element: <Tech /> },
        { path: '/game', element: <Game /> },
      ]
    },
  ])

  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}
