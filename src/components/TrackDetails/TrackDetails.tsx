import { useMusicPlayer } from "../../contexts/MusicPlayerContext";
import TrackArtistStyle from "./TrackArtist.style";
import TrackDetailsStyle from "./TrackDetails.style";
import TrackTitleStyle from "./TrackTitle.style";

const TrackDetails = () => {
  const { currentTrack } = useMusicPlayer();

  if (!currentTrack) {
    return (
      <div>No track selected</div>
    );
  }

  return (
    <TrackDetailsStyle>
      <TrackTitleStyle>{currentTrack.title}</TrackTitleStyle>
      <TrackArtistStyle>{currentTrack.artist}</TrackArtistStyle>
    </TrackDetailsStyle>
  );
}

export default TrackDetails;
