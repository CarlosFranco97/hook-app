import { MemoryRouter } from "react-router-dom"
import { HomePage } from "../../src/09-useContext/HomePage"
import {render, screen} from '@testing-library/react' 
import { LoginPage } from "../../src/09-useContext/LoginPage";
describe('Pruebas en el MainApp', ()   => {
    test('debe de mostrar eL HomePage', () => {
       render(
        <MemoryRouter>
            <HomePage />
        </MemoryRouter>
       );

       expect(screen.getByText('HomePage')).toBeTruthy()
    });

    test('debe de mostrar el LoginPage', () => {
       render(
        <MemoryRouter initialEntries={['/login']}>
           <LoginPage />
        </MemoryRouter>
       );

       expect(screen.getByText('LoginPage')).toBeTruthy()
    })
})