import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter,createRoutesFromElements , Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import About from './components/About';
import Categories from './components/Categories';
import Contact from './components/Contact';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about/' element={<About/>}/>
      <Route path='categories/' element={<Categories/>}/>
      <Route path='contact/' element={<Contact/>}/>
      </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
