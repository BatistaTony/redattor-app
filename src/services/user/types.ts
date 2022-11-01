/* eslint-disable @typescript-eslint/ban-types */
export interface UpdateUserInfoProps {
  userName: string;
  password: string;
}

export interface UpdateUserInfoResponse {
  status: number;
  isLoading: boolean;
}

export interface GetUserInfoResponse {
  status: number;
  isLoading: boolean;
  data: any;
}
