import { FunctionComponent } from "react";
import styled from "styled-components";

const FrameChild = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-5xs);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: var(--br-5xs);
  width: 9.94rem;
  height: 7.5rem;
  object-fit: cover;
`;
const Div = styled.div`
  position: absolute;
  top: 0.81rem;
  left: 2.31rem;
  line-height: 155%;
  font-weight: 500;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: var(--br-5xs);
  background-color: var(--color-gray-100);
  width: 9.94rem;
  height: 7.5rem;
`;
const RectangleContainer = styled.div`
  align-self: stretch;
  position: relative;
  width: 9.94rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const RectangleGroup = styled.div`
  align-self: stretch;
  height: 7.5rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const RectangleParentRoot = styled.div`
  align-self: stretch;
  width: 21.25rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: left;
  font-size: var(--font-size-41xl);
  color: var(--white);
  font-family: var(--font-poppins);
`;
const PhotosDynamicContainer: FunctionComponent = () => {
  return (
    <RectangleParentRoot>
      <FrameChild alt="" src="/rectangle-3@2x.png" />
      <FrameChild alt="" src="/rectangle-4@2x.png" />
      <RectangleGroup>
        <FrameChild alt="" src="/rectangle-41@2x.png" />
        <RectangleContainer>
          <RectangleIcon alt="" src="/rectangle-5@2x.png" />
          <Div>11+</Div>
          <RectangleDiv />
        </RectangleContainer>
      </RectangleGroup>
    </RectangleParentRoot>
  );
};

export default PhotosDynamicContainer;
