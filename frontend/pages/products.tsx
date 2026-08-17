import type { GetServerSideProps } from 'next';
import type { Product } from '../src/types/product';
import ProductsList from '../src/pages/ProductsPage';

const API_URL = 'http://127.0.0.1:8000/api';

export default function ProductsPage({ products }: { products: Product[] }) {
  return <ProductsList products={products} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${API_URL}/catalog/`);

  if (!res.ok) {
    return { notFound: true };
  }

  const products: Product[] = await res.json();

  return {
    props: {
      products,
    },
  };
};
