import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  height: 180px;
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: var(--color-grey-4);
  transition: 0.4s;

  & > h4 {
    color: var(--color-grey-1);
    font-family: var(--font-family-title);
    font-size: var(--title-size-1);
  }

  & > p {
    color: var(--color-grey-1);
    font-family: var(--font-family-text);
    font-size: var(--text-size-1);
    font-weight: 600;
    line-height: 24px;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  & a {
    color: var(--color-brand);
    font-family: var(--font-family-text);
    font-size: var(--text-size-1);
    font-weight: 600;
    text-decoration: none;
  }

  & > svg {
    position: absolute;
    top: 10px;
    right: 10px;
    fill: var(--color-grey-1);
    transition: 0.4s;
  }

  &:hover {
    border: 2px solid var(--color-brand);
    transition: 0.4s;
  }

  &:hover > h4 {
    color: var(--color-brand);
    transition: 0.4s;
  }

  &:hover > svg {
    fill: var(--color-brand);
    transition: 0.4s;
  }
`;
