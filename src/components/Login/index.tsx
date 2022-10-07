import {
  DivForm,
  FormStyle,
  DivInput,
  ContainerForm,
  Title,
  Input,
  Label,
  Button,
  ErrorVali,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import schema from "../../validators/registerUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { IUserLogin } from "../../services/loginUser";

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
            <Input
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
              <Input
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
