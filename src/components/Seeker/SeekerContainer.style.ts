import styled from "styled-components";

const SeekerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 6px;
  background-color: var(--light2);
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  transition: height 0.15s ease-in-out;

  &:hover {
    height: 18px;
  }
`;

export default SeekerContainer;
