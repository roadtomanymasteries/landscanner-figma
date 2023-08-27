import { FunctionComponent, useCallback } from "react";
import { Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropertySearchForm from "../components/PropertySearchForm";
import PopularSuburbsContainer1 from "../components/PopularSuburbsContainer1";
import FeaturedArticlesContainer from "../components/FeaturedArticlesContainer";

const Landscanner = styled.div`
  position: relative;
  line-height: 155%;
  cursor: pointer;
`;
const ArrowBackSharp = styled(Icon)``;
const Person = styled(IconButton)`
  position: relative;
`;
const Login = styled.div`
  position: relative;
  line-height: 155%;
`;
const PersonParent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  font-size: var(--font-size-base);
`;
const LandscannerParent = styled.div`
  width: 77.5rem;
  height: 4rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 420px) {
    flex-direction: row;
    gap: var(--gap-base);
    align-items: center;
    justify-content: space-between;
  }
`;
const Navbar = styled.div`
  background-color: var(--landscanner-primary-main);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 120rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 4;
`;
const Image2Icon = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 40rem;
  flex-shrink: 0;
  object-fit: cover;
`;
const Image2Wrapper = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--gray-gray-0);
  width: 77.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const FrameParent = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--gray-gray-0);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-61xl) 0rem;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  z-index: 2;
`;
const LandscannerPtyLtd = styled.div`
  position: relative;
  line-height: 155%;
  font-weight: 500;
`;
const LandscannerPtyLtdWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const GiveFeedbackParent = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const FrameGroup = styled.div`
  width: 77.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-21xl) 0rem;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  z-index: 1;
  font-size: var(--font-size-base);
`;
const SearchAndResearch = styled.div`
  position: relative;
  line-height: 155%;
  font-weight: 300;
`;
const SearchAndResearchRealEstatParent = styled.div`
  width: 77.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-3xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  z-index: 0;
  font-size: var(--font-size-xs);
`;
const HomepageRoot = styled.div`
  position: relative;
  background: linear-gradient(221.87deg, #5187b9, #0d589d);
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0rem 0rem var(--padding-21xl);
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--white);
  font-family: var(--font-poppins);
`;
const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLandscannerTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <HomepageRoot>
      <Navbar>
        <LandscannerParent>
          <Landscanner onClick={onLandscannerTextClick}>
            Landscanner
          </Landscanner>
          <PersonParent>
            <Person color="primary">
              <ArrowBackSharp>arrow_back_sharp</ArrowBackSharp>
            </Person>
            <Login>Login</Login>
            <Person color="primary">
              <ArrowBackSharp>arrow_back_ios_sharp</ArrowBackSharp>
            </Person>
          </PersonParent>
        </LandscannerParent>
      </Navbar>
      <PropertySearchForm />
      <FrameParent>
        <Image2Wrapper>
          <Image2Icon alt="" src="/image-2@2x.png" />
        </Image2Wrapper>
        <PopularSuburbsContainer1 />
        <FeaturedArticlesContainer />
      </FrameParent>
      <FrameGroup>
        <LandscannerPtyLtdWrapper>
          <LandscannerPtyLtd>Landscanner Pty Ltd</LandscannerPtyLtd>
        </LandscannerPtyLtdWrapper>
        <GiveFeedbackParent>
          <LandscannerPtyLtd>Give feedback</LandscannerPtyLtd>
          <LandscannerPtyLtd>Help</LandscannerPtyLtd>
          <LandscannerPtyLtd>Privacy settings</LandscannerPtyLtd>
          <LandscannerPtyLtd>Log in</LandscannerPtyLtd>
        </GiveFeedbackParent>
        <GiveFeedbackParent>
          <LandscannerPtyLtd>Cookie policy</LandscannerPtyLtd>
          <LandscannerPtyLtd>Privacy policy</LandscannerPtyLtd>
          <LandscannerPtyLtd>Terms of service</LandscannerPtyLtd>
          <LandscannerPtyLtd>Company details</LandscannerPtyLtd>
        </GiveFeedbackParent>
        <GiveFeedbackParent>
          <LandscannerPtyLtd>Explore</LandscannerPtyLtd>
          <LandscannerPtyLtd>Company</LandscannerPtyLtd>
          <LandscannerPtyLtd>Partners</LandscannerPtyLtd>
          <LandscannerPtyLtd>Properties</LandscannerPtyLtd>
          <LandscannerPtyLtd>International sites</LandscannerPtyLtd>
        </GiveFeedbackParent>
      </FrameGroup>
      <SearchAndResearchRealEstatParent>
        <SearchAndResearch>
          Search and research real estates across all sites and agencies in
          Australia.
        </SearchAndResearch>
        <SearchAndResearch>(c) Landscanner Pty Ltd 2023</SearchAndResearch>
      </SearchAndResearchRealEstatParent>
    </HomepageRoot>
  );
};

export default Homepage;
