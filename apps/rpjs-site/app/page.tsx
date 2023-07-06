import { Metadata } from 'next';
import { Page } from '@rpjs/ui';
import { HeroSection, SpeakersSection, FooterSection } from '../components';

export const metadata: Metadata = {
  title: 'RP.js',
  description: 'Página da comunidade de JavaScript de Ribeirão Preto!',
  applicationName: 'RP.js',
  keywords:
    'javascript, ribeirão preto, comunidade, meetup, evento, programação, js, rp, rp.js',
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
      url: 'https://github.com/pedroluisbrilhadori'
    },
    {
      name: 'Ítalo Covas',
      url: 'https://github.com/ItaloCovas',
    },
  ],
};

export default function Home() {
  return (
    <Page>
      <HeroSection />
      <main className="w-full bg-black">
        <SpeakersSection />
      </main>
      <FooterSection />
    </Page>
  );
}
