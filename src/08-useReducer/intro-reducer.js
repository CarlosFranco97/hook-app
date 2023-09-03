const initialState = [{
    id: 1, 
    todo: 'Recolectar la piedra del Alma',
    done: false 
}]; 

const todoReducer = (state = initialState, action = {}) => {
  
    if(action.type === '[TODO] add todo') {
   return [...state, action.payload]
  }
 
    return state;
}

const newTodo = [{
    id : 2, 
    todo: 'Recolectar la piedra del poder',
    done: false
}];

const actionAddTodo =  {
 type: '[TODO] add todo',
 newTodo: newTodo,
}

let todo = todoReducer(newTodo, actionAddTodo); 
// console.log({state: todo})



