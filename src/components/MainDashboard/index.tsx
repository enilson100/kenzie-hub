import { Hr } from "../Header-dashboard/styles";
import { Main, Span } from "./styles";
import TechCads from "../TechCards";
import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { AuthContext } from "../../contexts/AuthContext";
import ModalRegister from "../ModalRegister";
import ModalUpdate from "../ModalUpdate";

const MainDashboard = () => {
  const { user } = useContext(AuthContext);
  const { showModal, isOpenModal, isOpenModalUp } = useContext(TechContext);

  return (
    <Main>
      <section className="subHeader">
        <h1>
          Olá, {user.name}
          <Span>{user.course_module}</Span>
        </h1>
      </section>
      <Hr />
      <section className="body-main">
        <div className="hearder-body-main">
          <h2>Tecnologias</h2>
          <button onClick={() => showModal()} className="button-header-main">
            <FiPlus />
          </button>
        </div>
        <section className="container-list">
          <TechCads />
        </section>
      </section>
      {isOpenModal && <ModalRegister />}
      {isOpenModalUp && <ModalUpdate />}
    </Main>
  );
};

export default MainDashboard;
