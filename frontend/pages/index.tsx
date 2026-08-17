import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to Dakke</h1>
      <p>
        Go to the <Link href="/products">products page</Link>.
      </p>
    </main>
  );
}
