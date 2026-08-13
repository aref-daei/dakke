import { createBrowserRouter } from 'react-router';
import ProductsPage from '../pages/ProductsPage';
import { getProducts } from '../services/api';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Welcome to Dakke</h1>,
  },
  {
    path: '/products',
    element: <ProductsPage />,
    loader: getProducts,
  },
]);

export default router;
