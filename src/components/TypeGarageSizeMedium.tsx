import { FunctionComponent } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type TypeGarageSizeMediumType = {
  itemCode?: string;

  /** Style props */
  typeGarageSizeMediumPosition?: CSSProperties["position"];
  directionsCarIconWidth?: CSSProperties["width"];
  directionsCarIconHeight?: CSSProperties["height"];
  divColor?: CSSProperties["color"];
};

const DirectionsCarIcon = styled.img<{
  directionsCarIconWidth?: Property.Width;
  directionsCarIconHeight?: Property.Height;
}>`position: relative;
  width: 32px;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;
  width: ${(p) => p.directionsCarIconWidth}
  height: ${(p) => p.directionsCarIconHeight}
`;
const Div = styled.div<{ divColor?: Property.Color }>`
  position: relative;
  font-weight: 300;
  color: ${(p) => p.divColor};
`;
const TypegarageSizemediumRoot = styled.div<{
  typeGarageSizeMediumPosition?: Property.Position;
}>`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
  position: ${(p) => p.typeGarageSizeMediumPosition};
`;
const TypeGarageSizeMedium: FunctionComponent<TypeGarageSizeMediumType> = ({
  itemCode,
  typeGarageSizeMediumPosition,
  directionsCarIconWidth,
  directionsCarIconHeight,
  divColor,
}) => {
  return (
    <TypegarageSizemediumRoot
      typeGarageSizeMediumPosition={typeGarageSizeMediumPosition}
    >
      <DirectionsCarIcon
        alt=""
        src={itemCode}
        directionsCarIconWidth={directionsCarIconWidth}
        directionsCarIconHeight={directionsCarIconHeight}
      />
      <Div divColor={divColor}>2</Div>
    </TypegarageSizemediumRoot>
  );
};

export default TypeGarageSizeMedium;
