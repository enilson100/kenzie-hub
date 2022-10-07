import axios, { HeadersDefaults } from "axios";

export interface ICommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 5000,
});

export default api;
