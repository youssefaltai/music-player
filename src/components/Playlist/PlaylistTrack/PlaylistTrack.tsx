import { useMusicPlayer } from "../../../contexts/MusicPlayerContext";
import PlaylistTrackStyle from "./PlaylistTrack.style";
import PlaylistTrackArtistStyle from "./PlaylistTrackArtist.style";
import PlaylistTrackDetailsStyle from "./PlaylistTrackDetails.style";
import PlaylistTrackImageStyle from "./PlaylistTrackImage.style";
import PlaylistTrackTitleStyle from "./PlaylistTrackTitle.style";

type PlaylistTrackProps = {
  playlistIndex: number;
};

const PlaylistTrack = ({ playlistIndex }: PlaylistTrackProps) => {
  const { playlist, currentTrackIndex, setCurrentTrackIndex } = useMusicPlayer();
  const track = playlist[playlistIndex];
  const isCurrentTrack = playlistIndex === currentTrackIndex;

  return (
    <PlaylistTrackStyle
      $isCurrentTrack={isCurrentTrack}
      onClick={() => setCurrentTrackIndex(playlistIndex)}
    >
      <PlaylistTrackImageStyle
        src={track.albumCover} 
        alt={track.title} 
        width="50px"
        height="50px"
      />
      <PlaylistTrackDetailsStyle>
        <PlaylistTrackTitleStyle>{track.title}</PlaylistTrackTitleStyle>
        <PlaylistTrackArtistStyle>{track.artist}</PlaylistTrackArtistStyle>
      </PlaylistTrackDetailsStyle>
    </PlaylistTrackStyle>
  );
}

export default PlaylistTrack;

