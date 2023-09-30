import { useState } from "react";
import { useMusicPlayer } from "../../contexts/MusicPlayerContext";
import PlaylistStyle from "./Playlist.style";
import PlaylistTrack from "./PlaylistTrack/PlaylistTrack";
import PlaylistToggleButton from "./PlaylistToggleButton/PlaylistToggleButton";

const Playlist = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { playlist } = useMusicPlayer();

  return (
    <>
      <PlaylistStyle $collapsed={collapsed}>
        {playlist.map((_, i) => (
          <PlaylistTrack
            key={i}
            playlistIndex={i}
          />
        ))}
      </PlaylistStyle>
      <PlaylistToggleButton collapsed={collapsed} setCollapsed={setCollapsed} />
    </>
  );
};

export default Playlist;
