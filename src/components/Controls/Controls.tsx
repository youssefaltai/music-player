import ControlsStyle from "./Controls.style";
import NextButton from "./ControlsButton/NextButton";
import PlayPauseButton from "./ControlsButton/PlayPauseButton";
import PreviousButton from "./ControlsButton/PreviousButton";

const Controls = () => {
  return (
    <ControlsStyle>
      <PreviousButton />
      <PlayPauseButton />
      <NextButton />
    </ControlsStyle>
  );
}

export default Controls;
