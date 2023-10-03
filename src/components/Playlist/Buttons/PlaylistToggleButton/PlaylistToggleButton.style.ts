import styled from "styled-components";
import ButtonStyle from "../Button.style";

type PlaylistToggleButtonStyleProps = {
  $collapsed: boolean;
};

const PlaylistToggleButtonStyle = styled(ButtonStyle)<PlaylistToggleButtonStyleProps>`
  background-color: ${({ $collapsed }) => ($collapsed ? "var(--dark3)" : "var(--dark2)")};
  z-index: 1000;

  position: absolute;
  top: 0;
  left: ${({ $collapsed }) => ($collapsed ? "0" : "calc(34%)")};

  transition: left 0.3s ease-in-out;

  @media (max-width: 640px) {
    left: ${({ $collapsed }) => ($collapsed ? "0" : "calc(100% - 96px)")};
  }
`;

export default PlaylistToggleButtonStyle;
