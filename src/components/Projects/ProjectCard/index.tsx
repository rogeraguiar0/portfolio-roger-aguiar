import { Container } from "./style";
import { iData } from "../index";

const ProjectCard = ({ name, description, repo, pages, icon }: iData) => {
  return (
    <Container>
      <h4>{name}</h4>
      <p>{description}</p>
      <div>
        <a target="_blank" href={repo} rel="noreferrer">
          Repositório
        </a>
        <p>|</p>
        <a target="_blank" href={pages} rel="noreferrer">
          Pages
        </a>
      </div>
      {icon}
    </Container>
  );
};

export default ProjectCard;
