import { FunctionComponent } from "react";
import { Property } from "csstype";
import VariantHeading6 from "./VariantHeading6";
import styled from "styled-components";

type CardHeaderType = {
  propertyInfoText?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propAlignItems?: CSSProperties["alignItems"];
  propWidth?: CSSProperties["width"];
  propFlexShrink?: CSSProperties["flexShrink"];
  propLineHeight?: CSSProperties["lineHeight"];
};

const CloseIcon = styled.img`
  position: relative;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const CardHeaderRoot = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const CardHeader: FunctionComponent<CardHeaderType> = ({
  propertyInfoText,
  propDisplay,
  propAlignItems,
  propWidth,
  propFlexShrink,
  propLineHeight,
}) => {
  return (
    <CardHeaderRoot>
      <VariantHeading6
        sectionHeading="Property information"
        variantHeading6Position="unset"
        variantHeading6Width="unset"
        variantHeading6Height="unset"
        variantHeading6Flex="1"
        variantHeading6Display="flex"
        variantHeading6FlexDirection="row"
        variantHeading6Padding="var(--padding-7xs) 0rem"
        variantHeading6BoxSizing="border-box"
        variantHeading6AlignItems="center"
        variantHeading6JustifyContent="flex-start"
        variantHeading6AlignSelf="unset"
        heading6Position="relative"
        heading6Top="unset"
        heading6Left="unset"
        heading6FontSize="32px"
        heading6Color="#041a2f"
        heading6Display="flex"
        heading6AlignItems="center"
        heading6Width="15.08rem"
        heading6FlexShrink="0"
        heading6LineHeight="unset"
      />
      <CloseIcon alt="" src="/close.svg" />
    </CardHeaderRoot>
  );
};

export default CardHeader;
