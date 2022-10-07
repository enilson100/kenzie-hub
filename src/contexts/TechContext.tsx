import api from "../services/api";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { AuthContext, IAuthContexProps } from "./AuthContext";
import { ICommonHeaderProperties } from "../services/api";
import { getUsers, ITechResponse } from "../services/getDataUser";
import { createTechs } from "../services/createTech";

export interface ITech {
  title: string;
  status: string;
}

export interface IUpType {
  id: string;
  created_at: string;
  status: string;
  title: string;
  updated_at: string;
}

interface ITechContex {
  createTech: (data: ITech) => void;
  deleteTech: () => void;
  upDateTech: (data: ITech) => void;
  showModal: () => void;
  showModalUp: () => void;
  upData: (data: IUpType) => void;
  isOpenModal: boolean;
  isOpenModalUp: boolean;
  upType: IUpType;
  tech: IUpType[];
  setTech: Dispatch<SetStateAction<ITechResponse[]>>;
}

export const TechContext = createContext<ITechContex>({} as ITechContex);

const TechProvider = ({ children }: IAuthContexProps) => {
  const { setLoading } = useContext(AuthContext);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModalUp, setIsOpenModalUp] = useState<boolean>(false);
  const [upType, setUpType] = useState({} as IUpType);
  const [tech, setTech] = useState<ITechResponse[]>([]);

  const upData = (data: IUpType) => {
    setUpType(data);
  };
  const showModalUp = () => {
    setIsOpenModalUp(!isOpenModalUp);
  };
  const showModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@kenzie-hub:token");
      if (token) {
        try {
          api.defaults.headers = {
            Authorization: `bearer ${token}`,
          } as ICommonHeaderProperties;
          getUsers().then((res) => {
            setTech(res.techs);
          });
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, [isOpenModal, isOpenModalUp, setLoading]);

  const createTech = (data: ITech) => {
    createTechs(data)
      .then((res) => {
        toast.success("Tecnologia criada!", {
          autoClose: 900,
          theme: "dark",
        });
        showModal();
      })
      .catch((err) => {
        toast.error("Tecnologia já existente!", {
          autoClose: 900,
          theme: "dark",
        });
      });
  };

  const deleteTech = () => {
    api.delete<ITechResponse>(`/users/techs/${upType.id}`).then((res) => {
      showModalUp();
      toast.success("Tecnologia deletada!", {
        autoClose: 1000,
        theme: "dark",
      });
    });
  };

  const upDateTech = (data: ITech) => {
    api.put<ITechResponse>(`/users/techs/${upType.id}`, data).then((res) => {
      showModalUp();
      toast.success("Tecnologia atualizada!", {
        autoClose: 1000,
        theme: "dark",
      });
    });
  };

  return (
    <TechContext.Provider
      value={{
        createTech,
        deleteTech,
        upDateTech,
        showModalUp,
        showModal,
        upData,
        isOpenModal,
        isOpenModalUp,
        upType,
        tech,
        setTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
