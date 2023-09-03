import { todoReducer } from "../../src/08-useReducer/todoReducer"
describe('Pruebas del Reducer', ()=> {
   //Recomendado hacer una constante del estado inicial
    const initialState = {
    id: 1, 
    description: 'Demo Todo',
    done: false
   }

    test('debe de retornar el estado inicial', () => {
     //se evalua el caso de un nuevo estado, pero en el action se coloca un objeto vacio para que me regrese el estado incial
        const newState = todoReducer(initialState, {})
        //espero que el newState sea igual al initialState, porque me esta retornando el initialState en la condicion del switch
        expect(newState).toBe(initialState);
        //toBe puede comparar estos dos objetos y la prueba pasara porque son exactamente iguales!
  });

    test('debe de agregar un nuevo todo', () => {
     //creo una action
     const action = {
        type: '[TODO] Add Todo',
        payload: {
            id: 2,
            description: 'nuevo todo 2',
            done: false
        }};
     const newState = todoReducer(initialState, action);
     expect(newState.length).toBe(2)
     //el nuevo estado debe de contener el action.payload que fue el objeto literal creado anteriormente
     expect(newState).toContain(action.payload) 
    }); 

    test('debe de eliminar un todo', () => {
    const action = {
     type: '[TODO] Remove Todo',
     payload: 1
     };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
    });

    test('debe de hacer un Toggle de un todo', () => {
    const action = {
        type: '[TODO] Toggle Todo',
        payload: 1 
     }
      
     const newState = todoReducer(initialState, action);
     expect(newState[0].done).toBe(true)
    })
})