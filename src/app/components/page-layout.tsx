import HeaderComponent from './header-component';

interface IPageComponentProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: IPageComponentProps) {
  return (
    <div className="h-screen w-full flex flex-col">
      <HeaderComponent />
      {children}
    </div>
  );
}
