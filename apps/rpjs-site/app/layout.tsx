import '../styles/globals.css';
import { Metadata } from 'next';
import { NextAuthProvider } from '../providers';

export const metadata: Metadata = {
  title: 'RP.js',
  description: 'Página da comunidade de JavaScript de Ribeirão Preto!',
  applicationName: 'RP.js',
  keywords: 'javascript, ribeirão preto, comunidade, meetup, evento, programação, js, rp, rp.js',
  icons: '/logo.svg',
  authors: [
    {
      name: 'João Bernardo',
      url: 'https://jbnado.dev',
    },
    {
      name: 'Renan Rambul',
    },
    {
      name: 'Pedro Brilhadori',
      url: 'https://github.com/pedroluisbrilhadori',
    },
    {
      name: 'Ítalo Covas',
      url: 'https://github.com/ItaloCovas',
    },
  ],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
