import { useSession } from 'next-auth/react';
import { HeaderLoginActions } from './header-login-actions';
import { HeaderUserActions } from './header-user-actions';

export type HeaderActionProps = {
  openModal: (modalType: string) => void;
  onSignOutClick: () => void;
};

export const HeaderAction = ({ openModal, onSignOutClick }: HeaderActionProps) => {
  const { data } = useSession();

  if (!data) return <HeaderLoginActions openModal={openModal} />;

  return <HeaderUserActions onSignOutClick={onSignOutClick} />;
};
