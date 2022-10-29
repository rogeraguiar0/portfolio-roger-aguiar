import { Container, Intro } from "./style";
import image from "../../assets/ilustration.png";

const Introduction = () => {
  return (
    <Container>
      <div>
        <Intro>
          <p>Róger Aguiar</p>
          <p>
            Desenvolvedor <span>Front-End</span>
          </p>
        </Intro>
        <img src={image} alt="" />
      </div>
    </Container>
  );
};

export default Introduction;
