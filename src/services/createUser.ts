import api from "./api";

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface ICreateUserREsponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: null | string;
}

export async function createUsers(
  dataUser: IUserRegister
): Promise<ICreateUserREsponse> {
  const { data } = await api.post<ICreateUserREsponse>("users", dataUser);

  return data;
}
