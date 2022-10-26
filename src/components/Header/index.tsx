import { Container, Content, Navigation } from "./style";

const Header = () => {
  return (
    <Container>
      <Content>
        <h1>R. Aguiar</h1>
        <Navigation>
          <ul>
            <li>
              <a className="link" href="#projects">
                Projetos
              </a>
            </li>
            <li>
              <a className="link" href="#aboutMe">
                Sobre mim
              </a>
            </li>
            <li>
              <a className="link" href="#contact">
                Contatos
              </a>
            </li>
          </ul>
        </Navigation>
      </Content>
    </Container>
  );
};

export default Header;
