import ProjectCard from "./ProjectCard";
import { Container } from "./style";
import { AiOutlineStar } from "react-icons/ai";
import { GiCardExchange, GiDeathStar } from "react-icons/gi";

export interface iData {
  name: string;
  description: string;
  repo: string;
  pages: string;
  icon: any;
}

const Projects = () => {
  const data = [
    {
      name: "JoBroLand",
      description:
        "Após os dois primeiros meses de estudo, desenvolvi um e-commerce com a temática de JoJo Bizarre Adventure!",
      repo: "https://github.com/rogeraguiar0/Projeto-JoBroLand",
      pages: "https://rogeraguiar0.github.io/Projeto-JoBroLand/",
      icon: <AiOutlineStar />,
    },
    {
      name: "Jogo da memória",
      description:
        "Na matéria de Deenvolvimento em JavaScript da faculdade, construí um jogo da memória com animações 3D e alguns pequenos algortimos! A temática foi: Hora de Aventura.",
      repo: "https://github.com/rogeraguiar0/Jogo-da-memoria",
      pages: "https://rogeraguiar0.github.io/Jogo-da-memoria/",
      icon: <GiCardExchange />,
    },
    {
      name: "Star Wars",
      description:
        "Essa aplicação foi feita com o intúito de praticar os conceitos da componentização e consumo de API. O tema escolhido foi da minha saga de filmes favoritos: Star Wars",
      repo: "https://github.com/rogeraguiar0/Projeto-Star-Wars",
      pages: "https://projeto-star-wars-rogeraguiar0.vercel.app/",
      icon: <GiDeathStar />,
    },
  ] as iData[];

  return (
    <Container>
      {data.map((elem, index) => (
        <ProjectCard
          key={index}
          name={elem.name}
          description={elem.description}
          repo={elem.repo}
          pages={elem.pages}
          icon={elem.icon}
        />
      ))}
    </Container>
  );
};

export default Projects;
