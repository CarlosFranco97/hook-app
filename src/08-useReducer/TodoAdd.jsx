import { useForm } from '../hooks/useForm' 

export const TodoAdd = ({handleAddNewTodo, todo}) => {
  
   const { description, onInputChange, onResetForm } = useForm({
    description: '', //definiendo el description como un string vacio
    
   })
 
  
    const onSubmit = (event) => {
     event.preventDefault()
      if(description.length <= 1 ) return; //si la descripcion que se ingrese en el input es menor o igual a uno se retorna al dar enter
       
      const newTodo = {
        id: new Date().getTime(),
        description: description, 
        done: false
      }

      handleAddNewTodo(newTodo)
      onResetForm(); //llamo el onResetForm porque no quiero que se mire doble
    }  
    

    return (
    <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="¿Qué hay que hacer?" 
        className="shadow appearance-none border rounded w-full py-2 
        px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={description}
        onChange={onInputChange}
        name="description"
        />
        <button 
      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2 mt-2"
      type="submit">
        Agregar
      </button>
      </form>
  )
}
