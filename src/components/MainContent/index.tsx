import { Container } from "./style";

interface iMainContentProps {
  children: React.ReactNode;
}

const MainContent = ({ children }: iMainContentProps) => {
  return <Container>{children}</Container>;
};

export default MainContent;
