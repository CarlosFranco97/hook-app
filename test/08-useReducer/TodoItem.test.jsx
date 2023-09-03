import { screen, render, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";
describe('Pruebas del TodoItem', () => {
   //se recomienda crear los argumentos que necesita el todoItem que son: el todo, onDeleteTodo, onToggleTodo
    const todo = {
    id: 1,
    description: 'Piedra del alma',
    done: false
   };

   const onToggleTodoMock = jest.fn()
   const onDeleteTodoMock = jest.fn()
   beforeEach(() => {
    jest.clearAllMocks()
   })
  
   test('debe de mostrar el pendiente de completar (pruebas en las clases del todoItem)', () => {
     //pudiera hacer un snapshot, habiando ya definido los argumentos que recibe el TodoItem lo renderizo
     render(
        <TodoItem 
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleTodo={onDeleteTodoMock}
        />
     );

     const liElement = screen.getElementByRole('listItem');
     expect(liElement.className).toBe('w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 d-flex justify-content-between')
      
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toBe('align-self-center ') //va con espacio porque asi esta en mi componente todoItem para hacer la condicion
  
    });

    test('debe de mostrar el texto del todo completado', () => {
    //en este caso muto el todo.done para ponerlo como si estuviese tachado
    todo.done = true;
    render(<TodoItem 
    todo={todo}
    onToggleTodo={onToggleTodoMock}
    onDeleteTodoMock={onDeleteTodoMock}
    />) 
    const spanElement = screen.getByLabelText('span')
    expect(spanElement).toContain('text-decoration-line: line-through')
    });

    test('el span debe de llamar al onToggleTodo', ( ) => {
    render(
        <TodoItem 
        todo={todo}
        onDeleTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
        />);
        
        const spanElement = screen.getByLabelText('span');
        //despues de darle click al span espero que realice el toggle
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id) 
        //con el expect anterior lo que le digo es que al momento de hacer click en el span el onToggle tuvo que haber sido llamado con el todo.id
    });

    test('el boton debe de llamar el deleteTodo', () => {
    render(
    <TodoItem 
    todo={todo}
    onDeleTodo={onDeleteTodoMock}
    onToggleTodo={onToggleTodoMock}
    />);
    
    const buttonElement = screen.getByRole('buton', {name: 'Borrar'});
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id) 
    })
})