import { FunctionComponent } from "react";
import SuburbCard from "./SuburbCard";
import styled from "styled-components";

type PopularSuburbsContainerType = {
  imageCode?: string;
  locationName?: string;
  addressCode?: string;
  imageCodeUrl?: string;
  suburbImageUrl?: string;
  suburbCode?: string;
  imageCodeUrl2?: string;
  suburbThumbnailUrl?: string;
  suburbCodeImageUrl?: string;
};

const SuburbCardParentRoot = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) 0rem;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  @media screen and (max-width: 420px) {
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: center;
    justify-content: flex-start;
  }
`;
const PopularSuburbsContainer: FunctionComponent<
  PopularSuburbsContainerType
> = ({
  imageCode,
  locationName,
  addressCode,
  imageCodeUrl,
  suburbImageUrl,
  suburbCode,
  imageCodeUrl2,
  suburbThumbnailUrl,
  suburbCodeImageUrl,
}) => {
  return (
    <SuburbCardParentRoot>
      <SuburbCard
        imageId="/image-3@2x.png"
        suburbName="Kew"
        propertyDescription="VIC 3101"
        suburbCardPosition="unset"
        suburbCardWidth="unset"
        suburbCardFlex="1"
        image3IconWidth="6.25rem"
        image3IconHeight="6.25rem"
        kewLineHeight="1.5rem"
      />
      <SuburbCard
        imageId="/image-31@2x.png"
        suburbName="Ivanhoe"
        propertyDescription="VIC 3079"
        suburbCardPosition="unset"
        suburbCardWidth="unset"
        suburbCardFlex="1"
        image3IconWidth="6.25rem"
        image3IconHeight="6.25rem"
        kewLineHeight="1.5rem"
      />
      <SuburbCard
        imageId="/image-32@2x.png"
        suburbName="Albert Park"
        propertyDescription="VIC 3206"
        suburbCardPosition="unset"
        suburbCardWidth="unset"
        suburbCardFlex="1"
        image3IconWidth="6.25rem"
        image3IconHeight="6.25rem"
        kewLineHeight="1.5rem"
      />
    </SuburbCardParentRoot>
  );
};

export default PopularSuburbsContainer;
