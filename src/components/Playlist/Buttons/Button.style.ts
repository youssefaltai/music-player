import styled from "styled-components";

const ButtonStyle = styled.button`
  all: unset;
  cursor: pointer;
  background-color: var(--dark3);
  margin: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 8px;

  transition: background-color 0.2s ease-in-out;

  svg {
    fill: var(--text-color);
    stroke: var(--text-color);
  }

  &:hover {
    background-color: var(--dark2);
  }
`;

export default ButtonStyle;
