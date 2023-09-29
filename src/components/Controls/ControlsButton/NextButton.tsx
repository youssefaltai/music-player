import { useMusicPlayer } from "../../../contexts/MusicPlayerContext";
import ControlsButton from "./ControlsButton";
import NextButtonSvg from "./Svgs/NextButtonSvg";

const NextButton = () => {
  const {
    next,
  } = useMusicPlayer();

  return (
    <ControlsButton
      variant="secondary"
      onClick={next}
    >
      <NextButtonSvg />
    </ControlsButton>
  );
}

export default NextButton;
