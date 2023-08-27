import { FunctionComponent } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type VariantDownType = {
  propertyStatus?: string;
  propertyInfo?: string;
  listingDate?: string;

  /** Style props */
  variantDownPosition?: CSSProperties["position"];
  variantDownAlignSelf?: CSSProperties["alignSelf"];
  frameIconWidth?: CSSProperties["width"];
  frameIconHeight?: CSSProperties["height"];
  badgeBackgroundColor?: CSSProperties["backgroundColor"];
  badgeBorder?: CSSProperties["border"];
  successColor?: CSSProperties["color"];
  frameDivHeight?: CSSProperties["height"];
  rectangleDivTop?: CSSProperties["top"];
  rectangleDivLeft?: CSSProperties["left"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivHeight?: CSSProperties["height"];
};

const FrameChild = styled.img<{
  frameIconWidth?: Property.Width;
  frameIconHeight?: Property.Height;
}>`position: relative;
  width: 32px;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;
  width: ${(p) => p.frameIconWidth}
  height: ${(p) => p.frameIconHeight}
`;
const Success = styled.div<{ successColor?: Property.Color }>`
  position: relative;
  font-weight: 500;
  color: ${(p) => p.successColor};
`;
const Badge = styled.div<{
  badgeBackgroundColor?: Property.BackgroundColor;
  badgeBorder?: Property.Border;
}>`border-radius: var(--br-xl);
  background-color: var(--landscanner-success-lightest);
  border: 2px solid var(--landscanner-success-dark);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-9xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.badgeBackgroundColor}
  border: ${(p) => p.badgeBorder}
`;
const Div = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  font-weight: 500;
  color: var(--landscanner-text-main);
`;
const BadgeParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const May19By = styled.div`
  position: relative;
  color: var(--landscanner-text-light);
`;
const FrameGroup = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameParent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const FrameItem = styled.div<{
  rectangleDivTop?: Property.Top;
  rectangleDivLeft?: Property.Left;
  rectangleDivWidth?: Property.Width;
  rectangleDivHeight?: Property.Height;
}>`position: absolute;
  top: 1px;
  left: 15px;
  background-color: var(--color-gainsboro);
  width: 2px;
  height: 100px;
  top: ${(p) => p.rectangleDivTop}
  left: ${(p) => p.rectangleDivLeft}
  width: ${(p) => p.rectangleDivWidth}
  height: ${(p) => p.rectangleDivHeight}
`;
const VariantdownInner = styled.div<{ frameDivHeight?: Property.Height }>`
  align-self: stretch;
  position: relative;
  height: 100px;
  overflow: hidden;
  flex-shrink: 0;
  height: ${(p) => p.frameDivHeight};
`;
const VariantdownRoot = styled.div<{
  variantDownPosition?: Property.Position;
  variantDownAlignSelf?: Property.AlignSelf;
}>`position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--landscanner-success-dark);
  font-family: var(--font-poppins);
  position: ${(p) => p.variantDownPosition}
  align-self: ${(p) => p.variantDownAlignSelf}
`;
const VariantDown: FunctionComponent<VariantDownType> = ({
  propertyStatus,
  propertyInfo,
  listingDate,
  variantDownPosition,
  variantDownAlignSelf,
  frameIconWidth,
  frameIconHeight,
  badgeBackgroundColor,
  badgeBorder,
  successColor,
  frameDivHeight,
  rectangleDivTop,
  rectangleDivLeft,
  rectangleDivWidth,
  rectangleDivHeight,
}) => {
  return (
    <VariantdownRoot
      variantDownPosition={variantDownPosition}
      variantDownAlignSelf={variantDownAlignSelf}
    >
      <FrameParent>
        <FrameChild
          alt=""
          src="/frame-95.svg"
          frameIconWidth={frameIconWidth}
          frameIconHeight={frameIconHeight}
        />
        <FrameGroup>
          <BadgeParent>
            <Badge
              badgeBackgroundColor={badgeBackgroundColor}
              badgeBorder={badgeBorder}
            >
              <Success successColor={successColor}>{propertyStatus}</Success>
            </Badge>
            <Div>{propertyInfo}</Div>
          </BadgeParent>
          <May19By>{listingDate}</May19By>
        </FrameGroup>
      </FrameParent>
      <VariantdownInner frameDivHeight={frameDivHeight}>
        <FrameItem
          rectangleDivTop={rectangleDivTop}
          rectangleDivLeft={rectangleDivLeft}
          rectangleDivWidth={rectangleDivWidth}
          rectangleDivHeight={rectangleDivHeight}
        />
      </VariantdownInner>
    </VariantdownRoot>
  );
};

export default VariantDown;
