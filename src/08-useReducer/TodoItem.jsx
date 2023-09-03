
export const TodoItem = ({todo, onNewDeleteTodo, onToggleTodo}) => {
  return (
   <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 
   dark:border-opacity-50 d-flex justify-content-between"> 
   <span onClick={() => onToggleTodo(todo.id)}
   aria-label="span"
   className={`align-self-center ${ (todo.done) ? 'text-decoration-line: line-through':''}`}>
     { todo.description }
    </span>
      <button 
      className="text-white bg-gradient-to-r from-red-400 
      via-red-500 to-red-600 hover:bg-gradient-to-br 
      focus:ring-4 focus:outline-none focus:ring-red-300 
      dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center"
      onClick={ () => onNewDeleteTodo(todo.id)}
      >Borrar
      </button>
    </li>  //return implicito por eso dentro parentesis.
  )
}
