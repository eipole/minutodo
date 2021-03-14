import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { GET_TODOS, ADD_TODO } from "./graphql"
import styled from "styled-components"

const StyledForm = styled.div`
  /* background: var(--clr-murky); */
  background: #74a6a3;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    padding: 0.8em;
  }
  h1 {
    padding-top: 2em;
    color: var(--clr-light);
  }
`

function AddTodos() {
  const [todoText, setTodoText] = useState("")
  const [addTodo] = useMutation(ADD_TODO, {
    onCompleted: () => setTodoText("")
  })

  async function handleSubmit(event) {
    event.preventDefault()
    if (!todoText.trim()) return
    const data = await addTodo({
      variables: { text: todoText },
      refetchQueries: [{ query: GET_TODOS }]
    })
    console.log("submit data", data)
  }

  function handleChange(e) {
    const event = e.target.value
    setTodoText(event)
  }

  return (
    <StyledForm>
      <h1 className="center">Checklist</h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleChange(e)}
          value={todoText}
          type="text"
          placeholder="your task"
        />
        <button>Add task</button>
      </form>
    </StyledForm>
  )
}
export default AddTodos
//<span strike={`${elem.done}`}>{elem.text} </span>
