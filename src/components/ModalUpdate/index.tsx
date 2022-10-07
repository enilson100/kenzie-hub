import { useContext } from "react";
import { DivButton, ButtonDelete } from "./styles";
import { Title } from "../Login/styles";
import { Label } from "../LabelForm/styles";
import { ErrorVali } from "../ErrorValidator/styles";
import { ContainerModal } from "../ModalRegister/styles";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonCadastrar } from "../Register/styles";
import { ITech, TechContext } from "../../contexts/TechContext";

import schema from "../../validators/updateTech";

const ModalUpdate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITech>({
    resolver: yupResolver(schema),
  });

  const { deleteTech, upDateTech, showModalUp, upType } =
    useContext(TechContext);

  return (
    <ContainerModal>
      <section className="modal-cadastrar">
        <div className="header-modal">
          <Title>Cadastrar Tecnologias</Title>
          <button onClick={() => showModalUp()}>
            <MdClose />
          </button>
        </div>
        <form className="Form-modal" onSubmit={handleSubmit(upDateTech)}>
          <div className="div-form">
            <Label>Nome</Label>
            <input
              className="input-modal"
              type="text"
              value={upType?.title}
              disabled
              readOnly
            />
            <ErrorVali>{errors.title?.message}</ErrorVali>
          </div>
          <div className="div-form">
            <Label>Selecionar status</Label>
            <select className="select-modal" {...register("status")}>
              <option value="Inciante">Inciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <ErrorVali>{errors.status?.message}</ErrorVali>
          </div>
          <DivButton>
            <ButtonCadastrar type="submit">Salvar alterações</ButtonCadastrar>
            <ButtonDelete
              type="button"
              onClick={deleteTech}
              className="buttonDelete"
            >
              Excluir
            </ButtonDelete>
          </DivButton>
        </form>
      </section>
    </ContainerModal>
  );
};
export default ModalUpdate;
