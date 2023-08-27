import { FunctionComponent } from "react";
import CardHeader from "./CardHeader";
import styled from "styled-components";

type PropertyMarketCardType = {
  heading5?: string;
  lotPlanNumber?: string;
  lot1SP25302?: string;
  lotPlanNumber1?: string;
  lot1SP253021?: string;
  lotPlanNumber2?: string;
  lot1SP253022?: string;
  lotPlanNumber3?: string;
  lot1SP253023?: string;
  lotPlanNumber4?: string;
  lot1SP253024?: string;
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
const PropertyMarketCard: FunctionComponent<PropertyMarketCardType> = ({
  heading5,
  lotPlanNumber,
  lot1SP25302,
  lotPlanNumber1,
  lot1SP253021,
  lotPlanNumber2,
  lot1SP253022,
  lotPlanNumber3,
  lot1SP253023,
  lotPlanNumber4,
  lot1SP253024,
}) => {
  return (
    <CardRoot>
      <CardHeader
        propertyInfoText="Local Property Market"
        propDisplay="flex"
        propAlignItems="center"
        propWidth="15.08rem"
        propFlexShrink="0"
        propLineHeight="unset"
      />
      <PropertyInformationParent>
        <PropertyInformation>
          <LotplanNumber>{lotPlanNumber}</LotplanNumber>
          <Lot1Sp25302>{lot1SP25302}</Lot1Sp25302>
        </PropertyInformation>
        <PropertyInformation>
          <LotplanNumber>{lotPlanNumber1}</LotplanNumber>
          <Lot1Sp25302>{lot1SP253021}</Lot1Sp25302>
        </PropertyInformation>
        <PropertyInformation>
          <LotplanNumber>{lotPlanNumber2}</LotplanNumber>
          <Lot1Sp25302>{lot1SP253022}</Lot1Sp25302>
        </PropertyInformation>
        <PropertyInformation>
          <LotplanNumber>{lotPlanNumber3}</LotplanNumber>
          <Lot1Sp25302>{lot1SP253023}</Lot1Sp25302>
        </PropertyInformation>
      </PropertyInformationParent>
      <PropertyInformationWrapper>
        <PropertyInformation>
          <LotplanNumber>{lotPlanNumber4}</LotplanNumber>
          <Lot1Sp25302>{lot1SP253024}</Lot1Sp25302>
        </PropertyInformation>
      </PropertyInformationWrapper>
    </CardRoot>
  );
};

export default PropertyMarketCard;
