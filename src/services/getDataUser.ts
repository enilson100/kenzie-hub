import api from "./api";

export interface ITechResponse {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export interface IUserDataResponse {
  avatar_url: null | string;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: ITechResponse[];
  updated_at: string;
  works: string[];
}

export async function getUsers(): Promise<IUserDataResponse> {
  const { data } = await api.get<IUserDataResponse>("/profile");

  return data;
}
