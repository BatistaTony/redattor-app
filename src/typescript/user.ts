export type User = {
  id: string;
  firstName: string;
  lastName: string;
  profile: string;
  email: string;
  phone: string;
  status: string;
  picture: string;
  password?: string;
};

// TYPE WILL BE MERGED LATER
export interface UserType {
  id: number;
  fullname: string;
  username: string;
  email: string;
  phone: string;
  profileImage: null;
  status: string;
  sequence: number;
  userRoles: string;
  userType: string;
  rootAdmin: number;
  hashRefreshToken: null;
}

export interface ModalEditAndAddProductProps {
  changeType: 'edit' | 'add';
  openModal: boolean;
  data: User | undefined;
  cancel: () => void;
  handleOnSave: (data: User) => Promise<boolean>;
}

export enum UserStatus {
  'activated' = 'Activo',
  'unactived' = 'Inactivo',
}

export enum UserStatusApi {
  'Activo' = 'activated',
  'Inactivo' = 'unactived',
}

export enum UserProfile {
  'admin' = 'Administrador',
  'columnist' = 'Colunista',
  'validator' = 'Validador',
}

export enum UserProfileApi {
  'Administrador' = 'admin',
  'Colunista' = 'columnist',
  'Validador' = 'validator',
}
