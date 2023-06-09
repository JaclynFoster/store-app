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
import Profile from './routes/Profile'
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { AuthContextProvider } from './context/userContext'

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
    path: '/animals/:type',
    element: <AnimalCategory />
  },
  {
    path: '/animals/:type/:breed',
    element: <SinglePageAnimal />
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
  path: '/profile',
  element: <Profile />
},

])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
    </AuthContextProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()



