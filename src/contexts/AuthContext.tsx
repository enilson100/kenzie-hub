import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { ICommonHeaderProperties } from "../services/api";
import { toast } from "react-toastify";
import { getUsers, IUserDataResponse } from "../services/getDataUser";
import { createUsers, IUserRegister } from "../services/createUser";
import { loginUsers, IUserLogin } from "../services/loginUser";

export interface IAuthContexProps {
  children: ReactNode;
}

interface IAuthContex {
  user: IUserDataResponse;
  loginUser: (data: IUserLogin) => Promise<void>;
  loading: boolean;
  registerUser: (data: IUserRegister) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContex>({} as IAuthContex);

const AuthProvider = ({ children }: IAuthContexProps) => {
  const [user, setUser] = useState<IUserDataResponse>({} as IUserDataResponse);
  const [loading, setLoading] = useState(true);

  const navegate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@kenzie-hub:token");
      if (token) {
        try {
          api.defaults.headers = {
            Authorization: `bearer ${token}`,
          } as ICommonHeaderProperties;
          getUsers().then((res) => {
            setUser(res);
          });
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const registerUser = (data: IUserRegister) => {
    createUsers(data)
      .then((res) => {
        toast.success("Usuário criado com sucesso!", {
          autoClose: 900,
          theme: "dark",
        });
        navegate("/", { replace: true });
      })
      .catch((err) => {
        toast.error("Email já existente!", {
          autoClose: 900,
          theme: "dark",
        });
      });
  };

  const loginUser = async (data: IUserLogin) => {
    loginUsers(data)
      .then((response) => {
        const { user: userReponse, token } = response;
        api.defaults.headers = {
          Authorization: `bearer ${token}`,
        } as ICommonHeaderProperties;

        setUser(userReponse);
        toast.success("Usuário logado com sucesso!", {
          autoClose: 900,
          theme: "dark",
        });
        navegate("/dashboard", { replace: true });
        localStorage.setItem("@kenzie-hub:token", token);
      })
      .catch((error) => {
        toast.error("Senha ou email incorreto", {
          autoClose: 900,
          theme: "dark",
        });
      });
  };

  return (
    <AuthContext.Provider
      value={{ user, loginUser, loading, registerUser, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
