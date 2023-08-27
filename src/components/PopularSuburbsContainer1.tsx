import { FunctionComponent } from "react";
import styled from "styled-components";
import PopularSuburbsContainer from "./PopularSuburbsContainer";

const PopularSuburbs = styled.div`
  position: relative;
  line-height: 155%;
  font-weight: 500;
`;
const OtherBuyersAnd = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-base);
  color: var(--landscanner-text-light);
`;
const PopularSuburbsParentRoot = styled.div`
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
const PopularSuburbsContainer1: FunctionComponent = () => {
  return (
    <PopularSuburbsParentRoot>
      <PopularSuburbs>Popular suburbs</PopularSuburbs>
      <OtherBuyersAnd>
        Other buyers and investors are looking at these suburbs. From searching
        to researching, you can do it all here.
      </OtherBuyersAnd>
      <PopularSuburbsContainer
        imageCode="/image-3@2x.png"
        locationName="Kew"
        addressCode="VIC 3101"
        imageCodeUrl="/image-31@2x.png"
        suburbImageUrl="Ivanhoe"
        suburbCode="VIC 3079"
        imageCodeUrl2="/image-32@2x.png"
        suburbThumbnailUrl="Albert Park"
        suburbCodeImageUrl="VIC 3206"
      />
      <PopularSuburbsContainer
        imageCode="/image-33@2x.png"
        locationName="Altona North"
        addressCode="VIC 3025"
        imageCodeUrl="/image-34@2x.png"
        suburbImageUrl="Balwyn"
        suburbCode="VIC 3103"
        imageCodeUrl2="/image-35@2x.png"
        suburbThumbnailUrl="Berwick"
        suburbCodeImageUrl="VIC 3806"
      />
      <PopularSuburbsContainer
        imageCode="/image-36@2x.png"
        locationName="Blackburn"
        addressCode="VIC 3103"
        imageCodeUrl="/image-37@2x.png"
        suburbImageUrl="Brighton"
        suburbCode="VIC 3186"
        imageCodeUrl2="/image-38@2x.png"
        suburbThumbnailUrl="Carlton"
        suburbCodeImageUrl="VIC 3053"
      />
    </PopularSuburbsParentRoot>
  );
};

export default PopularSuburbsContainer1;
