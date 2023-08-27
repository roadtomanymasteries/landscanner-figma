import { FunctionComponent } from "react";
import styled from "styled-components";

type TitleInformationCardType = {
  propertyData?: string;
  propertyHistoryData?: string;
  propertyDetails?: string;
  propertyHeritageRestricti?: string;
  propertyHeritageRestricti2?: string;
  propertyTrainFrequency?: string;
  trainFrequencyText?: string;
};

const HeritageData = styled.div`
  position: relative;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 36.24rem;
`;
const Typography = styled.div`
  width: 44.75rem;
  height: 3.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const CloseIcon = styled.img`
  position: relative;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const CardHeader1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const PropertyHistory = styled.div`
  align-self: stretch;
  position: relative;
`;
const BuiltInThe = styled.div`
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
  font-size: var(--font-size-3xs);
  color: var(--landscanner-text-light);
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
  font-size: var(--font-size-13xl);
  color: var(--landscanner-text-main);
  font-family: var(--font-poppins);
`;
const TitleInformationCard: FunctionComponent<TitleInformationCardType> = ({
  propertyData,
  propertyHistoryData,
  propertyDetails,
  propertyHeritageRestricti,
  propertyHeritageRestricti2,
  propertyTrainFrequency,
  trainFrequencyText,
}) => {
  return (
    <CardRoot>
      <CardHeader1>
        <Typography>
          <HeritageData>{propertyData}</HeritageData>
        </Typography>
        <CloseIcon alt="" src="/close.svg" />
      </CardHeader1>
      <PropertyInformationParent>
        <PropertyInformation>
          <PropertyHistory>{propertyHistoryData}</PropertyHistory>
          <BuiltInThe>{propertyDetails}</BuiltInThe>
        </PropertyInformation>
        <PropertyInformation>
          <PropertyHistory>{propertyHeritageRestricti}</PropertyHistory>
          <BuiltInThe>{propertyHeritageRestricti2}</BuiltInThe>
        </PropertyInformation>
        <PropertyInformation>
          <PropertyHistory>{propertyTrainFrequency}</PropertyHistory>
          <BuiltInThe>{trainFrequencyText}</BuiltInThe>
        </PropertyInformation>
      </PropertyInformationParent>
    </CardRoot>
  );
};

export default TitleInformationCard;
