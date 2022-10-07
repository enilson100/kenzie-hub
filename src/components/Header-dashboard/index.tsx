import Logo from "./../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { HeaderDash, Hr } from "./styles";

const HeaderDashBoard = () => {
  const navegate = useNavigate();

  const leave = () => {
    window.localStorage.clear();
    navegate("/");
  };

  return (
    <>
      <HeaderDash>
        <div>
          <img src={Logo} alt="logo" />
          <button onClick={leave}>Sair</button>
        </div>
      </HeaderDash>
      <Hr />
    </>
  );
};
export default HeaderDashBoard;
