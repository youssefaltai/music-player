import { useMusicPlayer } from "../../contexts/MusicPlayerContext";
import AlbumCoverStyle from "./AlbumCover.style";

const AlbumCover = () => {
  const { currentTrack } = useMusicPlayer();

  return (
    <AlbumCoverStyle
      $src={currentTrack?.albumCover}
    />
  );
}

export default AlbumCover;
