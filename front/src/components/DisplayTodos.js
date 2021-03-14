import { useMutation, useQuery } from "@apollo/client"
import React from "react"
import styled from "styled-components"
import { TOGGLE_TODO, GET_TODOS, DELETE_TODO } from "./graphql"

const StyledDisplay = styled.div`
  height: 100%;
  background: var(--clr-accent);
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #ca0ddb;
    padding: 0.5rem;
  }
  .strike {
    text-decoration: line-through;
    color: #a3c93a;
  }
`

function DisplayTodos() {
  const { data, loading, error } = useQuery(GET_TODOS)
  const [toggleTodo] = useMutation(TOGGLE_TODO)
  const [deleteTodo] = useMutation(DELETE_TODO)

  async function handleDeleteTodo({ id }) {
    await deleteTodo({
      variables: { id },
      update: (cache) => {
        const prevData = cache.readQuery({ query: GET_TODOS })
        const newTodos = prevData.todos.filter((elem) => elem.id !== id)
        cache.writeQuery({ query: GET_TODOS, data: { todos: newTodos } })
      }
    })
  }

  async function handleToggleTodo(elem) {
    await toggleTodo({
      variables: { id: elem.id, done: !elem.done }
    })
  }
  if (loading) {
    return <div>Loading</div>
  }
  if (error) {
    return <h2>Error fetching todos</h2>
  }
  return (
    <StyledDisplay>
      {data.todos.map((elem) => (
        <>
          <p onClick={() => handleToggleTodo(elem)} key={elem.id}>
            <span className={`${elem.done && "strike"}`}>{elem.text}</span>
          </p>
          <button onClick={() => handleDeleteTodo(elem)}>Delete</button>
        </>
      ))}
    </StyledDisplay>
  )
}
export default DisplayTodos
