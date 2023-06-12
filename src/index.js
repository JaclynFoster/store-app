import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './routes/About'
import Animals from './routes/Animals'
import Cart from './routes/Cart'
import Checkout from './routes/Checkout'
import Contact from './routes/Contact'
import Home from './routes/Home'
import Login from './routes/Login'
import Signup from './routes/Signup'
import reportWebVitals from './reportWebVitals'
import AnimalCategory from './routes/AnimalCategory'
import SinglePageAnimal from './routes/SinglePageAnimal'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/animals',
    element: <Animals />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }, 
  {
    path: '/fowl',
    element: <AnimalCategory />
  },
  {
    path: '/reptiles',
    element: <AnimalCategory />
  },
  {
    path: '/bugs',
    element: <AnimalCategory/>
  },
  {
    path: '/ducks',
    element: <SinglePageAnimal />
  },
  {
    path: '/geese',
    element: <SinglePageAnimal />
  },
   {
    path: '/chickens',
    element: <SinglePageAnimal />
   }, 
   {
    path: '/turtles',
    element: <SinglePageAnimal />
   },
   {
    path: '/lizards',
    element: <SinglePageAnimal />
   },
   {
    path: '/toads',
    element: <SinglePageAnimal />
   },

])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

