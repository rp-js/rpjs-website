interface ButtonProps {
  children: React.ReactNode;
  button: 'primary' | 'secondary';
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ children, button, type, disabled, onClick }: ButtonProps) {
  const buttonType = {
    primary: 'group relative inline-block font-bold text-black focus:outline-none',
    secondary:
      'font-sans py-2 px-4 rounded cursor-pointer shadow-md text-white font-bold bg-secondary border-secondary-color hover:bg-gradient-to-l hover:from-[#f05a28] hover:to-[#ec008c]',
  };

  return (
    <button className={buttonType[button]} type={type} disabled={disabled} onClick={onClick}>
      {button === 'primary' && (
        <>
          <span className="absolute inset-0 border border-secondary group-active:border-secondary" />
          <span className="block border border-secondary bg-primary px-4 py-2 transition-transform active:border-secondary active:bg-secondary active:text-white group-hover:-translate-x-1 group-hover:-translate-y-1">
            {children}
          </span>
        </>
      )}

      {button !== 'secondary' && children}
    </button>
  );
}
