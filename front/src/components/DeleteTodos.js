import { useMutation } from "@apollo/client"
// import React from "react"
import { DELETE_TODO, GET_TODOS } from "./graphql"

async function DeleteTodos({ id }) {
  const [deleteTodo] = useMutation(DELETE_TODO)
  const data = await deleteTodo({
    variables: { id },
    update: (cache) => {
      const prevData = cache.readQuery({ query: GET_TODOS })
      const newTodos = prevData.todos.filter((elem) => elem.id !== id)
      cache.writeQuery({ query: GET_TODOS, data: { todos: newTodos } })
    }
  })
  console.log("deleted todo data", data)
}

export default DeleteTodos
