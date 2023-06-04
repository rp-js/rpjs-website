import { ISocialMedia } from '@/app/interfaces';

interface ISocialMediaButtonProps {
  title: string;
  socialMedia: Array<ISocialMedia>;
}

export default function SocialMediaButton({ title, socialMedia }: ISocialMediaButtonProps): JSX.Element {
  return (
    <div className="group relative inline-block rounded-full bg-secondary px-8 py-3 text-white">
      <span className="font-bold transition-opacity group-hover:opacity-0">{title}</span>

      <ul className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
        {socialMedia.map(({ name, link, icon }, index) => (
          <li key={index}>
            <a
              target="_blank"
              className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
              href={link}
            >
              <span className="sr-only"> {name} </span>

              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
