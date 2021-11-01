import {createGlobalStyle} from "styled-components";
import {normalize} from "styled-normalize";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";

// eslint-disable-next-line @typescript-eslint/naming-convention
const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Montserrat;
  }
`;

export default GlobalStyle;
