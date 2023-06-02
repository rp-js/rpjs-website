import { SpeakerCardComponent } from '../components';

const speakers = [
  {
    name: 'João Bernardo',
    role: 'Frontend Developer',
    image: 'https://github.com/Jbnado.png',
    description: 'Desenvolvedor Frontend na Take & Go',
    media: 'https://jbnado.dev',
  },
  {
    name: 'Renan Rambul',
    role: 'Frontend Developer',
    image: 'https://github.com/RenanRSilva.png',
    description: 'Desenvolvedor Frontend na Take & Go',
    media: 'https://github.com/RenanRSilva',
  },
];

export default function SpeakersSection() {
  return (
    <section className="max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40">
      <h1 className="text-white text-4xl lg:text-7xl font-bold text-center mb-6 lg:mb-10">Palestrantes</h1>
      <div className="w-full flex flex-wrap justify-around items-center">
        {speakers.map((speaker, index) => (
          <SpeakerCardComponent
            key={index}
            name={speaker.name}
            role={speaker.role}
            image={speaker.image}
            description={speaker.description}
            media={speaker.media}
          />
        ))}
      </div>
    </section>
  );
}
