
export const todoReducer = (initialState = [], action ) => {
 
    switch (action.type) {
        case '[TODO] Add Todo':
            return [
                ...initialState, action.payload
            ]
            //debo de agregar el nuevo todo, recorro con el valor spread el estado inicial y le agrego el action.payload que es donde se encuentra el nuevo todo
         
         break;
         case '[TODO] Remove Todo':
         return initialState.filter( 
          todo => todo.id !== action.payload
         );
         break;

         case '[TODO] Toggle Todo': 
         return initialState.map( todo => {
                if(todo.id === action.payload){
                  return {
                    ...todo,
                    done: !todo.done 
                }
              }  
                return todo
            });
        default:
     
        return initialState
    }
  
}
