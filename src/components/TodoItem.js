import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function TodoItem({ todo }) {
    let dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className='col'>
                    {editable ? <input type="text" className="form-controls"
                        value={name}
                        onchange={
                            (e) => setName(e.target.value)
                        }
                    />
                        : <h4>{todo.name}</h4>}

                </div>
                <button
                    onclick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            name: name
                        }))
                        if (editable) {
                            setName = (todo.name)
                        }

                        setEditable = (!editable)

                    }}
                    className="btn btn-primary mx-2">
                    {editable ? "update" : "edit"}</button>
                <button
                    onclick={() => dispatch(deleteTodo(todo.id))}
                    className="btn btn-danger mx-2">Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
