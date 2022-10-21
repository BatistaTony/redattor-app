export type User = {
  id: string;
  firstName: string;
  lastName: string;
  profile: string;
  email: string;
  phone: string;
  status: string;
  picture: string;
};

export interface ModalEditAndAddProductProps {
  changeType: 'edit' | 'add';
  openModal: boolean;
  data: User | undefined;
  cancel: () => void;
  handleOnSave: (data: User) => Promise<boolean>;
}
