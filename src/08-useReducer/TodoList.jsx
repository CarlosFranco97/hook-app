import { useTodo } from "../hooks/useTodo"
import { TodoAdd } from "./TodoAdd"
import { TodoItem } from "./TodoItem"
export const TodoList = ({todo,onNewDeleteTodo,onToggleTodo }) => {
  
  return (
    <ul className="w-96">
    {
    todo.map( todos => (
     <TodoItem todo={todos} key={todos.id} onNewDeleteTodo={onNewDeleteTodo} onToggleTodo={onToggleTodo}/>
    ))
    }
  </ul>
  )
}
