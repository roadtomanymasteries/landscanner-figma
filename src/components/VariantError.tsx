import { FunctionComponent } from "react";
import { Property } from "csstype";
import styled from "styled-components";

type VariantErrorType = {
  statusMessage?: string;

  /** Style props */
  variantErrorPosition?: CSSProperties["position"];
  variantErrorBackgroundColor?: CSSProperties["backgroundColor"];
  variantErrorBorder?: CSSProperties["border"];
  errorColor?: CSSProperties["color"];
};

const Error1 = styled.div<{ errorColor?: Property.Color }>`
  position: relative;
  font-weight: 500;
  color: ${(p) => p.errorColor};
`;
const VarianterrorRoot = styled.div<{
  variantErrorPosition?: Property.Position;
  variantErrorBackgroundColor?: Property.BackgroundColor;
  variantErrorBorder?: Property.Border;
}>`position: relative;
  border-radius: var(--br-xl);
  background-color: var(--landscanner-error-lightest);
  border: 2px solid var(--landscanner-error-dark);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--padding-9xs) var(--padding-5xl);
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--landscanner-error-dark);
  font-family: var(--font-poppins);
  position: ${(p) => p.variantErrorPosition}
  background-color: ${(p) => p.variantErrorBackgroundColor}
  border: ${(p) => p.variantErrorBorder}
`;
const VariantError: FunctionComponent<VariantErrorType> = ({
  statusMessage,
  variantErrorPosition,
  variantErrorBackgroundColor,
  variantErrorBorder,
  errorColor,
}) => {
  return (
    <VarianterrorRoot
      variantErrorPosition={variantErrorPosition}
      variantErrorBackgroundColor={variantErrorBackgroundColor}
      variantErrorBorder={variantErrorBorder}
    >
      <Error1 errorColor={errorColor}>{statusMessage}</Error1>
    </VarianterrorRoot>
  );
};

export default VariantError;
