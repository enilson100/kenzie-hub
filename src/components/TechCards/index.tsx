import { useContext } from "react";
import { Span } from "../MainDashboard/styles";
import { TechContext } from "../../contexts/TechContext";
import { Li, Ul } from "./styles";
import { IUpType } from "../../contexts/TechContext";
import NoTech from "../NoTech";

const TechCads = () => {
  const { showModalUp, upData, tech } = useContext(TechContext);
  console.log(tech);

  const handleDate = (elem: IUpType) => {
    showModalUp();
    upData(elem);
  };
  return (
    <Ul className="list-car">
      {tech.length > 0 ? (
        tech.map((elem: IUpType) => (
          <Li key={elem.id} onClick={() => handleDate(elem)}>
            <div className="div-list">
              <p>{elem.title}</p>
              <Span>{elem.status}</Span>
            </div>
          </Li>
        ))
      ) : (
        <NoTech />
      )}
    </Ul>
  );
};
export default TechCads;
