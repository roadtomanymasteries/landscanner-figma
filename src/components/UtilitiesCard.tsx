import { FunctionComponent } from "react";
import { Property } from "csstype";
import CardHeader from "./CardHeader";
import styled from "styled-components";

type UtilitiesCardType = {
  section32SummaryText?: string;
  hasCaveatElectricitySuppl?: string;
  utilityType?: string;
  proposalTitle?: string;
  utilityCompanyName?: string;
  ectControlText?: string;
  bankNameAndAmount?: string;
  siteValueText?: string;
  propertyValueText?: string;

  /** Style props */
  propLineHeight?: CSSProperties["lineHeight"];
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
const UtilitiesCard: FunctionComponent<UtilitiesCardType> = ({
  section32SummaryText,
  hasCaveatElectricitySuppl,
  utilityType,
  proposalTitle,
  utilityCompanyName,
  ectControlText,
  bankNameAndAmount,
  siteValueText,
  propertyValueText,
  propLineHeight,
}) => {
  return (
    <CardRoot>
      <CardHeader
        propertyInfoText="Section 32 summary"
        propDisplay="flex"
        propAlignItems="center"
        propWidth="15.08rem"
        propFlexShrink="0"
        propLineHeight="155%"
      />
      <PropertyInformationParent>
        <PropertyInformation>
          <LotplanNumber>{hasCaveatElectricitySuppl}</LotplanNumber>
          <Lot1Sp25302>{utilityType}</Lot1Sp25302>
        </PropertyInformation>
        <PropertyInformation>
          <LotplanNumber>{proposalTitle}</LotplanNumber>
          <Lot1Sp25302>{utilityCompanyName}</Lot1Sp25302>
        </PropertyInformation>
        <PropertyInformation>
          <LotplanNumber>{ectControlText}</LotplanNumber>
          <Lot1Sp25302>{bankNameAndAmount}</Lot1Sp25302>
        </PropertyInformation>
        <PropertyInformation>
          <LotplanNumber>{siteValueText}</LotplanNumber>
          <Lot1Sp25302>{propertyValueText}</Lot1Sp25302>
        </PropertyInformation>
      </PropertyInformationParent>
    </CardRoot>
  );
};

export default UtilitiesCard;
