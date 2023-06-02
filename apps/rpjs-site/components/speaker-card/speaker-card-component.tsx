import Image from 'next/image';

interface SpeakerProps {
  name: string;
  role: string;
  image: string;
  description: string;
  media: string;
}

export function SpeakerCard({ name, role, image, description, media }: SpeakerProps) {
  return (
    <a
      href={media}
      className="group relative bg-black xl:w-1/3 sm:w-5/12 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 mb-6 lg:mb-10"
    >
      <Image
        alt={name + role}
        src={image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        fill={true}
      />

      <div className="relative py-4 px-4 lg:py-8 lg:px-4">
        <p className="text-sm font-medium uppercase tracking-widest text-primary bg-black w-fit px-1">{role}</p>
        <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 speaker-mobile-hover">
            <p className="text-md sm:text-sm lg:text-lg text-white">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
