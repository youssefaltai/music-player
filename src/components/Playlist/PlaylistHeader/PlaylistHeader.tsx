import styled from "styled-components";
import ChooseFilesSvg from "./ChooseFilesSvg";
import ButtonStyle from "../Buttons/Button.style";
import { useMusicPlayer, Track } from "../../../contexts/MusicPlayerContext";

const PlaylistHeader = () => {
  const { setPlaylist } = useMusicPlayer();
  return (
    <PlaylistHeaderStyle>
      <h2>Playlist</h2>
      <ButtonStyle onClick={() => {
        // choose audio files
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "audio/*";
        input.multiple = true;
        input.onchange = (e) => {
          const files = (e.target as HTMLInputElement).files;
          if (files) {
          }
        }
        input.click();
      }}>
        <ChooseFilesSvg />
      </ButtonStyle>
    </PlaylistHeaderStyle>
  );
}

const PlaylistHeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    stroke: var(--text-color);
  }
`;

export default PlaylistHeader;
