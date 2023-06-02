import { Metadata } from 'next';
import { PageLayout } from '@/app/components';
import { HeroSection, SpeakersSection } from './sections';
import FooterSection from './sections/footer-section';

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
    },
  ],
};

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <main className="w-full bg-black">
        <SpeakersSection />
      </main>
      <FooterSection />
    </PageLayout>
  );
}
