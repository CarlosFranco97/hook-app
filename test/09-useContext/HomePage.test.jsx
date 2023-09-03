import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { screen, render } from "@testing-library/react";
describe('Pruebas en el HomePage', () => {
  
    const user = {
        id: 1,
        name: 'Carlos'
    }

    test('debe de mostrar el componente sin el usario (estado inicial)', () => {
   
        render(
            //debe encerrar al homepage el contexto que se creo anteriormente
            <UserContext.Provider value={{user: null}}>
               <HomePage />
            </UserContext.Provider>
        )
        //ver en la etiqueta <pre> que valor tiene en este caso como maneja el user veo que contiene, a ver si esta en null
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null')
        
    });
   
   test('debe de mostrar el componente CON el usuario', () => {
     render(
        <UserContext.Provider value={{user:user}} >
          <HomePage />
        </UserContext.Provider>
     );

     const preTag = screen.getByLabelText('pre');
     expect(preTag.innerHTML).toContain(user.id.toString()); //el user.id se estaba tomando como un string por eso el toString()
     expect(preTag.innerHTML).toContain(user.name)
     expect(preTag.innerHTML).toBe(user)
   })

}) 