import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Header } from "./components/Header";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import ErrorPage from "./error-page";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Carrito } from './components/Carrito';
import Home from './routes/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/header",
    element: <Header/>
  },
  {
    path:"/carrito",
    element:<Carrito/>,

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
    <RouterProvider router={router} />

    </Provider>
  </React.StrictMode>,
)
