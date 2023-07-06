import { AiFillGithub } from 'react-icons/ai';

interface GithubButtonProps {
  type: string;
}

export function GithubButton({ type }: GithubButtonProps) {
  return (
    <button className="px-4 py-2 w-4/5 border bg-[#333333] flex items-center gap-2 border-slate-200 rounded-lg text-white font-bold hover:border-slate-400 hover:shadow transition duration-150">
      <AiFillGithub className="mr-2 flex-shrink-0" size="20px" fill="white" />
      <span className="block text-left">{type} com o GitHub</span>
    </button>
  );
}
