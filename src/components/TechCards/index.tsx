import { useContext } from "react";
import { Span } from "../MainDashboard/styles";
import { TechContext } from "../../contexts/TechContext";
import { Li, Ul } from "./styles";
import { IUpType } from "../../contexts/TechContext";

const TechCads = () => {
  const { showModalUp, upData, tech } = useContext(TechContext);

  const handleDate = (elem: IUpType) => {
    showModalUp();
    upData(elem);
  };
  return (
    <Ul className="list-car">
      {tech?.map((elem: IUpType) => (
        <Li key={elem.id} onClick={() => handleDate(elem)}>
          <div className="div-list">
            <p>{elem.title}</p>
            <Span>{elem.status}</Span>
          </div>
        </Li>
      ))}
    </Ul>
  );
};
export default TechCads;
