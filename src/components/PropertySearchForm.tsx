import { FunctionComponent } from "react";
import {
  Icon,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  Button,
} from "@mui/material";
import styled from "styled-components";

const QuicklyScanFor = styled.div`
  position: relative;
  line-height: 155%;
  font-weight: 500;
`;
const AlarmSharp = styled(Icon)``;
const ChatgptButton = styled(IconButton)``;
const Textfield1 = styled(TextField)`
  border: none;
  background-color: transparent;
  flex: 1;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const Price = styled(InputLabel)``;
const Price1 = styled(MenuItem)``;
const Select1 = styled(Select)``;
const Formhelpertext1 = styled(FormHelperText)``;
const Textfield11 = styled(FormControl)`
  flex: 1;
  @media screen and (max-width: 420px) {
    flex: unset;
    align-self: stretch;
  }
`;
const TextfieldParent = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  @media screen and (max-width: 960px) {
    flex-direction: row;
    gap: var(--gap-9xs);
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
    gap: var(--gap-9xs);
    align-items: flex-start;
    justify-content: flex-start;
    flex: unset;
    align-self: stretch;
  }
`;
const Button1 = styled(Button)`
  align-self: stretch;
`;
const ChatgptButtonParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  @media screen and (max-width: 420px) {
    flex-direction: column;
    gap: var(--gap-5xl);
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
const QuicklyScanForAllAvailableParent = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-29xl) 0rem;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Searchbar = styled.div`
  width: 77.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xl) 0rem;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SearchbarWrapperRoot = styled.div`
  width: 120rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 3;
  text-align: left;
  font-size: var(--font-size-13xl);
  color: var(--white);
  font-family: var(--font-poppins);
`;
const PropertySearchForm: FunctionComponent = () => {
  return (
    <SearchbarWrapperRoot>
      <Searchbar>
        <QuicklyScanForAllAvailableParent>
          <QuicklyScanFor>
            Quickly scan for all available properties
          </QuicklyScanFor>
          <ChatgptButtonParent>
            <ChatgptButton color="primary">
              <AlarmSharp>alarm_sharp</AlarmSharp>
            </ChatgptButton>
            <TextfieldParent>
              <Textfield1
                color="primary"
                variant="outlined"
                defaultValue="Ivanhoe"
                type="text"
                label="Suburbs"
                placeholder="Placeholder"
                size="medium"
                margin="none"
              />
              <Textfield11 variant="outlined">
                <Price color="primary">Price</Price>
                <Select1
                  color="primary"
                  defaultValue="$800K - $1M"
                  size="medium"
                  label="Price"
                >
                  <Price1 value="Price">Price</Price1>
                  <Price1 value="$800K - $1M">$800K - $1M</Price1>
                </Select1>
                <Formhelpertext1 />
              </Textfield11>
              <Textfield11 variant="outlined">
                <Price color="primary">Bedrooms</Price>
                <Select1
                  color="primary"
                  defaultValue="3+"
                  size="medium"
                  label="Bedrooms"
                >
                  <Price1 value="Bedrooms">Bedrooms</Price1>
                  <Price1 value="3+">3+</Price1>
                </Select1>
                <Formhelpertext1 />
              </Textfield11>
              <Textfield11 variant="outlined">
                <Price color="primary">Bathrooms</Price>
                <Select1
                  color="primary"
                  defaultValue="1+"
                  size="medium"
                  label="Bathrooms"
                >
                  <Price1 value="Bathrooms">Bathrooms</Price1>
                  <Price1 value="1+">1+</Price1>
                </Select1>
                <Formhelpertext1 />
              </Textfield11>
            </TextfieldParent>
            <Button1 variant="contained" color="primary">
              Search
            </Button1>
          </ChatgptButtonParent>
        </QuicklyScanForAllAvailableParent>
      </Searchbar>
    </SearchbarWrapperRoot>
  );
};

export default PropertySearchForm;
