import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
/* reset */
*,
*::before,
*::after{box-sizing:border-box;}
body,
h1,
h2,
h3,
p {
  margin: 0;
}
/* end reset */
:root {
  --fw-reg: 300;
  --fw-bold: 900;
  --clr-light: #f0f7f4;
  --clr-murky:   #749687;
  --clr-dark:   #74a6a3;
  --clr-accent: #b8e0ce ;
  --fs-h1: 3rem;
  --fs-h2: 2.25rem;
  --fs-h3: 1.25rem;
  --fs-body: 1rem;
  --bs: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),
    0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);
  --c-w: 1200px;  
}
 
body{
 
  height: 100vh;
  line-height: 1.6;
  font-size: var(--fs-body);
  color: var(--clr-dark);
}
/* classes */
.center{
    text-align: center;
}
p{
  font-size: 1.4rem;
}
button {
    width: max-content;
    font-size: var(--fs-h3);
  }
`
export default GlobalStyles
