import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/client"

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
