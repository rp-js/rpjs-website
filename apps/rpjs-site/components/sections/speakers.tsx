import { SpeakerCard } from '../../components';

import { Speaker } from '../../interfaces/';

const speakers: Array<Speaker> = [
  {
    name: 'João Bernardo',
    role: 'Frontend Developer',
    image: 'https://github.com/Jbnado.png',
    title: 'Desenvolvedor Frontend na Take & Go',
    media: 'https://jbnado.dev',
  },
  {
    name: 'Renan Rambul',
    role: 'Frontend Developer',
    image: 'https://github.com/RenanRSilva.png',
    title: 'Desenvolvedor Frontend na Take & Go',
    media: 'https://github.com/RenanRSilva',
  },
  {
    name: 'Pedro Luís Brilhadori',
    role: 'Backend Developer',
    image: 'https://github.com/PedroLuisBrilhadori.png',
    title: 'Fodao e fodinha',
    media: 'https://github.com/PedroLuisBrilhadori',
  },
  {
    name: 'Douglas Serafim',
    role: 'Suporte Técnico',
    image: 'https://github.com/DouglasSerafim.png',
    title: 'Fodao e fodinha',
    media: 'https://github.com/DouglasSerafim',
  },
  {
    name: 'Ítalo Covas',
    role: 'Frontend Developer',
    image: 'https://github.com/ItaloCovas.png',
    title: 'Desenvolvedor Frontend na Framework Digital',
    media: 'https://github.com/ItaloCovas',
  },
];

export function SpeakersSection() {
  return (
    <section className="py-10 lg:py-20 lg:px-20 max-sm:px-4 sm:px-6">
      <h1 className="text-white text-4xl lg:text-7xl font-bold text-center mb-6 lg:mb-10">Palestrantes</h1>
      <div className="w-full grid md:grid-cols-2 max-sm:grid-cols-1 gap-8 lg:grid-cols-4">
        {speakers.map(({ name, role, image, title, media }, index) => (
          <SpeakerCard key={index} name={name} role={role} image={image} title={title} media={media} />
        ))}
      </div>
    </section>
  );
}
