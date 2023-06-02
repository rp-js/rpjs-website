import { Header } from './header';

interface PageProps {
  children: React.ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      {children}
    </div>
  );
}
