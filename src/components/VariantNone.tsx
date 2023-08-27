import { FunctionComponent } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type VariantNoneType = {
  propertyStatus?: string;
  propertyInfo?: string;
  listingDate?: string;

  /** Style props */
  variantNonePosition?: CSSProperties["position"];
  variantNoneAlignSelf?: CSSProperties["alignSelf"];
  frameIconWidth?: CSSProperties["width"];
  frameIconHeight?: CSSProperties["height"];
  badgeBackgroundColor?: CSSProperties["backgroundColor"];
  badgeBorder?: CSSProperties["border"];
  successColor?: CSSProperties["color"];
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
const VariantnoneRoot = styled.div<{
  variantNonePosition?: Property.Position;
  variantNoneAlignSelf?: Property.AlignSelf;
}>`position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--landscanner-success-dark);
  font-family: var(--font-poppins);
  position: ${(p) => p.variantNonePosition}
  align-self: ${(p) => p.variantNoneAlignSelf}
`;
const VariantNone: FunctionComponent<VariantNoneType> = ({
  propertyStatus,
  propertyInfo,
  listingDate,
  variantNonePosition,
  variantNoneAlignSelf,
  frameIconWidth,
  frameIconHeight,
  badgeBackgroundColor,
  badgeBorder,
  successColor,
}) => {
  return (
    <VariantnoneRoot
      variantNonePosition={variantNonePosition}
      variantNoneAlignSelf={variantNoneAlignSelf}
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
    </VariantnoneRoot>
  );
};

export default VariantNone;
