import styled from "styled-components";

const AlbumCoverStyle = styled.img.attrs((props) => ({
  src: props.src,
  width: 250,
  height: 250,
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 16px;

  margin-bottom: 24px;

  user-select: none;
`;
  
export default AlbumCoverStyle;
