import { FunctionComponent } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type ArticleCardType = {
  imageSize?: string;
  guideTitle?: string;
  timeEstimate?: string;

  /** Style props */
  articleCardPosition?: CSSProperties["position"];
  articleCardWidth?: CSSProperties["width"];
  articleCardAlignSelf?: CSSProperties["alignSelf"];
  articleCardFlex?: CSSProperties["flex"];
  rectangleIconHeight?: CSSProperties["height"];
};

const ArticleCardChild = styled.img<{ rectangleIconHeight?: Property.Height }>`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 159px;
  flex-shrink: 0;
  object-fit: cover;
  height: ${(p) => p.rectangleIconHeight};
`;
const YourUltimateGuide = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
`;
const Mins = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--landscanner-text-light);
`;
const YourUltimateGuideToBuyingParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-base);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const ArticleCardRoot = styled.div<{
  articleCardPosition?: Property.Position;
  articleCardWidth?: Property.Width;
  articleCardAlignSelf?: Property.AlignSelf;
  articleCardFlex?: Property.Flex;
}>`position: relative;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 300px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--landscanner-text-main);
  font-family: var(--font-poppins);
  position: ${(p) => p.articleCardPosition}
  width: ${(p) => p.articleCardWidth}
  align-self: ${(p) => p.articleCardAlignSelf}
  flex: ${(p) => p.articleCardFlex}
`;
const ArticleCard: FunctionComponent<ArticleCardType> = ({
  imageSize,
  guideTitle,
  timeEstimate,
  articleCardPosition,
  articleCardWidth,
  articleCardAlignSelf,
  articleCardFlex,
  rectangleIconHeight,
}) => {
  return (
    <ArticleCardRoot
      articleCardPosition={articleCardPosition}
      articleCardWidth={articleCardWidth}
      articleCardAlignSelf={articleCardAlignSelf}
      articleCardFlex={articleCardFlex}
    >
      <ArticleCardChild
        alt=""
        src={imageSize}
        rectangleIconHeight={rectangleIconHeight}
      />
      <YourUltimateGuideToBuyingParent>
        <YourUltimateGuide>{guideTitle}</YourUltimateGuide>
        <Mins>{timeEstimate}</Mins>
      </YourUltimateGuideToBuyingParent>
    </ArticleCardRoot>
  );
};

export default ArticleCard;
