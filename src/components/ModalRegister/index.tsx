import { MdClose } from "react-icons/md";
import { ContainerModal } from "./styles";
import { Title } from "../TitleForm/styles";
import { Label } from "../LabelForm/styles";
import { Button } from "../Form/styles";
import { ErrorVali } from "../ErrorValidator/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import schema from "../../validators/newTech";
import { ITech } from "../../contexts/TechContext";

const ModalRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITech>({
    resolver: yupResolver(schema),
  });

  const { createTech, showModal } = useContext(TechContext);

  return (
    <ContainerModal>
      <section className="modal-cadastrar">
        <div className="header-modal">
          <Title>Cadastrar Tecnologias</Title>
          <button onClick={() => showModal()}>
            <MdClose />
          </button>
        </div>
        <form className="Form-modal" onSubmit={handleSubmit(createTech)}>
          <div className="div-form">
            <Label>Nome</Label>
            <input
              className="input-modal"
              type="text"
              placeholder="Ex: React"
              {...register("title")}
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
          <Button type="submit" className="button-modal">
            Cadastrar Tecnologias
          </Button>
        </form>
      </section>
    </ContainerModal>
  );
};
export default ModalRegister;
