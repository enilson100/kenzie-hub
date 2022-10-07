import api from "./api";
import { IUserDataResponse } from "./getDataUser";

export interface IUserLogin {
  email: string;
  password: string;
}
export interface ILoginUserResponse {
  user: IUserDataResponse;
  token: string;
}

export async function loginUsers(
  dataLogin: IUserLogin
): Promise<ILoginUserResponse> {
  const { data } = await api.post<ILoginUserResponse>("sessions", dataLogin);

  return data;
}
