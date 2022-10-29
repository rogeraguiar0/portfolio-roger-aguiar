import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - 90px);
  width: 100%;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-5);

  & > div {
    padding: 10px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 4px;
    background-color: var(--color-grey-5);
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 30px;
  font-family: var(--font-family-text);

  p {
    font-weight: 600;
  }

  span {
    color: var(--color-brand);
  }
`;
