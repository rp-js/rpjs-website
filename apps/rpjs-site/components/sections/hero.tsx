import { Button, SocialMediaButton, SocialMedia } from '@rpjs/ui';

const socialMedia: Array<SocialMedia> = [
  {
    name: 'Instagram',
    link: 'https://instagram.com/comunidaderpjs/',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <g id="SVGRepo_bgCarrier" stroke-width="0" />
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
        <g id="SVGRepo_iconCarrier">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    link: 'https://github.com/rp-js',
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/rp-js/',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
      </svg>
    ),
  },
];

export function HeroSection() {
  return (
    <section className="bg-primary">
      <div className="flex flex-col justify-center max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8">
        <div
          className="flex flex-row flex-wrap justify-center items-center font-sans font-bold text-4xl md:text-5xl
           lg:text-8xl leading-snug"
        >
          <div className="mr-4">Comunidade</div>
          <div className="text-primary bg-black py-3 px-4">JavaScript</div>
        </div>
        <div className="max-w-xl mx-auto">
          <p className="mt-10 text-gray-800 text-center text-xl lg:text-3xl">
            Faça parte da comunidade de Ribeirão Preto!
          </p>
        </div>
        <div className="mt-10 flex justify-center items-center w-full mx-auto">
          <Button button="primary" type="button">
            Se inscrever
          </Button>
        </div>
        <div className="mt-10 flex justify-center items-center w-full mx-auto">
          <SocialMediaButton title="Nos Siga" socialMedia={socialMedia} />
        </div>
        <div className="max-w-xl mx-auto">
          <p className="mt-10 text-gray-800 text-center text-xl lg:text-3xl">
            <a href="#" className="hover:underline">
              Dia 25/07 as 19:00 na Dabi Business Park
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
