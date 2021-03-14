import React from "react"
import styled from "styled-components"
// media- greater then equal
const LayoutStyles = styled.div`
  height: 100vh;
  /* padding: 1em; */
  margin: 0 auto;
  /* @media (min-width: 1000px) {
    background: red;
  } */
`

const Layout = ({ children }) => {
  return <LayoutStyles>{children}</LayoutStyles>
}

export default Layout
