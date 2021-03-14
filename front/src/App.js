import React from "react"
import DisplayTodos from "./components/DisplayTodos"
import AddTodos from "./components/AddTodos"
import Layout from "./components/Layout"
import GlobalStyles from "./styles/GlobalStyles"
function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <AddTodos />
        <DisplayTodos />
      </Layout>
    </>
  )
}

export default App
