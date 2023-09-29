import { PropsWithChildren } from "react";
import ControlsButtonStyle from "./ControlsButton.style";

export type ControlsButtonVariant = "primary" | "secondary";

type ControlsButtonProps = {
  variant: ControlsButtonVariant;
  onClick?: () => void;
} & PropsWithChildren<{}>;

const ControlsButton = ({ children, variant, onClick }: ControlsButtonProps) => {
  return (
    <ControlsButtonStyle
      onClick={onClick}
      $variant={variant}
    >
      {children}
    </ControlsButtonStyle>
  );
}

export default ControlsButton;
