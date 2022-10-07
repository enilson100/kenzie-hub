import { DivForm } from "../DivForm/styles";
import { FormStyle } from "../Form/styles";
import { DivInput } from "../InputForm/styles";
import { ContainerForm } from "../ContainerForm/styles";
import { Title } from "../TitleForm/styles";
import { InputForm } from "../InputForm/styles";
import { Label } from "../LabelForm/styles";
import { ErrorVali } from "../ErrorValidator/styles";
import { DivRegister, ButtonRegister } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { IUserRegister } from "../../services/createUser";
import Logo from "../../assets/Logo.svg";
import schema from "../../validators/cadastrarUser";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(schema),
  });

  const navegate = useNavigate();
  const { registerUser } = useContext(AuthContext);

  const back = () => {
    navegate("/");
  };

  return (
    <DivForm>
      <DivRegister>
        <div className="header-cadastro">
          <img src={Logo} alt="Logo" />
          <button className="button-back" onClick={back}>
            Voltar
          </button>
        </div>
        <ContainerForm>
          <Title className="title-cadastro">
            Crie sua conta
            <span className="span">Rápido e grátis, vamos nessa</span>
          </Title>
          <FormStyle onSubmit={handleSubmit(registerUser)}>
            <DivInput>
              <Label>Nome</Label>
              <InputForm
                type="text"
                placeholder="Digite aqui seu nome"
                {...register("name")}
              />
              <ErrorVali>{errors.name?.message}</ErrorVali>
            </DivInput>
            <DivInput>
              <Label>Email</Label>
              <InputForm
                type="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
              <ErrorVali>{errors.email?.message}</ErrorVali>
            </DivInput>
            <DivInput>
              <Label>Senha</Label>
              <InputForm
                type="password"
                placeholder="Digite aqui seu senha"
                {...register("password")}
              />
              <ErrorVali>{errors.password?.message}</ErrorVali>
            </DivInput>
            <DivInput>
              <Label>Confirma senha</Label>
              <InputForm
                type="password"
                placeholder="Confirme aqui sua senha"
                {...register("confirm_password")}
              />
              <ErrorVali>{errors.confirm_password?.message}</ErrorVali>
            </DivInput>
            <DivInput>
              <Label>Bio</Label>
              <InputForm
                type="text"
                placeholder="Digite aqui sua bio"
                {...register("bio")}
              />
              <ErrorVali>{errors.bio?.message}</ErrorVali>
            </DivInput>
            <DivInput>
              <Label>Contato</Label>
              <InputForm
                type="text"
                placeholder="Digite aqui seu contato"
                {...register("contact")}
              />
              <ErrorVali>{errors.contact?.message}</ErrorVali>
            </DivInput>
            <DivInput>
              <Label> Selecionar modulo</Label>
              <select id="" {...register("course_module")}>
                <option value="Primeiro módulo (Introdução ao Front-end)">
                  Primeiro Módulo
                </option>
                <option value="Segundo módulo (Avançando no Front-end)">
                  Segundo Módulo
                </option>
                <option value="Terceiro módulo (Finalizando no Front-end)">
                  Terceiro Módulo
                </option>
                <option value="Quarto módulo (Introdução ao Back-end)">
                  Quarto Módulo
                </option>
                <option value="Quinto módulo (Avançando no Back-end)">
                  Quinto Módulo
                </option>
                <option value="Sexto módulo (Finalizando no Back-end)">
                  Sexto Módulo
                </option>
              </select>
              <ErrorVali>{errors.course_module?.message}</ErrorVali>
            </DivInput>
            <ButtonRegister type="submit">Cadastrar</ButtonRegister>
          </FormStyle>
        </ContainerForm>
      </DivRegister>
    </DivForm>
  );
};

export default Register;
