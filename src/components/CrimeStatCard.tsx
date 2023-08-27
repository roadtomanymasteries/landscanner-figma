import { FunctionComponent } from "react";
import CardHeader from "./CardHeader";
import styled from "styled-components";

type CrimeStatCardType = {
  informationTitle?: string;
  locationInfo?: string;
  streetName?: string;
  locationSubtitle?: string;
  locationCode?: string;
  serviceFrequency?: string;
  crimeFrequency?: string;
  serviceTimeOffPeak?: string;
  routeLabels?: string;
  locationCodeText?: string;
  dataLabels?: string;
  crimeRateZoneCrimeRateDes?: string;
};

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
const Every20Mins = styled.li`
  margin-bottom: false;
`;
const MinsOffPeak = styled.li``;
const Every20MinsPeak30Mins = styled.ul`
  margin: 0;
  padding-left: var(--padding-base);
`;
const Lot1Sp25302Container = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-inherit);
  font-family: var(--font-inherit);
  color: var(--landscanner-text-main);
`;
const PropertyInformationParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const PropertyInformationWrapper = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const CardRoot = styled.div`
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
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--landscanner-text-light);
  font-family: var(--font-poppins);
`;
const CrimeStatCard: FunctionComponent<CrimeStatCardType> = ({
  informationTitle,
  locationInfo,
  streetName,
  locationSubtitle,
  locationCode,
  serviceFrequency,
  crimeFrequency,
  serviceTimeOffPeak,
  routeLabels,
  locationCodeText,
  dataLabels,
  crimeRateZoneCrimeRateDes,
}) => {
  return (
    <CardRoot>
      <CardHeader
        propertyInfoText="Public Transport Information"
        propDisplay="flex"
        propAlignItems="center"
        propWidth="15.08rem"
        propFlexShrink="0"
        propLineHeight="unset"
      />
      <PropertyInformationParent>
        <PropertyInformation>
          <LotplanNumber>{locationInfo}</LotplanNumber>
          <Lot1Sp25302>{streetName}</Lot1Sp25302>
        </PropertyInformation>
        <PropertyInformation>
          <LotplanNumber>{locationSubtitle}</LotplanNumber>
          <Lot1Sp25302>{locationCode}</Lot1Sp25302>
        </PropertyInformation>
        <PropertyInformation>
          <LotplanNumber>{serviceFrequency}</LotplanNumber>
          <Lot1Sp25302Container>
            <Every20MinsPeak30Mins>
              <Every20Mins>{crimeFrequency}</Every20Mins>
              <MinsOffPeak>30 mins (off-peak)</MinsOffPeak>
            </Every20MinsPeak30Mins>
          </Lot1Sp25302Container>
        </PropertyInformation>
        <PropertyInformation>
          <LotplanNumber>{routeLabels}</LotplanNumber>
          <Lot1Sp25302>{locationCodeText}</Lot1Sp25302>
        </PropertyInformation>
      </PropertyInformationParent>
      <PropertyInformationWrapper>
        <PropertyInformation>
          <LotplanNumber>{dataLabels}</LotplanNumber>
          <Lot1Sp25302>{crimeRateZoneCrimeRateDes}</Lot1Sp25302>
        </PropertyInformation>
      </PropertyInformationWrapper>
    </CardRoot>
  );
};

export default CrimeStatCard;
