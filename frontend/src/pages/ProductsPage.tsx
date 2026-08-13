import { useLoaderData } from 'react-router';
import type { Product } from '../types/product';

export default function ProductsPage() {
  const products = useLoaderData() as Product[];

  return (
    <main>
      <h1>Products</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
