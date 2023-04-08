import { useState } from "react"
const Form = ({createTodo}) => {
    const [addTodo, setAddTodo] = useState("")
    const add = (e) => {
        e.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: addTodo
        }

        createTodo(newTodo)
        setAddTodo("")
    }
    return (
        <div>
            <form onSubmit={add}>
                <input type="text"
                    onChange={(e) => setAddTodo(e.target.value)}
                    value={addTodo}
                />
                <button>add</button>
            </form>
        </div>
    )
}

export default Form
