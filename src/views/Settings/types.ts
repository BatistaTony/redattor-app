/* eslint-disable no-unsafe-optional-chaining */
import { getWordOfStringFromIndex } from '@utils/helpers';
import { IUser } from 'typescript/user.type';

export interface UpdateUserForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profile: string;
  status: string;
}

export const INITIAL_DATA: UpdateUserForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  profile: '',
  status: '',
};

export const DataToShow = (data?: IUser) => ({
  firstName: getWordOfStringFromIndex(data?.fullname || '', 0),
  lastName: getWordOfStringFromIndex(
    data?.fullname || '',
    data?.fullname ? data?.fullname.split(' ').length - 1 : 2,
  ),
  email: data?.email,
  phone: data?.phone,
  profile: data?.userType,
  status: data?.status,
});
