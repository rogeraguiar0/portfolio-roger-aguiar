import {
  Container,
  Logo,
  Content,
  Navigation,
  Links,
  LinkButton,
} from "./style";

import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>RA</Logo>
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
          <Links>
            <LinkButton>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/rógeraguiar/"
              >
                <SiLinkedin />
                LinkedIn
              </a>
            </LinkButton>
            <LinkButton>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/rogeraguiar0"
              >
                <VscGithub />
                GitHub
              </a>
            </LinkButton>
          </Links>
        </Navigation>
      </Content>
    </Container>
  );
};

export default Header;
