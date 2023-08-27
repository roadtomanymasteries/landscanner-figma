import { FunctionComponent } from "react";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";

const FeaturedArticles = styled.div`
  position: relative;
  line-height: 155%;
  font-weight: 500;
`;
const HearStoriesAnd = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-base);
  color: var(--landscanner-text-light);
`;
const ArticleCardParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) 0rem;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  @media screen and (max-width: 420px) {
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
const FeaturedArticlesParentRoot = styled.div`
  width: 77.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--landscanner-text-main);
  font-family: var(--font-poppins);
`;
const FeaturedArticlesContainer: FunctionComponent = () => {
  return (
    <FeaturedArticlesParentRoot>
      <FeaturedArticles>Featured articles</FeaturedArticles>
      <HearStoriesAnd>
        Hear stories and read tips from our community of real estate experts to
        help you find your dream home.
      </HearStoriesAnd>
      <ArticleCardParent>
        <ArticleCard
          imageSize="/rectangle-1@2x.png"
          guideTitle="Your Ultimate Guide to Buying a Home: Expert Tips for First-Time Buyers"
          timeEstimate="5 mins"
          articleCardPosition="unset"
          articleCardWidth="unset"
          articleCardAlignSelf="unset"
          articleCardFlex="1"
          rectangleIconHeight="9.94rem"
        />
        <ArticleCard
          imageSize="/rectangle-11@2x.png"
          guideTitle="Finding Your Dream Home: Essential Steps for Homebuyers in Today's Real Estate Market"
          timeEstimate="6 mins"
          articleCardPosition="unset"
          articleCardWidth="unset"
          articleCardAlignSelf="unset"
          articleCardFlex="1"
          rectangleIconHeight="9.94rem"
        />
        <ArticleCard
          imageSize="/rectangle-12@2x.png"
          guideTitle="Section 32s and what you need to know"
          timeEstimate="5 mins"
          articleCardPosition="unset"
          articleCardWidth="unset"
          articleCardAlignSelf="stretch"
          articleCardFlex="1"
          rectangleIconHeight="9.94rem"
        />
        <ArticleCard
          imageSize="/rectangle-13@2x.png"
          guideTitle="Organising a building and pest inspections"
          timeEstimate="5 mins"
          articleCardPosition="unset"
          articleCardWidth="unset"
          articleCardAlignSelf="stretch"
          articleCardFlex="1"
          rectangleIconHeight="9.94rem"
        />
      </ArticleCardParent>
    </FeaturedArticlesParentRoot>
  );
};

export default FeaturedArticlesContainer;
