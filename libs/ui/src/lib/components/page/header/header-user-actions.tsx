import { Button } from '../../button';

export type HeaderUserActionsProps = {
  onSignOutClick: () => void;
};

export const HeaderUserActions = ({ onSignOutClick }: HeaderUserActionsProps) => {
  return (
    <div className="ml-4 flex items-center md:ml-6 gap-3">
      <Button button="secondary" type="button" onClick={onSignOutClick}>
        Sair
      </Button>
    </div>
  );
};
