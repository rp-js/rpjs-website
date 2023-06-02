import Image from 'next/image';
import ButtonComponent from './button-component';

export default function HeaderComponent() {
  return (
    <header className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              className="flex-shrink-0 mr-4"
              src="/logo.svg"
              alt="logo amarelo escrito r p j s"
              width={44}
              height={44}
            />
            <div className="text-black font-sans font-bold text-xl hidden md:block">RP.js</div>
          </div>
          <div className="ml-4 flex items-center md:ml-6 gap-3">
            <ButtonComponent button="secondary" type="button">
              Entrar
            </ButtonComponent>
            <ButtonComponent button="primary" type="button">
              Registrar
            </ButtonComponent>
          </div>
        </div>
      </div>
    </header>
  );
}
