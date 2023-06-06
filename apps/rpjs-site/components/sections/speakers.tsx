import { BgParticles } from '@rpjs/ui';
import { SpeakerCard } from '../../components';
import { Speaker } from '../../interfaces/';

const speakers: Array<Speaker> = [
  {
    name: 'João Bernardo',
    role: 'Frontend Developer',
    image: 'https://github.com/Jbnado.png',
    title: 'Impostor Profissional na Web',
    media: 'https://jbnado.dev',
  },
  {
    name: 'Luiz Fifolato',
    role: 'Analista de Desenvolvimento',
    image: '/speakers/luizFifolato.jpeg',
    title: 'Backend usando o framework AdonisJS',
    media: '#',
  },
  {
    name: 'Naiara Souza',
    role: 'Analista de Desenvolvimento',
    image: '/speakers/naiaraSouza.jpeg',
    title: 'Criatividade como soft skill aplicada no frontend',
    media: '#',
  },
];

const videos = [
  'https://www.youtube.com/embed/AcbbwzelHac',
  'https://www.youtube.com/embed/XDtFcBkJnk0',
  'https://www.youtube.com/embed/LUOIIGxOr3A',
  'https://www.youtube.com/embed/GmG2CKguZjE',
];

const hasFutureEvent = false;
export function SpeakersSection() {
  return (
    <section className="py-10 lg:py-20 lg:px-20 max-sm:px-4 sm:px-6 relative">
      <BgParticles />
      <div className="z-[1] relative">
        <h1 className="text-white text-4xl lg:text-7xl font-bold text-center mb-6 lg:mb-10">
          {hasFutureEvent ? 'Palestrantes' : 'Palestrantes do último evento'}
        </h1>

        <div className="w-full grid md:grid-cols-2 max-sm:grid-cols-1 gap-8 lg:grid-cols-speaker justify-center">
          {speakers.map(({ name, role, image, title, media }, index) => (
            <SpeakerCard key={index} name={name} role={role} image={image} title={title} media={media} />
          ))}
        </div>

        <h1 className="text-white text-3xl lg:text-5xl font-bold text-center mb-6 lg:mb-10">
          Assista alguns dos nossos eventos enquanto aguarda o próximo!
        </h1>

        <div className="w-full grid md:grid-cols-2 max-sm:grid-cols-1 gap-8 max-sm:gap-2">
          {videos.map((video, index) => (
            <iframe
              key={index}
              className="w-full h-[350px]"
              src={video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
              allowFullScreen
            />
          ))}
        </div>
      </div>
    </section>
  );
}
