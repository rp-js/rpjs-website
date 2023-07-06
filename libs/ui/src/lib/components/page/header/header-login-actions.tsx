import { Button } from '../../button';

export type HeaderLoginActionsProps = {
  openModal: (modalType: string) => void;
};

export const HeaderLoginActions = ({ openModal }: HeaderLoginActionsProps) => {
  return (
    <div className="ml-4 flex items-center md:ml-6 gap-3">
      <Button
        button="secondary"
        type="button"
        onClick={() => {
          openModal('Entre');
        }}
      >
        Entrar
      </Button>
      <Button
        button="primary"
        type="button"
        onClick={() => {
          openModal('Registre-se');
        }}
      >
        Registrar
      </Button>
    </div>
  );
};
