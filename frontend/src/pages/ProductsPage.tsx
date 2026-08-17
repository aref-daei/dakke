import type { Product } from '../types/product';

// Reusable products list component. Accepts products as a prop so it can be used
// both by server-side Next.js pages and potential client-side usage.
export default function ProductsList({ products }: { products: Product[] }) {
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
