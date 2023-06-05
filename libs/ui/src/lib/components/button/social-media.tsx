import Link from 'next/link';

import { SocialMedia } from '../../interfaces';

interface SocialMediaButtonProps {
  title: string;
  socialMedia: Array<SocialMedia>;
}

export function SocialMediaButton({ title, socialMedia }: SocialMediaButtonProps) {
  return (
    <div className="group relative inline-block rounded-full bg-secondary px-8 py-3 text-white">
      <span className="font-bold transition-opacity group-hover:opacity-0">{title}</span>

      <ul className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
        {socialMedia.map(({ name, link, icon }, index) => (
          <li key={index}>
            <Link
              target="_blank"
              className="block rounded-full transition-opacity hover:opacity-90 focus:opacity-75 focus:outline-none"
              href={link}
            >
              <span className="sr-only"> {name} </span>

              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
