import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from '../hooks/useTodo'
export const TodoApp = () => {
    
  const {todo, handleAddNewTodo, handleDeleteTodo, handleToggleTodo} = useTodo()
  
  return (
   <>
   <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-400 md:text-5xl lg:text-6xl dark:text-black mb-2">TodoApp: 10, <small>pedientes: 2</small></h1>
   <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
   <div className="row"> 
     <div className="col-7">
       <TodoList todo={todo} 
       onNewDeleteTodo={handleDeleteTodo} 
       onToggleTodo={handleToggleTodo}/>
     </div>
    <div className="col-5">
      <h4 className="text-center  text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-black-400">Agregar TODO</h4>
      <hr className="w-48 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
      <TodoAdd handleAddNewTodo={handleAddNewTodo} todo={todo}/>
    </div>
   </div>
   
   </>


    )
}
