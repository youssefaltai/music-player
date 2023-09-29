import { useMusicPlayer } from "../../contexts/MusicPlayerContext";
import SeekerContainer from "./SeekerContainer.style";
import SeekerFill from "./SeekerFill.style";

const Seeker = () => {
  const {
    percentage,
    seek,
  } = useMusicPlayer();

  const doSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    seek(percentage);
  }

  return (
    <SeekerContainer
      // on drag not just click
      onClick={doSeek}
      onMouseMove={(e) => {
        if (e.buttons === 1) {
          doSeek(e);
        }
      }}
    >
      <SeekerFill $percentage={percentage} />
    </SeekerContainer>
  );
}

export default Seeker;
