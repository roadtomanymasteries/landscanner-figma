import { FunctionComponent } from "react";
import styled from "styled-components";
import TypeGarageSizeMedium from "./TypeGarageSizeMedium";

const LivingstoneStreet = styled.div`
  position: relative;
  line-height: 155%;
  font-weight: 500;
`;
const IvanhoeVic3079 = styled.div`
  position: relative;
  font-size: var(--font-size-9xl);
  line-height: 155%;
`;
const LivingstoneStreetParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const PropertyAttributeParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Div = styled.div`
  position: relative;
  font-size: var(--font-size-21xl);
  line-height: 155%;
  font-weight: 500;
`;
const FrameParentRoot = styled.div`
  width: 77.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  text-align: left;
  font-size: var(--font-size-41xl);
  color: var(--landscanner-text-main);
  font-family: var(--font-poppins);
`;
const AddressDetailsContainer: FunctionComponent = () => {
  return (
    <FrameParentRoot>
      <LivingstoneStreetParent>
        <LivingstoneStreet>1/51 Livingstone Street</LivingstoneStreet>
        <IvanhoeVic3079>Ivanhoe VIC 3079</IvanhoeVic3079>
      </LivingstoneStreetParent>
      <PropertyAttributeParent>
        <TypeGarageSizeMedium
          itemCode="/king-bed1.svg"
          typeGarageSizeMediumPosition="unset"
          directionsCarIconWidth="2rem"
          directionsCarIconHeight="2rem"
          divColor="#041a2f"
        />
        <TypeGarageSizeMedium
          itemCode="/bathtub1.svg"
          typeGarageSizeMediumPosition="unset"
          directionsCarIconWidth="2rem"
          directionsCarIconHeight="2rem"
          divColor="#041a2f"
        />
        <TypeGarageSizeMedium
          itemCode="/directions-car1.svg"
          typeGarageSizeMediumPosition="unset"
          directionsCarIconWidth="2rem"
          directionsCarIconHeight="2rem"
          divColor="#041a2f"
        />
      </PropertyAttributeParent>
      <Div>$940,000 - $950,000</Div>
    </FrameParentRoot>
  );
};

export default AddressDetailsContainer;
