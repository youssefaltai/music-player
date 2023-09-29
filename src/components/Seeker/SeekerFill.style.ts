import styled from "styled-components";

type SeekerFillProps = {
  $percentage: number;
};

const SeekerFill = styled.div.attrs<SeekerFillProps>((props) => ({
  style: {
    width: `${props.$percentage}%`,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--primary-color);
`;

export default SeekerFill;
