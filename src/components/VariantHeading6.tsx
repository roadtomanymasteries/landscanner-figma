import { FunctionComponent } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type VariantHeading6Type = {
  sectionHeading?: string;

  /** Style props */
  variantHeading6Position?: CSSProperties["position"];
  variantHeading6Width?: CSSProperties["width"];
  variantHeading6Height?: CSSProperties["height"];
  variantHeading6Flex?: CSSProperties["flex"];
  variantHeading6Display?: CSSProperties["display"];
  variantHeading6FlexDirection?: CSSProperties["flexDirection"];
  variantHeading6Padding?: CSSProperties["padding"];
  variantHeading6BoxSizing?: CSSProperties["boxSizing"];
  variantHeading6AlignItems?: CSSProperties["alignItems"];
  variantHeading6JustifyContent?: CSSProperties["justifyContent"];
  variantHeading6AlignSelf?: CSSProperties["alignSelf"];
  heading6Position?: CSSProperties["position"];
  heading6Top?: CSSProperties["top"];
  heading6Left?: CSSProperties["left"];
  heading6FontSize?: CSSProperties["fontSize"];
  heading6Color?: CSSProperties["color"];
  heading6Display?: CSSProperties["display"];
  heading6AlignItems?: CSSProperties["alignItems"];
  heading6Width?: CSSProperties["width"];
  heading6FlexShrink?: CSSProperties["flexShrink"];
  heading6LineHeight?: CSSProperties["lineHeight"];
};

const Heading6 = styled.div<{
  heading6Position?: Property.Position;
  heading6Top?: Property.Top;
  heading6Left?: Property.Left;
  heading6FontSize?: Property.FontSize;
  heading6Color?: Property.Color;
  heading6Display?: Property.Display;
  heading6AlignItems?: Property.AlignItems;
  heading6Width?: Property.Width;
  heading6FlexShrink?: Property.FlexShrink;
  heading6LineHeight?: Property.LineHeight;
}>`position: absolute;
  top: 0%;
  left: 0%;
  font-weight: 500;
  position: ${(p) => p.heading6Position}
  top: ${(p) => p.heading6Top}
  left: ${(p) => p.heading6Left}
  font-size: ${(p) => p.heading6FontSize}
  color: ${(p) => p.heading6Color}
  display: ${(p) => p.heading6Display}
  align-items: ${(p) => p.heading6AlignItems}
  width: ${(p) => p.heading6Width}
  flex-shrink: ${(p) => p.heading6FlexShrink}
  line-height: ${(p) => p.heading6LineHeight}
`;
const Variantheading6Root = styled.div<{
  variantHeading6Position?: Property.Position;
  variantHeading6Width?: Property.Width;
  variantHeading6Height?: Property.Height;
  variantHeading6Flex?: Property.Flex;
  variantHeading6Display?: Property.Display;
  variantHeading6FlexDirection?: Property.FlexDirection;
  variantHeading6Padding?: Property.Padding;
  variantHeading6BoxSizing?: Property.BoxSizing;
  variantHeading6AlignItems?: Property.AlignItems;
  variantHeading6JustifyContent?: Property.JustifyContent;
  variantHeading6AlignSelf?: Property.AlignSelf;
}>`position: relative;
  width: 125px;
  height: 36px;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
  position: ${(p) => p.variantHeading6Position}
  width: ${(p) => p.variantHeading6Width}
  height: ${(p) => p.variantHeading6Height}
  flex: ${(p) => p.variantHeading6Flex}
  display: ${(p) => p.variantHeading6Display}
  flex-direction: ${(p) => p.variantHeading6FlexDirection}
  padding: ${(p) => p.variantHeading6Padding}
  box-sizing: ${(p) => p.variantHeading6BoxSizing}
  align-items: ${(p) => p.variantHeading6AlignItems}
  justify-content: ${(p) => p.variantHeading6JustifyContent}
  align-self: ${(p) => p.variantHeading6AlignSelf}
`;
const VariantHeading6: FunctionComponent<VariantHeading6Type> = ({
  sectionHeading,
  variantHeading6Position,
  variantHeading6Width,
  variantHeading6Height,
  variantHeading6Flex,
  variantHeading6Display,
  variantHeading6FlexDirection,
  variantHeading6Padding,
  variantHeading6BoxSizing,
  variantHeading6AlignItems,
  variantHeading6JustifyContent,
  variantHeading6AlignSelf,
  heading6Position,
  heading6Top,
  heading6Left,
  heading6FontSize,
  heading6Color,
  heading6Display,
  heading6AlignItems,
  heading6Width,
  heading6FlexShrink,
  heading6LineHeight,
}) => {
  return (
    <Variantheading6Root
      variantHeading6Position={variantHeading6Position}
      variantHeading6Width={variantHeading6Width}
      variantHeading6Height={variantHeading6Height}
      variantHeading6Flex={variantHeading6Flex}
      variantHeading6Display={variantHeading6Display}
      variantHeading6FlexDirection={variantHeading6FlexDirection}
      variantHeading6Padding={variantHeading6Padding}
      variantHeading6BoxSizing={variantHeading6BoxSizing}
      variantHeading6AlignItems={variantHeading6AlignItems}
      variantHeading6JustifyContent={variantHeading6JustifyContent}
      variantHeading6AlignSelf={variantHeading6AlignSelf}
    >
      <Heading6
        heading6Position={heading6Position}
        heading6Top={heading6Top}
        heading6Left={heading6Left}
        heading6FontSize={heading6FontSize}
        heading6Color={heading6Color}
        heading6Display={heading6Display}
        heading6AlignItems={heading6AlignItems}
        heading6Width={heading6Width}
        heading6FlexShrink={heading6FlexShrink}
        heading6LineHeight={heading6LineHeight}
      >
        {sectionHeading}
      </Heading6>
    </Variantheading6Root>
  );
};

export default VariantHeading6;
