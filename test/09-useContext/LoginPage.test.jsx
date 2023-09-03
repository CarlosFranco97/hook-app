import {LoginPage} from '../../src/09-useContext/LoginPage'
import {UserContext} from '../../src/09-useContext/context/UserContext'
import { screen, render, fireEvent } from '@testing-library/react'


describe('Pruebas en el loginPage', () => {
    
    test('debe de mostrar el componente sin el usuario', () => {
     render(
        <UserContext.Provider value={{user: null}}>
            <LoginPage />
        </UserContext.Provider>
     );
     const preTag = screen.getByLabelText('pre');
     expect(preTag.innerHTML).toBe('null')
    });

    test('debe de llamar al setUser cuando se presione el botón', () => {
       const setUserMock = jest.fn()
        render(
        <UserContext.Provider value={{user: null, setUser:setUserMock}}>
            <LoginPage />
        </UserContext.Provider>
    );  

    const botonEstablecer = screen.getByRole('button', {name:'Establecer Usuario'});
    fireEvent.click(botonEstablecer);
   
    expect(setUserMock).toHaveBeenCalledWith({
        id: 123, name: 'Carlos', email: 'carlosfranco63.cf@gmail.com'
    })
     
    })
})