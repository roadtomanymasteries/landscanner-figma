import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import AddressDetailsContainer from "../components/AddressDetailsContainer";
import styled from "styled-components";
import PhotosDynamicContainer from "../components/PhotosDynamicContainer";
import CardHeader from "../components/CardHeader";
import VariantHeading6 from "../components/VariantHeading6";
import UtilitiesCard from "../components/UtilitiesCard";
import TitleInformationCard from "../components/TitleInformationCard";
import CrimeStatCard from "../components/CrimeStatCard";
import PropertyMarketCard from "../components/PropertyMarketCard";
import SideContentContainer from "../components/SideContentContainer";

const FrameChild = styled.img`
  flex: 1;
  position: relative;
  border-radius: var(--br-5xs);
  max-width: 100%;
  overflow: hidden;
  height: 37.5rem;
  object-fit: cover;
`;
const RectangleParent = styled.div`
  width: 77.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameItem = styled.img`
  align-self: stretch;
  position: relative;
  border-radius: var(--br-5xs);
  max-width: 100%;
  overflow: hidden;
  height: 18.75rem;
  flex-shrink: 0;
  object-fit: cover;
`;
const BlankLine = styled.p`
  margin: 0;
`;
const OfOnly2Container = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 155%;
`;
const Collapse = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 155%;
  font-weight: 300;
  color: var(--landscanner-text-light);
  text-align: center;
`;
const OfOnly2AndNoOwnersCorporParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
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
  font-size: var(--font-size-base);
  color: var(--landscanner-text-main);
`;
const Saturday10thJune = styled.div`
  position: relative;
  font-weight: 500;
`;
const Pm = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  color: var(--landscanner-text-light);
`;
const Saturday10thJuneParent = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const Button1 = styled(Button)``;
const FrameContainer = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const LotplanNumber = styled.div`
  align-self: stretch;
  position: relative;
`;
const ResidentialZone = styled.div`
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
const Card2 = styled.div`
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
const Image11Icon = styled.img`
  position: relative;
  width: 35.5rem;
  height: 28.38rem;
  object-fit: cover;
`;
const Image15Icon = styled.img`
  position: relative;
  width: 35.44rem;
  height: 31.06rem;
  object-fit: cover;
`;
const Image12Icon = styled.img`
  position: relative;
  width: 35.25rem;
  height: 28.63rem;
  object-fit: cover;
`;
const Image13Icon = styled.img`
  position: relative;
  width: 35.38rem;
  height: 9.44rem;
  object-fit: cover;
`;
const Card3 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 49.75rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const TypographyParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const ScienceLabs = styled.li`
  margin-bottom: false;
`;
const Library = styled.li``;
const ScienceLabsSportsFieldLibr = styled.ul`
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
const ScienceLabsSportsFieldLibr1 = styled.ul`
  margin: 0;
  padding-left: false;
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Location1 = styled.div`
  align-self: stretch;
  position: relative;
  color: var(--landscanner-text-light);
`;
const LocationParent = styled.div`
  width: 15rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: left;
`;
const WalkParent = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Drive = styled.div`
  position: relative;
`;
const DriveWrapper = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: var(--landscanner-text-light);
`;
const FrameParent3 = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const PublicTransportWrapper = styled.div`
  width: 12.38rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: left;
  color: var(--landscanner-text-light);
`;
const FrameParent2 = styled.div`
  width: 51rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FindDestination = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 155%;
  color: var(--landscanner-text-light);
`;
const CardWrapper = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  color: var(--color-black);
`;
const LocalInformation = styled.div`
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
  font-size: var(--font-size-13xl);
  color: var(--landscanner-text-main);
`;
const PropertyInformation27 = styled.div`
  flex: 1;
  overflow: hidden;
