import styled from "styled-components";

type PlaylistStyleProps = {
  $collapsed: boolean;
};

const PlaylistStyle = styled.div<PlaylistStyleProps>`
  width: ${({ $collapsed }) => ($collapsed ? "0px" : "50%")};
  margin-left: ${({ $collapsed }) => (!$collapsed ? "0px" : "-16px")};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  z-index: 999;

  gap: 8px;
  padding: 8px;

  background-color: var(--dark5);
  overflow-x: hidden;
  overflow-y: scroll;

  transition: width 0.3s ease-in-out, margin-left 0.3s ease-in-out;

  @media (max-width: 640px) {
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ $collapsed }) => ($collapsed ? "0px" : "100%")};
  }
`;

export default PlaylistStyle;
