import api from "./api";

export interface ITech {
  title: string;
  status: string;
}

export interface ITechResponse {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
  user: object;
}

export async function createTechs(dataTech: ITech): Promise<ITechResponse> {
  const { data } = await api.post<ITechResponse>("/users/techs", dataTech);

  return data;
}
