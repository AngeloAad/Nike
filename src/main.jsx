import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import ProductsSelection from './pages/ProductsSelection.jsx';
import MyBag from './pages/MyBag.jsx';
import './index.css'
import { BagProvider } from './constants/BagContext.jsx'; // Import the BagProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "productsSelection",
    element: <ProductsSelection />,
  },
  {
    path: "myBag",
    element: <MyBag />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BagProvider> {/* Wrap the RouterProvider with BagProvider */}
      <RouterProvider router={router} />
    </BagProvider>
  </React.StrictMode>,
)
