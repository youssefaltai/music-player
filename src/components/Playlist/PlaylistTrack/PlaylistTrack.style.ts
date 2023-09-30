import styled from "styled-components";

type PlaylistTrackStyleProps = {
  $isCurrentTrack: boolean;
};

const PlaylistTrackStyle = styled.div<PlaylistTrackStyleProps>`
  color: var(--light1);

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 14px 10px;
  border-radius: 8px;

  background-color: ${({ $isCurrentTrack }) => $isCurrentTrack ? "var(--dark3)" : "var(--dark5)"};
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: var(--dark2);
    cursor: pointer;
  }
`;

export default PlaylistTrackStyle;

