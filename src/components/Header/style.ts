import styled from "styled-components";

export const Container = styled.header`
  height: 90px;
  width: 100vw;
  max-width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-5);
  color: var(--color-grey-0);
  box-shadow: 0 0 15px 0 var(--color-grey-1);
`;

export const Logo = styled.div`
  padding: 1px 3px;
  height: 38px;
  width: 42px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 4px;
  background-color: var(--color-brand);
  color: var(--color-grey-5);
  font-size: 20px;
  font-weight: 600;
  cursor: default;
`;

export const Content = styled.div`
  height: 80%;
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  gap: 45px;
  font-family: var(--font-family-title);
`;

export const Navigation = styled.nav`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  color: var(--color-grey-1);
  font-size: var(--text-size-2);
  font-weight: 600;

  & > ul {
    display: flex;
    gap: 30px;
  }

  & a {
    transition: 0.4s;
  }

  & a:hover {
    color: var(--color-brand);
    transition: 0.4s;
  }

  & a:hover svg {
    fill: var(--color-brand);
    transition: 0.4s;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const LinkButton = styled.div`
  display: flex;
  align-items: center;

  & svg {
    fill: var(--color-grey-1);
  }

  & > a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--color-grey-1);
    text-decoration: none;
  }
`;
