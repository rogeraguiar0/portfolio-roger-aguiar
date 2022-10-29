import styled from "styled-components";

export const Container = styled.header`
  height: 80px;
  width: 100vw;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-0);
  color: var(--color-primary);
  box-shadow: 0 5px 15px 0 var(--color-primary);
`;

export const Logo = styled.div`
  padding: 1px 3px;
  height: 42px;
  width: 42px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 4px;
  background-color: #ead41c;
  color: #000;
  font-size: 20px;
  font-weight: 650;
`;

export const Content = styled.div`
  height: 80%;
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: var(--font-family-title);

  & > h1 {
    font-size: var(--title-size-1);
  }
`;

export const Navigation = styled.nav`
  font-size: var(--text-size-1);

  & > ul {
    display: flex;
    gap: 10px;
  }
`;
