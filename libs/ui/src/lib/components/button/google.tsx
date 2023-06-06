import Image from 'next/image';

export function GoogleButton() {
  return (
    <button className="px-4 py-2 w-4/5 w- border flex items-center gap-2 border-slate-300 rounded-lg text-slate-700 font-bold hover:border-slate-200 hover:shadow transition duration-150">
      <Image
        className="mr-2"
        src="https://www.svgrepo.com/show/355037/google.svg"
        alt="Google logo"
        width={20}
        height={20}
        loading="lazy"
      />
      <span className="block text-left">Entre com o Google</span>
    </button>
  );
}
