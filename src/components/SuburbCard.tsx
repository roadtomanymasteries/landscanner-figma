import { FunctionComponent } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type SuburbCardType = {
  imageId?: string;
  suburbName?: string;
  propertyDescription?: string;

  /** Style props */
  suburbCardPosition?: CSSProperties["position"];
  suburbCardWidth?: CSSProperties["width"];
  suburbCardFlex?: CSSProperties["flex"];
  image3IconWidth?: CSSProperties["width"];
  image3IconHeight?: CSSProperties["height"];
  kewLineHeight?: CSSProperties["lineHeight"];
};

const Image3Icon = styled.img<{
  image3IconWidth?: Property.Width;
  image3IconHeight?: Property.Height;
}>`position: relative;
  width: 100px;
  height: 100px;
  object-fit: cover;
  width: ${(p) => p.image3IconWidth}
  height: ${(p) => p.image3IconHeight}
`;
const Kew = styled.div<{ kewLineHeight?: Property.LineHeight }>`
  position: relative;
  line-height: 24px;
  font-weight: 500;
  line-height: ${(p) => p.kewLineHeight};
`;
const House3 = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 155%;
  font-weight: 500;
  color: var(--landscanner-text-light);
`;
const KewParent = styled.div`
  align-self: stretch;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const SuburbCardRoot = styled.div<{
  suburbCardPosition?: Property.Position;
  suburbCardWidth?: Property.Width;
  suburbCardFlex?: Property.Flex;
}>`position: relative;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 469px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--landscanner-text-main);
  font-family: var(--font-poppins);
  position: ${(p) => p.suburbCardPosition}
  width: ${(p) => p.suburbCardWidth}
  flex: ${(p) => p.suburbCardFlex}
`;
const SuburbCard: FunctionComponent<SuburbCardType> = ({
  imageId,
  suburbName,
  propertyDescription,
  suburbCardPosition,
  suburbCardWidth,
  suburbCardFlex,
  image3IconWidth,
  image3IconHeight,
  kewLineHeight,
}) => {
  return (
    <SuburbCardRoot
      suburbCardPosition={suburbCardPosition}
      suburbCardWidth={suburbCardWidth}
      suburbCardFlex={suburbCardFlex}
    >
      <Image3Icon
        alt=""
        src={imageId}
        image3IconWidth={image3IconWidth}
        image3IconHeight={image3IconHeight}
      />
      <KewParent>
        <Kew kewLineHeight={kewLineHeight}>{suburbName}</Kew>
        <House3>{propertyDescription}</House3>
      </KewParent>
    </SuburbCardRoot>
  );
};

export default SuburbCard;
