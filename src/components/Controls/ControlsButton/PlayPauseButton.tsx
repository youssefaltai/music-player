import { useMusicPlayer } from "../../../contexts/MusicPlayerContext";
import ControlsButton from "./ControlsButton";
import PauseButtonSvg from "./Svgs/PauseButtonSvg";
import PlayButtonSvg from "./Svgs/PlayButtonSvg";

const PlayPauseButton = () => {
  const { togglePlayPause, paused } = useMusicPlayer();
  return (
    <ControlsButton
      variant="primary"
      onClick={() => {
        togglePlayPause();
      }}
    >
      {!paused ? <PauseButtonSvg /> : <PlayButtonSvg />}
    </ControlsButton>
  );
}

export default PlayPauseButton;
