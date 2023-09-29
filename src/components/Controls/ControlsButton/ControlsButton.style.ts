import styled from "styled-components";
import { ControlsButtonVariant } from "./ControlsButton";

type ControlsButtonStyleProps = {
  $variant?: ControlsButtonVariant;
};

const ControlsButtonStyle = styled.button<ControlsButtonStyleProps>`
  all: unset;
  width: ${(props) => (props.$variant === "secondary" ? "48px" : "56px")};
  height: ${(props) => (props.$variant === "secondary" ? "48px" : "56px")};
  border-radius: 50%;
  background-color: var(--button-color);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--button-hover-color);
  }

  svg {
    fill: var(--button-icon-color);
  }
`;

export default ControlsButtonStyle;
