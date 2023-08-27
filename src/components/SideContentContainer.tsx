import { FunctionComponent } from "react";
import VariantHeading6 from "./VariantHeading6";
import VariantDown from "./VariantDown";
import VariantNone from "./VariantNone";
import styled from "styled-components";
import CardHeader from "./CardHeader";

const TypographyParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const LotplanNumber = styled.div`
  align-self: stretch;
  position: relative;
`;
const Lot1Sp25302 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xs);
  color: var(--landscanner-text-main);
`;
const PropertyInformation = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const PropertyInformationWrapper = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Image9Icon = styled.img`
  position: relative;
  width: 24.13rem;
  height: 49.56rem;
  object-fit: cover;
`;
const Card = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xl);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const NeedABuilding = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 155%;
  font-weight: 500;
  color: var(--landscanner-text-main);
`;
const StartFrom = styled.div`
  position: relative;
  line-height: 155%;
  font-weight: 500;
`;
const Div = styled.div`
  position: relative;
  line-height: 5.25rem;
  font-weight: 500;
`;
const IncGst = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 2.5rem;
  font-weight: 500;
`;
const Parent1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-65xl);
  color: var(--landscanner-text-main);
`;
const StartFromParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const WePartnerWith = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 155%;
`;
const Button1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--landscanner-primary-main);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
  color: var(--white);
`;
const NeedABuildingPestInspectParent = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xl);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-size: var(--font-size-base);
`;
const FrameParentRoot = styled.div`
  align-self: stretch;
  width: 26.25rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--landscanner-text-light);
  font-family: var(--font-poppins);
`;
const SideContentContainer: FunctionComponent = () => {
  return (
    <FrameParentRoot>
      <TypographyParent>
        <VariantHeading6
          sectionHeading="Price history"
          variantHeading6Position="relative"
          variantHeading6Width="unset"
          variantHeading6Height="2.25rem"
          variantHeading6Flex="unset"
          variantHeading6Display="unset"
          variantHeading6FlexDirection="unset"
          variantHeading6Padding="unset"
          variantHeading6BoxSizing="unset"
          variantHeading6AlignItems="unset"
          variantHeading6JustifyContent="unset"
          variantHeading6AlignSelf="stretch"
          heading6Position="absolute"
          heading6Top="0%"
          heading6Left="0%"
          heading6FontSize="24px"
          heading6Color="#000"
          heading6Display="inline-block"
          heading6AlignItems="unset"
          heading6Width="unset"
          heading6FlexShrink="unset"
          heading6LineHeight="unset"
        />
        <VariantDown
          propertyStatus="Sold"
          propertyInfo="$940,000"
          listingDate="16/05/2023 by Nelson Alexander"
          variantDownPosition="unset"
          variantDownAlignSelf="stretch"
          frameIconWidth="2rem"
          frameIconHeight="2rem"
          badgeBackgroundColor="#d3f9d8"
          badgeBorder="2px solid var(--landscanner-success-dark)"
          successColor="#2b8a3e"
          frameDivHeight="6.25rem"
          rectangleDivTop="0.06rem"
          rectangleDivLeft="0.94rem"
          rectangleDivWidth="0.13rem"
          rectangleDivHeight="6.25rem"
        />
        <VariantDown
          propertyStatus="Sold"
          propertyInfo="$740,000"
          listingDate="16/12/2016 by Ray White - Oakleigh"
          variantDownPosition="unset"
          variantDownAlignSelf="stretch"
          frameIconWidth="2rem"
          frameIconHeight="2rem"
          badgeBackgroundColor="#d3f9d8"
          badgeBorder="2px solid var(--landscanner-success-dark)"
          successColor="#2b8a3e"
          frameDivHeight="6.25rem"
          rectangleDivTop="0.06rem"
          rectangleDivLeft="0.94rem"
          rectangleDivWidth="0.13rem"
          rectangleDivHeight="6.25rem"
        />
        <VariantDown
          propertyStatus="Leased"
          propertyInfo="Ray White"
          listingDate="21/04/2015"
          variantDownPosition="unset"
          variantDownAlignSelf="stretch"
          frameIconWidth="2rem"
          frameIconHeight="2rem"
          badgeBackgroundColor="#ffe3e3"
          badgeBorder="2px solid var(--landscanner-error-dark)"
          successColor="#c92a2a"
          frameDivHeight="6.25rem"
          rectangleDivTop="0.06rem"
          rectangleDivLeft="0.94rem"
          rectangleDivWidth="0.13rem"
          rectangleDivHeight="6.25rem"
        />
        <VariantNone
          propertyStatus="Leased"
          propertyInfo="Ray White"
          listingDate="21/07/2012"
          variantNonePosition="unset"
          variantNoneAlignSelf="stretch"
          frameIconWidth="2rem"
          frameIconHeight="2rem"
          badgeBackgroundColor="#ffe3e3"
          badgeBorder="2px solid var(--landscanner-error-dark)"
          successColor="#c92a2a"
        />
      </TypographyParent>
      <Card>
        <CardHeader
          propertyInfoText="Local Attractions"
          propDisplay="flex"
          propAlignItems="center"
          propWidth="15.08rem"
          propFlexShrink="0"
          propLineHeight="unset"
        />
        <PropertyInformationWrapper>
          <PropertyInformation>
            <LotplanNumber>Major Attraction</LotplanNumber>
            <Lot1Sp25302>Heide Museum of Modern Art</Lot1Sp25302>
          </PropertyInformation>
        </PropertyInformationWrapper>
        <Image9Icon alt="" src="/image-9@2x.png" />
      </Card>
      <NeedABuildingPestInspectParent>
        <NeedABuilding>{`Need a building & pest inspection report?`}</NeedABuilding>
        <StartFromParent>
          <StartFrom>Start from</StartFrom>
          <Parent1>
            <Div>$220</Div>
            <IncGst>inc. GST</IncGst>
          </Parent1>
        </StartFromParent>
        <WePartnerWith>
          We partner with reputable building and pest inspectors to provide you
          with detailed reports to help you make educated decisions on your
          purchase.
        </WePartnerWith>
        <WePartnerWith>
          We’ve forged long-term partnerships with local qualified inspectors,
          allowing for faster turnaround time and at a more economical and
          competitive pricing.
        </WePartnerWith>
        <Button1>
          <StartFrom>Purchase</StartFrom>
        </Button1>
      </NeedABuildingPestInspectParent>
    </FrameParentRoot>
  );
};

export default SideContentContainer;
