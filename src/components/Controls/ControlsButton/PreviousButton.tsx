import { useMusicPlayer } from "../../../contexts/MusicPlayerContext";
import ControlsButton from "./ControlsButton";
import PreviousButtonSvg from "./Svgs/PreviousButtonSvg";

const PreviousButton = () => {
  const {
    previous,
  } = useMusicPlayer();

  return (
    <ControlsButton
      variant="secondary"
      onClick={previous}
    >
      <PreviousButtonSvg />
    </ControlsButton>
  );
}

export default PreviousButton;
