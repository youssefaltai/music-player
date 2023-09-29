import { useEffect } from "react";
import { dummyPlaylist, useMusicPlayer } from "../../contexts/MusicPlayerContext";
import AlbumCover from "../AlbumCover/AlbumCover";
import Controls from "../Controls/Controls";
import Seeker from "../Seeker/Seeker";
import MusicPlayerStyle from "./MusicPlayer.style";
import TrackDetails from "../TrackDetails/TrackDetails";


const MusicPlayer = () => {
  const {
    setPlaylist,
    setCurrentTrackIndex,
  } = useMusicPlayer();

  useEffect(() => {
    setPlaylist(dummyPlaylist);
    setCurrentTrackIndex(0);
  }, []);

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
