import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";


describe('Pruebas en el useForm', () => {
   
    const initialValue = {
        name: 'Carlos',
        email: 'carlosfranco63.cf@gmail.com'
    }

    test('debe de regresar los valores por defecto', () => {
    const {result} = renderHook(() => useForm(initialValue));
    expect(result.current).toBe({
        name: initialValue.name,
        email: initialValue.email,
        formState: initialValue,
        onInputChange: expect.any(Function),
        onResetForm: expect.any(Function)  
    }        
    )
    });

    test('debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan'
        const { result } = renderHook(() => useForm(initialValue));
        const {onInputChange} = result.current;
        act(() => {
            onInputChange({target: {name: 'name', value: newValue}});
        });
        expect(result.current).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)
     }); 
     

    test('debe de resetear el formulario', () => {
    const {result} = renderHook(() => useForm() );
    const { onInputChange, onResetForm } = result.current
    act(() => {
        onInputChange({target: {name: 'name', value: newValue}});
        onResetForm()
    });
    expect(result.current.name).toBe(initialValue.name);
    expect(result.current.formState.name).toBe(initialValue.name)
    })
})