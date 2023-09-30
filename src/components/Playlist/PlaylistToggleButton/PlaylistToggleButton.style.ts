import styled from "styled-components";

type PlaylistToggleButtonStyleProps = {
  $collapsed: boolean;
};

const PlaylistToggleButtonStyle = styled.button<PlaylistToggleButtonStyleProps>`
  all: unset;
  cursor: pointer;
  background-color: ${({ $collapsed }) => ($collapsed ? "var(--dark3)" : "var(--dark2)")};
  margin: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 8px;

  z-index: 1000;

  position: absolute;
  top: 0;
  left: ${({ $collapsed }) => ($collapsed ? "0" : "calc(34%)")};

  transition: background-color 0.2s ease-in-out, left 0.3s ease-in-out;

  svg {
    fill: var(--light1);
  }

  &:hover {
    background-color: var(--dark2);
  }

  @media (max-width: 640px) {
    left: ${({ $collapsed }) => ($collapsed ? "0" : "calc(100% - 96px)")};
  }
`;

export default PlaylistToggleButtonStyle;
