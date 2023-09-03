import {useReducer, useEffect} from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

export const useTodo = ( ) => {

    
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }
    const [todo, dispatch] = useReducer(todoReducer, [ ], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo))
    })

    const handleAddNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };
        dispatch(action) //Esta funcion le envia la accion al reducer! (Se cumple la condicion del Switch de [TODO] Add)
    };



    const handleDeleteTodo = (todo) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: todo,

        })
    }


    const handleToggleTodo = (todo) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: todo
        })
    };




    return {
      todo,
      handleAddNewTodo,
      handleDeleteTodo,
      handleToggleTodo
    }
      
    
}