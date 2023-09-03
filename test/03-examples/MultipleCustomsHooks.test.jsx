import {  getByText, render, getByRole, screen, fireEvent, renderHook } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";
jest.mock('../../src/hooks/useFetch') 
jest.mock('../../src/hooks/useCounter')
//para poder manejar el useFetch con sus estados, debo de realizar en cada 
// instancia un useFetchMockReturnValue en cada instacia de los test para que no esté undefined
describe('Pruebas al MultipleCustomHooks' , () => {
   //se maneja el useCounter en el describe para manejarlo de forma globar y no me de error, lo utilizo en cada test
    useCounter.mockReturnValue({
      counter: 1, 
      increment: mockIncrement,
      decrement: mockDecrement
    });
    //para asegurar que todas las funciones que les estoy haciendo mock sean reseteadas y limpiar cada uno de los mocks
    beforeEach(() => {
        jest.clearAllMocks()
    });

    test('debe mostrar el componente por defecto (estado inicial)', () => {
    //otra forma de relizar una prueba al estado inicial sin el uso del snapshot //recomendado hacer screen.debug
    useFetch.mockReturnValue({
        data: null,
        isLoading: true,
        hasError: null
    })    
    render(<MultipleCustomHooks />);
    expect(screen.getByText('Loading...'))
    expect(screen.getByText('Breaking Bad Quotes'))
     
    const newButtonNext = screen.getByRole('button', {name: 'Next Quote'})
    expect(newButtonNext.disabled).toBeTruthy();

    const newButtonPrevious = screen.getByRole('button', {name: 'Previous Quote'})
    expect(newButtonPrevious.disabled).toBeTruthy();
   });


   test('debe de mostar un quote y un author', () => {
    useFetch.mockReturnValue({
        data:[{author: 'Carlos', quote: 'Hola mundo'}],
        isLoading: false,
        hasError: null
    });

    render(<MultipleCustomHooks />)
    
    expect(screen.getByText('Carlos')).toBeTruthy()
    expect(screen.getByText('Hola Mundo')).toBeTruthy();


  });

  test('debe de llamar al a funcion de incrementar', () => {
 //como se llama una funcion del useCounter, traeria o usaria su estado con mockReturnValue  
   useFetch.mockReturnValue({
   data:[{author: 'Carlos', quote: 'Hola Mundo'}],
   isLoading: false, 
   hasError: null
  });
  const newButton = screen.getByRole('button', {name: 'Next quote'});
  fireEvent.click(newButton);
  
  expect(mockIncrement).toHaveBeenCalled()

  });

  test('debe de llamar la funcion de decrementar', () => {
   useFetch.mockReturnValue({
    data: [{author: 'Carlos', quote: 'Hola Mundo'}],
    isLoading: false,
    hasError: null
   });
   render(<MultipleCustomHooks />)

   const newButton = screen.getByRole('button', {name: 'Previous quote'})
   fireEvent.click(newButton)
   expect(mockDecrement).toHaveBeenCalled()
  })
}) 