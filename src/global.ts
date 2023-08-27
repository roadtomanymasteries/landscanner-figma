import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-poppins: Poppins;
--font-inherit: inherit;

/* font sizes */
--font-size-xs: 0.75rem;
--font-size-base: 1rem;
--font-size-13xl: 2rem;
--font-size-5xl: 1.5rem;
--font-size-3xs: 0.63rem;
--font-size-sm: 0.88rem;
--font-size-65xl: 5.25rem;
--font-size-41xl: 3.75rem;
--font-size-21xl: 2.5rem;
--font-size-9xl: 1.75rem;

/* Colors */
--white: #fff;
--gray-gray-0: #f8f9fa;
--landscanner-text-light: #859aad;
--landscanner-text-main: #041a2f;
--color-gray-100: rgba(0, 0, 0, 0.3);
--landscanner-primary-main: #2569a7;
--landscanner-secondary-dark: #2966a3;
--landscanner-primary-dark: #0d589d;
--landscanner-success-lightest: #d3f9d8;
--landscanner-success-dark: #2b8a3e;
--landscanner-error-lightest: #ffe3e3;
--landscanner-error-dark: #c92a2a;
--color-gainsboro: #d9d9d9;
--color-black: #000;

/* Gaps */
--gap-5xs: 0.5rem;
--gap-5xl: 1.5rem;
--gap-base: 1rem;
--gap-21xl: 2.5rem;
--gap-3xs: 0.63rem;
--gap-9xs: 0.25rem;

/* Paddings */
--padding-21xl: 2.5rem;
--padding-3xs: 0.63rem;
--padding-61xl: 5rem;
--padding-5xs: 0.5rem;
--padding-base: 1rem;
--padding-5xl: 1.5rem;
--padding-29xl: 3rem;
--padding-9xs: 0.25rem;
--padding-7xs: 0.38rem;

/* border radiuses */
--br-5xs: 8px;
--br-13xl: 32px;
--br-xl: 20px;

}
`;