`;
const Card6 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 15.69rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const PropertyInformationWrapper = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const PropertyInformationParent11 = styled.div`
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
const Card10 = styled.div`
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
  font-size: var(--font-size-13xl);
  color: var(--landscanner-text-main);
`;
const AustralianBureauOf = styled.div`
  position: absolute;
  width: 83.38%;
  top: -8.33%;
  left: 0.84%;
  font-weight: 500;
  display: flex;
  align-items: center;
`;
const Typography4 = styled.div`
  flex: 1;
  position: relative;
  height: 3.75rem;
`;
const CardChild = styled.div`
  align-self: stretch;
  overflow: hidden;
`;
const Card16 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 11.38rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xl);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const RectangleGroup = styled.div`
  align-self: stretch;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0rem 0rem var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const FrameGroup = styled.div`
  width: 77.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0rem 0rem var(--padding-5xs);
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const FrameParent = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: var(--br-5xs);
  background-color: var(--gray-gray-0);
  width: 117.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-61xl) 0rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-21xl);
`;
const ContainerChild = styled.div`
  position: absolute;
  top: 161.75rem;
  left: 0rem;
  background: linear-gradient(0deg, #fff, rgba(255, 255, 255, 0));
  width: 117.5rem;
  height: 460.5rem;
  overflow: hidden;
`;
const ContainerRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 622.25rem;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-3xs);
  color: var(--landscanner-text-light);
  font-family: var(--font-poppins);
`;
const Container: FunctionComponent = () => {
  return (
    <ContainerRoot>
      <FrameParent>
        <AddressDetailsContainer />
        <RectangleParent>
          <FrameChild alt="" src="/rectangle-2@2x.png" />
          <PhotosDynamicContainer />
        </RectangleParent>
        <FrameGroup>
          <RectangleGroup>
            <FrameItem alt="" src="/rectangle-7@2x.png" />
            <Card>
              <CardHeader
                propertyInfoText="Description"
                propDisplay="flex"
                propAlignItems="center"
                propWidth="15.08rem"
                propFlexShrink="0"
                propLineHeight="unset"
              />
              <OfOnly2AndNoOwnersCorporParent>
                <OfOnly2Container>
                  <BlankLine>
                    1 of only 2 and no owners corporation fees
                  </BlankLine>
                  <BlankLine>&nbsp;</BlankLine>
                  <BlankLine>
                    Walk-to-everything lifestyle ease, previously renovated with
                    contemporary flair, this spacious villa-style unit is a
                    haven of modern comfort in the heart of beloved Ivanhoe. As
                    the first of just two in this private grouping, this is an
                    ideal choice for first home buyers, young families,
                    downsizers, or investors seeking peace and security within a
                    stroll of all amenities.
                  </BlankLine>
                  <BlankLine>&nbsp;</BlankLine>
                  <BlankLine>
                    Floorboards pair beautifully with the painted brick walls of
                    the open plan living and dining zones, each enjoying plenty
                    of natural light as they adjoin the gorgeous kitchen with
                    quality appliances, stylish cabinetry and stone benchtops
                    with matching splashbacks and a waterfall-edge breakfast
                    bar. All three good-sized bedrooms are comfortably carpeted
                    with their own built-in robes, each accommodated by the
                    sleek central bathroom with bath and shower, floating
                    mirrored vanity and separate WC and laundry rooms. Extras
                    include linen storage, ducted heating and split system
                    cooling throughout.
                  </BlankLine>
                  <BlankLine>&nbsp;</BlankLine>
                  <BlankLine>
                    Dine with friends and family on the paved alfresco patio,
                    leading down to the generous backyard with lush grassed
                    lawns that are perfect for lounging, gardening or watching
                    over the kids as they run and play. A single lock-up garage
                    with additional car space at rear.
                  </BlankLine>
                  <BlankLine>&nbsp;</BlankLine>
                  <BlankLine>
                    Walk just footsteps to Nellie Ibbott Reserve with the
                    sprawling Darebin Parklands just beyond, leading straight
                    onto the Darebin Creek Trail for serene walking or cycling.
                    Ivanhoe Primary is just down the road, with only minutes to
                    esteemed public and private schools available throughout the
                    area.
                  </BlankLine>
                  <BlankLine>&nbsp;</BlankLine>
                  <BlankLine>
                    Stroll just five minutes into Ivanhoe Village for shops and
                    boutiques, trendy cafes and restaurants, major supermarkets
                    and Ivanhoe Station, with easy travel down to the CBD or up
                    to busy central Heidelberg for Austin/Mercy Hospital,
                    Warringal Shopping Centre and Burgundy Street shops and
                    cafes.
                  </BlankLine>
                </OfOnly2Container>
                <Collapse>Collapse</Collapse>
              </OfOnly2AndNoOwnersCorporParent>
            </Card>
            <Card>
              <CardHeader
                propertyInfoText="Inspection times"
                propDisplay="flex"
                propAlignItems="center"
                propWidth="15.08rem"
                propFlexShrink="0"
                propLineHeight="unset"
              />
              <FrameContainer>
                <Saturday10thJuneParent>
                  <Saturday10thJune>Saturday 10th June</Saturday10thJune>
                  <Pm>12:00 - 12:30 PM</Pm>
                </Saturday10thJuneParent>
                <Button1 variant="outlined" color="primary">
                  Add to plan
                </Button1>
              </FrameContainer>
              <FrameContainer>
                <Saturday10thJuneParent>
                  <Saturday10thJune>Saturday 17th June</Saturday10thJune>
                  <Pm>12:15 - 12:45 PM</Pm>
                </Saturday10thJuneParent>
                <Button1 variant="outlined" color="primary">
                  Add to plan
                </Button1>
              </FrameContainer>
              <FrameContainer>
                <Saturday10thJuneParent>
                  <Saturday10thJune>Saturday 24th June</Saturday10thJune>
                  <Pm>12:15 - 12:45 PM</Pm>
                </Saturday10thJuneParent>
                <Button1 variant="outlined" color="primary">
                  Add to plan
                </Button1>
              </FrameContainer>
            </Card>
            <Card2>
              <CardHeader propertyInfoText="Property information" />
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Lot/Plan number</LotplanNumber>
                  <ResidentialZone>Lot. 1 SP25302</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Council</LotplanNumber>
                  <ResidentialZone>Banyule</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Zones</LotplanNumber>
                  <ResidentialZone>
                    GRZ - General residential zone - schedule 2
                  </ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Council property number</LotplanNumber>
                  <ResidentialZone>367102</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Year built</LotplanNumber>
                  <ResidentialZone>1980</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Floor area</LotplanNumber>
                  <ResidentialZone>104sqm</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Wall material</LotplanNumber>
                  <ResidentialZone>Brick veneer</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Roof material</LotplanNumber>
                  <ResidentialZone>Concrete tile</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
            </Card2>
            <Card3>
              <CardHeader
                propertyInfoText="Visual Insights"
                propDisplay="flex"
                propAlignItems="center"
                propWidth="15.08rem"
                propFlexShrink="0"
                propLineHeight="unset"
              />
              <Image11Icon alt="" src="/image-11@2x.png" />
              <Image15Icon alt="" src="/image-15@2x.png" />
              <Image12Icon alt="" src="/image-12@2x.png" />
              <Image13Icon alt="" src="/image-13@2x.png" />
              <Image13Icon alt="" src="/image-14@2x.png" />
            </Card3>
            <Card2>
              <CardHeader
                propertyInfoText="Local schools"
                propDisplay="flex"
                propAlignItems="center"
                propWidth="15.08rem"
                propFlexShrink="0"
                propLineHeight="unset"
              />
              <TypographyParent>
                <VariantHeading6
                  sectionHeading="Macleod Primary School"
                  variantHeading6Position="relative"
                  variantHeading6Width="unset"
                  variantHeading6Height="1.5rem"
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
                  heading6FontSize="16px"
                  heading6Color="#041a2f"
                  heading6Display="inline-block"
                  heading6AlignItems="unset"
                  heading6Width="unset"
                  heading6FlexShrink="unset"
                  heading6LineHeight="unset"
                />
                <PropertyInformationParent>
                  <PropertyInformation>
                    <LotplanNumber>School performance score</LotplanNumber>
                    <ResidentialZone>45206</ResidentialZone>
                  </PropertyInformation>
                  <PropertyInformation>
                    <LotplanNumber>Student/Teacher ratio</LotplanNumber>
                    <ResidentialZone>23:1</ResidentialZone>
                  </PropertyInformation>
                  <PropertyInformation>
                    <LotplanNumber>Distance</LotplanNumber>
                    <ResidentialZone>5 mins</ResidentialZone>
                  </PropertyInformation>
                  <PropertyInformation>
                    <LotplanNumber>Better Education Ranking</LotplanNumber>
                    <ResidentialZone>A-</ResidentialZone>
                  </PropertyInformation>
                </PropertyInformationParent>
              </TypographyParent>
              <TypographyParent>
                <VariantHeading6
                  sectionHeading="Macleod Secondary School"
                  variantHeading6Position="relative"
                  variantHeading6Width="unset"
                  variantHeading6Height="1.5rem"
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
                  heading6FontSize="16px"
                  heading6Color="#041a2f"
                  heading6Display="inline-block"
                  heading6AlignItems="unset"
                  heading6Width="unset"
                  heading6FlexShrink="unset"
                  heading6LineHeight="unset"
                />
                <PropertyInformationParent>
                  <PropertyInformation>
                    <LotplanNumber>Facilities</LotplanNumber>
                    <Lot1Sp25302Container>
                      <ScienceLabsSportsFieldLibr>
                        <ScienceLabs>Science Labs</ScienceLabs>
                        <ScienceLabs>Sports Field</ScienceLabs>
                        <Library>Library</Library>
                      </ScienceLabsSportsFieldLibr>
                    </Lot1Sp25302Container>
                  </PropertyInformation>
                  <PropertyInformation>
                    <LotplanNumber>Facilities</LotplanNumber>
                    <Lot1Sp25302Container>
                      <ScienceLabsSportsFieldLibr1>
                        <ScienceLabs>Science labs</ScienceLabs>
                        <ScienceLabs>Sports field</ScienceLabs>
                        <Library>Library</Library>
                      </ScienceLabsSportsFieldLibr1>
                    </Lot1Sp25302Container>
                  </PropertyInformation>
                  <PropertyInformation>
                    <LotplanNumber>Sports Programs</LotplanNumber>
                    <Lot1Sp25302Container>
                      <ScienceLabsSportsFieldLibr>
                        <ScienceLabs>Football</ScienceLabs>
                        <ScienceLabs>Tennis</ScienceLabs>
                        <Library>Athletics</Library>
                      </ScienceLabsSportsFieldLibr>
                    </Lot1Sp25302Container>
                  </PropertyInformation>
                  <PropertyInformation>
                    <LotplanNumber>School performance score</LotplanNumber>
                    <ResidentialZone>45444</ResidentialZone>
                  </PropertyInformation>
                  <PropertyInformation>
                    <LotplanNumber>Better Education Ranking</LotplanNumber>
                    <ResidentialZone>A+</ResidentialZone>
                  </PropertyInformation>
                </PropertyInformationParent>
                <FrameWrapper>
                  <PropertyInformationParent>
                    <PropertyInformation>
                      <LotplanNumber>After School Programs</LotplanNumber>
                      <ResidentialZone>Yes</ResidentialZone>
                    </PropertyInformation>
                    <PropertyInformation>
                      <LotplanNumber>Special Education Programs</LotplanNumber>
                      <ResidentialZone>Yes</ResidentialZone>
                    </PropertyInformation>
                    <PropertyInformation>
                      <LotplanNumber>Student/Teacher Ratio</LotplanNumber>
                      <ResidentialZone>23:1</ResidentialZone>
                    </PropertyInformation>
                  </PropertyInformationParent>
                </FrameWrapper>
              </TypographyParent>
            </Card2>
            <UtilitiesCard
              section32SummaryText="Section 32 summary"
              hasCaveatElectricitySuppl="Has caveat"
              utilityType="No"
              proposalTitle="VicRoads proposal"
              utilityCompanyName="None"
              ectControlText="ECT control"
              bankNameAndAmount="Commonwealth Bank of Australia"
              siteValueText="Site value"
              propertyValueText="$730,000"
            />
            <CardWrapper>
              <Card2>
                <CardHeader
                  propertyInfoText="Travel times"
                  propDisplay="flex"
                  propAlignItems="center"
                  propWidth="15.08rem"
                  propFlexShrink="0"
                  propLineHeight="unset"
                />
                <FrameParent2>
                  <LocationParent>
                    <Location1>Location</Location1>
                    <LotplanNumber>Ivanhoe primary school</LotplanNumber>
                    <LotplanNumber>Ivanhoe train station</LotplanNumber>
                    <LotplanNumber>Coles Ivanhoe</LotplanNumber>
                    <LotplanNumber>
                      Nino Early Learning Adventures Ivanhoe
                    </LotplanNumber>
                  </LocationParent>
                  <WalkParent>
                    <Location1>Walk</Location1>
                    <LotplanNumber>5 mins</LotplanNumber>
                    <LotplanNumber>10 mins</LotplanNumber>
                    <LotplanNumber>4 mins</LotplanNumber>
                    <LotplanNumber>4 mins</LotplanNumber>
                  </WalkParent>
                  <FrameParent3>
                    <DriveWrapper>
                      <Drive>Drive</Drive>
                    </DriveWrapper>
                    <LotplanNumber>3 mins</LotplanNumber>
                    <LotplanNumber>4 mins</LotplanNumber>
                    <LotplanNumber>2 mins</LotplanNumber>
                    <LotplanNumber>2 mins</LotplanNumber>
                  </FrameParent3>
                  <WalkParent>
                    <PublicTransportWrapper>
                      <Drive>Public transport</Drive>
                    </PublicTransportWrapper>
                    <LotplanNumber>2 mins</LotplanNumber>
                    <LotplanNumber>5 mins</LotplanNumber>
                    <LotplanNumber>2 mins</LotplanNumber>
                    <LotplanNumber>2 mins</LotplanNumber>
                  </WalkParent>
                </FrameParent2>
                <FindDestination>Find destination</FindDestination>
              </Card2>
            </CardWrapper>
            <Card6>
              <CardHeader1>
                <Typography>
                  <LocalInformation>Local Information</LocalInformation>
                </Typography>
                <CloseIcon alt="" src="/close.svg" />
              </CardHeader1>
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Planning Regulations</LotplanNumber>
                  <ResidentialZone>Residential Zone</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Council Tax Band</LotplanNumber>
                  <ResidentialZone>Band D</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Proposed Developments</LotplanNumber>
                  <ResidentialZone>
                    Proposed Development at 47 Dunstan Street
                  </ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Tree Preservation Orders</LotplanNumber>
                  <ResidentialZone>TPO on Oak tree in garden</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Local Facilities</LotplanNumber>
                  <ResidentialZone>
                    Local library 0.5 miles away
                  </ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Community Events</LotplanNumber>
                  <ResidentialZone>
                    Weekly farmers’ market in local park
                  </ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Local Initiatives</LotplanNumber>
                  <ResidentialZone>
                    New cycle lanes being introduced in 2023
                  </ResidentialZone>
                </PropertyInformation>
                <PropertyInformation27 />
              </PropertyInformationParent>
            </Card6>
            <Card2>
              <CardHeader
                propertyInfoText="Internet and broadband"
                propDisplay="flex"
                propAlignItems="center"
                propWidth="15.08rem"
                propFlexShrink="0"
                propLineHeight="unset"
              />
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>NBN availability</LotplanNumber>
                  <ResidentialZone>Available</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Internet speeds (average)</LotplanNumber>
                  <ResidentialZone>100 Mbps</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
            </Card2>
            <Card2>
              <CardHeader1>
                <Typography>
                  <LocalInformation>
                    Public Transport Proximity
                  </LocalInformation>
                </Typography>
                <CloseIcon alt="" src="/close.svg" />
              </CardHeader1>
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Proximity to Metro Track</LotplanNumber>
                  <ResidentialZone>0.5km to nearest track</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Metro Line</LotplanNumber>
                  <ResidentialZone>Hurstbridge Line</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Train Frequency</LotplanNumber>
                  <ResidentialZone>
                    Every 15 minutes during peak
                  </ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Night Services</LotplanNumber>
                  <ResidentialZone>No</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Planned Works or Changes</LotplanNumber>
                  <ResidentialZone>None</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Nearest Bus Stop</LotplanNumber>
                  <ResidentialZone>{`Dunstan St `}</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Direct Routes</LotplanNumber>
                  <ResidentialZone>Melbourne CBD</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Ticket Zones</LotplanNumber>
                  <ResidentialZone>Zone 2</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Accessibility</LotplanNumber>
                  <ResidentialZone>Wheelchair accessible</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Bike Storage</LotplanNumber>
                  <ResidentialZone>Yes</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Parking</LotplanNumber>
                  <ResidentialZone>Yes, 100 spaces</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Service Disruptions</LotplanNumber>
                  <ResidentialZone>None current</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
            </Card2>
            <TitleInformationCard
              propertyData="Heritage Data"
              propertyHistoryData="Property History"
              propertyDetails="Built in the 1950s"
              propertyHeritageRestricti="Heritage Restrictions"
              propertyHeritageRestricti2="No heritage restrictions identified"
              propertyTrainFrequency="Train Frequency"
              trainFrequencyText="Every 15 minutes during peak"
            />
            <TitleInformationCard
              propertyData="Title Information"
              propertyHistoryData="Title Boundaries"
              propertyDetails="As per survey plan"
              propertyHeritageRestricti="Ownership History"
              propertyHeritageRestricti2="Two previous owners"
              propertyTrainFrequency="Liens or Charges"
              trainFrequencyText="None"
            />
            <Card2>
              <CardHeader1>
                <Typography>
                  <LocalInformation>Vendor’s Statement</LocalInformation>
                </Typography>
                <CloseIcon alt="" src="/close.svg" />
              </CardHeader1>
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Zoning</LotplanNumber>
                  <ResidentialZone>Residential</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Outgoings</LotplanNumber>
                  <ResidentialZone>
                    Council rates $1,.500 p.a., water rates $800 p.a.
                  </ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Seller Disclosures</LotplanNumber>
                  <ResidentialZone>None</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Planning Restrictions</LotplanNumber>
                  <ResidentialZone>None</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Building Approvals</LotplanNumber>
                  <ResidentialZone>Extension approved in 2019</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation27 />
                <PropertyInformation27 />
                <PropertyInformation27 />
              </PropertyInformationParent>
            </Card2>
            <Card10>
              <PropertyInformationWrapper>
                <Typography>
                  <LocalInformation>Solar Orientation</LocalInformation>
                </Typography>
                <CloseIcon alt="" src="/close.svg" />
              </PropertyInformationWrapper>
              <PropertyInformationParent11>
                <PropertyInformation>
                  <LotplanNumber>Sun Position</LotplanNumber>
                  <ResidentialZone>
                    Sunlight duration in summer - 14 hours
                  </ResidentialZone>
                </PropertyInformation>
                <PropertyInformation27 />
                <PropertyInformation27 />
                <PropertyInformation27 />
              </PropertyInformationParent11>
            </Card10>
            <Card2>
              <CardHeader1>
                <CloseIcon alt="" src="/close.svg" />
                <Typography4>
                  <AustralianBureauOf>
                    Australian Bureau of Statistics (ABS)
                  </AustralianBureauOf>
                </Typography4>
              </CardHeader1>
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Average Income</LotplanNumber>
                  <ResidentialZone>$70,000</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>{`Education Level `}</LotplanNumber>
                  <ResidentialZone>40% with tertiary education</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Predominant Industry</LotplanNumber>
                  <ResidentialZone>Healthcare</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Median Rent</LotplanNumber>
                  <ResidentialZone>$400 per week</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Population Growth</LotplanNumber>
                  <ResidentialZone>1.2% annually</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation27 />
                <PropertyInformation27 />
                <PropertyInformation27 />
              </PropertyInformationParent>
            </Card2>
            <Card2>
              <CardHeader
                propertyInfoText={`Environment & Climate`}
                propDisplay="flex"
                propAlignItems="center"
                propWidth="15.08rem"
                propFlexShrink="0"
                propLineHeight="unset"
              />
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Average Temperature</LotplanNumber>
                  <ResidentialZone>20°C</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Average Rainfall</LotplanNumber>
                  <ResidentialZone>70mm per month</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Common Weather Hazards</LotplanNumber>
                  <ResidentialZone>Bushfires in summer</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Air Quality Index</LotplanNumber>
                  <ResidentialZone>Good</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Sunniest Month</LotplanNumber>
                  <ResidentialZone>January</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Risk of Flooding</LotplanNumber>
                  <ResidentialZone>High</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Average Pollen Forecast</LotplanNumber>
                  <ResidentialZone>Extremely High</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>UV Index</LotplanNumber>
                  <ResidentialZone>Moderate</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Wettest Month</LotplanNumber>
                  <ResidentialZone>August</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber />
                  <ResidentialZone />
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber />
                  <ResidentialZone />
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber />
                  <ResidentialZone />
                </PropertyInformation>
              </PropertyInformationParent>
            </Card2>
            <UtilitiesCard
              section32SummaryText="Utilities"
              hasCaveatElectricitySuppl="Electricity Supplier"
              utilityType="AGL"
              proposalTitle="Gas Supplier"
              utilityCompanyName="Origin Energy"
              ectControlText="Average Utility Bill (Monthly)"
              bankNameAndAmount="$150"
              siteValueText="Smart Meter Availability"
              propertyValueText="Yes"
              propLineHeight="unset"
            />
            <CrimeStatCard
              informationTitle="Public Transport Information"
              locationInfo="Nearest Bus Stop"
              streetName="Dunstan Street"
              locationSubtitle="Nearest Train Station"
              locationCode="Macleod"
              serviceFrequency="Frequency of Service"
              crimeFrequency="Every 20 mins (peak)"
              routeLabels="Direct Routes"
              locationCodeText="Melbourne CBD"
              dataLabels="Ticket Zones"
              crimeRateZoneCrimeRateDes="Zone 2"
            />
            <PropertyMarketCard
              heading5="Local Property Market"
              lotPlanNumber="Last Auction Price (AUD)"
              lot1SP25302="$750,000"
              lotPlanNumber1="Average Auction Price in Area"
              lot1SP253021="$700,000"
              lotPlanNumber2="Number of Bidders"
              lot1SP253022="5"
              lotPlanNumber3="Auction Clearance Rate"
              lot1SP253023="80%"
              lotPlanNumber4="Capital Growth Average (Annual)"
              lot1SP253024="3%"
            />
            <CrimeStatCard
              informationTitle="Crime Statistics"
              locationInfo="Total Crimes Last Year"
              streetName="250"
              locationSubtitle="Crime Rate (per 1000 residents)"
              locationCode="20"
              serviceFrequency="Common Crimes"
              crimeFrequency="Burglary"
              serviceTimeOffPeak="Vehicle theft"
              routeLabels="Violent Crimes (Past Year)"
              locationCodeText="20"
              dataLabels="Trends"
              crimeRateZoneCrimeRateDes="Decreasing crime rate"
            />
            <Card2>
              <CardHeader
                propertyInfoText="Noise Levels and Flight Paths"
                propDisplay="flex"
                propAlignItems="center"
                propWidth="15.08rem"
                propFlexShrink="0"
                propLineHeight="unset"
              />
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Flight Path</LotplanNumber>
                  <ResidentialZone>Not under a flight path</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Noise Level</LotplanNumber>
                  <ResidentialZone>Minimal noise expected</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Frequency of Overhead Flights</LotplanNumber>
                  <ResidentialZone>Infrequent</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
            </Card2>
            <Card2>
              <CardHeader
                propertyInfoText="Rental Potential"
                propDisplay="flex"
                propAlignItems="center"
                propWidth="15.08rem"
                propFlexShrink="0"
                propLineHeight="unset"
              />
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>
                    Rental Rates (Average weekly in area, AUD)
                  </LotplanNumber>
                  <ResidentialZone>$600</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Occupancy Levels</LotplanNumber>
                  <ResidentialZone>60%</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Guest Reviews</LotplanNumber>
                  <ResidentialZone>4.5*</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber />
                  <ResidentialZone />
                </PropertyInformation>
              </PropertyInformationParent>
            </Card2>
            <Card2>
              <CardHeader
                propertyInfoText="Community and Demographics"
                propDisplay="flex"
                propAlignItems="center"
                propWidth="15.08rem"
                propFlexShrink="0"
                propLineHeight="unset"
              />
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Local Population</LotplanNumber>
                  <ResidentialZone>10223</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Median Age</LotplanNumber>
                  <ResidentialZone>35</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Employment Rate</LotplanNumber>
                  <ResidentialZone>0.7</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Unemployment Rate</LotplanNumber>
                  <ResidentialZone>0.05</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
              <PropertyInformationWrapper>
                <PropertyInformation>
                  <LotplanNumber>Average Income (AUD/Year)</LotplanNumber>
                  <ResidentialZone>$70,000</ResidentialZone>
                </PropertyInformation>
              </PropertyInformationWrapper>
            </Card2>
            <Card16>
              <CardHeader
                propertyInfoText={`Property Profile & Restrictive Covenants`}
                propDisplay="inline-block"
                propAlignItems="unset"
                propWidth="unset"
                propFlexShrink="unset"
                propLineHeight="unset"
              />
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Restrictive Covenant</LotplanNumber>
                  <ResidentialZone>None</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Easements</LotplanNumber>
                  <ResidentialZone>
                    Drainage easement on eastern boundary
                  </ResidentialZone>
                </PropertyInformation>
              </PropertyInformationParent>
              <CardChild />
            </Card16>
            <Card2>
              <CardHeader
                propertyInfoText="Walkability and Bikeability"
                propDisplay="flex"
                propAlignItems="center"
                propWidth="15.08rem"
                propFlexShrink="0"
                propLineHeight="unset"
              />
              <PropertyInformationParent>
                <PropertyInformation>
                  <LotplanNumber>Walkability Score (100 is best)</LotplanNumber>
                  <ResidentialZone>70</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>Bikeability Score (100 is best)</LotplanNumber>
                  <ResidentialZone>65</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber>
                    Transit Options Score (100 is best)
                  </LotplanNumber>
                  <ResidentialZone>75</ResidentialZone>
                </PropertyInformation>
                <PropertyInformation>
                  <LotplanNumber />
                  <ResidentialZone />
                </PropertyInformation>
              </PropertyInformationParent>
            </Card2>
          </RectangleGroup>
          <SideContentContainer />
        </FrameGroup>
      </FrameParent>
      <ContainerChild />
    </ContainerRoot>
  );
};

export default Container;
