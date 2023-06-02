import { Button, SocialMediaButton } from '@rpjs/ui';

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
          <SocialMediaButton />
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
