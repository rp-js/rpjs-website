import Image from 'next/image';

export function FooterSection() {
  return (
    <footer className="bg-primary w-full mx-auto px-6 sm:px-4 lg:px-8">
      <div className="flex items-center justify-center h-16">
        <div className="flex items-center">
          <div className="text-black font-sans font-bold text-xl hidden md:block mr-3">Comunidade</div>
          <div className="flex-shrink-0 mr-4">
            <Image src="/logo.svg" alt="logo do rpjs" width={44} height={44} />
          </div>
          <div className="text-black font-sans font-bold text-xl hidden md:block">RP.js</div>
        </div>
      </div>
    </footer>
  );
}
