import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Layout from './Layout';
import Home from './components/Home';
import About from './components/About';
import Categories from './components/Categories';
import Contact from './components/Contact';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='shopping-website/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about/' element={<About/>} />
      <Route path='categories/' element={<Categories/>} />
      <Route path='contact/' element={<Contact/>} />
    </Route>
  )
)
const root=createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

reportWebVitals();
