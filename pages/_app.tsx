// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../src/index.css'; // Tailwind and global styles

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
