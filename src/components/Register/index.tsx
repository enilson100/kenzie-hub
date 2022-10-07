import { DivForm } from "../DivForm/styles";
import { FormStyle } from "../Form/styles";
import { DivInput } from "../InputForm/styles";
import { ContainerForm } from "../ContainerForm/styles";
import { Title } from "../TitleForm/styles";
import { Input } from "../Login/styles";
import { Label } from "../LabelForm/styles";
import { ErrorVali } from "../ErrorValidator/styles";
import { DivCadastro, ButtonCadastrar } from "./styles";
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
      <DivCadastro>
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
              <Input
                type="text"
                placeholder="Digite aqui seu nome"
                {...register("name")}
              />
              <ErrorVali>{errors.name?.message}</ErrorVali>
            </DivInput>
            <DivInput>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
              <ErrorVali>{errors.email?.message}</ErrorVali>
            </DivInput>
            <DivInput>
              <Label>Senha</Label>
              <Input
                type="password"
                placeholder="Digite aqui seu senha"
                {...register("password")}
              />
              <ErrorVali>{errors.password?.message}</ErrorVali>
            </DivInput>
            <DivInput>
              <Label>Confirma senha</Label>
              <Input
                type="password"
                placeholder="Confirme aqui sua senha"
                {...register("confirm_password")}
              />
              <ErrorVali>{errors.confirm_password?.message}</ErrorVali>
            </DivInput>
            <DivInput>
              <Label>Bio</Label>
              <Input
                type="text"
                placeholder="Digite aqui sua bio"
                {...register("bio")}
              />
              <ErrorVali>{errors.bio?.message}</ErrorVali>
            </DivInput>
            <DivInput>
              <Label>Contato</Label>
              <Input
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
            <ButtonCadastrar type="submit">Cadastrar</ButtonCadastrar>
          </FormStyle>
        </ContainerForm>
      </DivCadastro>
    </DivForm>
  );
};

export default Register;
