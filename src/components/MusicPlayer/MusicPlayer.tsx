import AlbumCover from "../AlbumCover/AlbumCover";
import Controls from "../Controls/Controls";
import Seeker from "../Seeker/Seeker";
import MusicPlayerStyle from "./MusicPlayer.style";
import TrackDetails from "../TrackDetails/TrackDetails";

const MusicPlayer = () => {
  return (
    <MusicPlayerStyle>
      <AlbumCover />
      <TrackDetails />
      <Controls />
      <Seeker />
    </MusicPlayerStyle>
  );
}

export default MusicPlayer;
