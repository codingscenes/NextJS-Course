import MainHeader from '@/components/main-header';
import './globals.css';

export const metadata = {
  title: 'Travel Guide',
  description: 'Explore the world with our comprehensive travel guide',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body data-gr-c-s-loaded attribute='true'>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
