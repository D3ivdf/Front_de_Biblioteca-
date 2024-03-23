import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Nuevolibro, {action as nuevolibroAction} from './pages/Nuevolibro'
import Index, {loader as librosLoader} from './pages/index'
import ErrorPage from './components/ErrorPages'
import EditarLibro, {loader as EditarlibroLoader, action as editarlinbroAction} from './pages/Editarlibro'
import { action as eliminarLibroAction } from './components/Libro'
// Routes
const router = createBrowserRouter([
 {
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Index />,
      loader: librosLoader,
      errorElement: <ErrorPage />
    },
    {
      path: '/libros/Nuevo',
      element: <Nuevolibro />,
      action: nuevolibroAction,
      errorElement: <ErrorPage />
    },
    {
      path: '/Libros/:libroId/editar',
      element: <EditarLibro />,
      loader: EditarlibroLoader,
      action: editarlinbroAction,
      errorElement: <ErrorPage />
    },
    {
      path: '/Libros/:libroId/eliminar',
      action: eliminarLibroAction
    }
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
