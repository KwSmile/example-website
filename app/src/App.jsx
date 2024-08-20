import { useState } from 'react'
import './Main.scss'
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
    <main>

      <RouterProvider router={router} />

    </main>
  )
}
