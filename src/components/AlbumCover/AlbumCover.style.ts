import styled from "styled-components";

type AlbumCoverStyleProps = {
  $src: string | undefined;
};

const AlbumCoverStyle = styled.div<AlbumCoverStyleProps>`
  width: 250px;
  height: ${(props) => props.$src ? "250px" : "0px"};

  transition: height 0.5s ease-in-out;

  border-radius: 16px;
  margin-bottom: 24px;
  user-select: none;
  background-image: url(${(props) => props.$src || ""});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
  
export default AlbumCoverStyle;
