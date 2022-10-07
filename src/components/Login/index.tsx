import { Button } from "./styles";
import { ContainerForm } from "../ContainerForm/styles";
import { Title } from "../TitleForm/styles";
import { FormStyle } from "../Form/styles";
import { DivForm } from "../DivForm/styles";
import { DivInput } from "../InputForm/styles";
import { InputForm } from "../InputForm/styles";
import { Label } from "../LabelForm/styles";
import { ErrorVali } from "../ErrorValidator/styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { IUserLogin } from "../../services/loginUser";
import schema from "../../validators/registerUser";
import Logo from "../../assets/Logo.svg";

const FormLogin = () => {
  const [visible, setVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schema),
  });

  const { loginUser } = useContext(AuthContext);

  const navegate = useNavigate();

  const goRegister = () => {
    navegate("/register", { replace: true });
  };

  return (
    <DivForm onSubmit={handleSubmit(loginUser)}>
      <img src={Logo} alt="logo" />
      <ContainerForm>
        <Title>Login</Title>
        <FormStyle className="form">
          <DivInput>
            <Label>Email</Label>
            <InputForm
              id="password"
              type="text"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <ErrorVali>{errors.email?.message}</ErrorVali>
          </DivInput>
          <DivInput>
            <Label htmlFor="">Senha</Label>
            <div className="div-pass">
              <InputForm
                type={visible ? "text" : "password"}
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              {visible ? (
                <BsEye onClick={() => setVisible(!visible)} className="eyes" />
              ) : (
                <BsEyeSlash
                  onClick={() => setVisible(!visible)}
                  className="eyes"
                />
              )}
            </div>

            <ErrorVali>{errors.password?.message}</ErrorVali>
          </DivInput>
          <Button type="submit">Entrar</Button>
        </FormStyle>

        <p>Ainda não possui uma conta?</p>

        <button className="button-gray" onClick={() => goRegister()}>
          Cadastre-se
        </button>
      </ContainerForm>
    </DivForm>
  );
};
export default FormLogin;
