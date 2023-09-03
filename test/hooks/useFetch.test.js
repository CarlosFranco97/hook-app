import { waitFor } from "@testing-library/react";
import { useFetch } from "../../src/hooks"

describe('Prueba del useFetch', () => {
  test('debe de retornar el estado inicial del hook', ( ) => {
    const { result } = renderHook(() => useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1`));
    
    const {data, isLoading, hasError} = result.current;
   
    expect(data.length).toBe(0)
    expect(isLoading).toBeTruthy()
    expect(hasError).toBe(null)
  });

  test('Retorna una data y es isLoading es false', async() => {
   const { result } = renderHook(() => useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1`));
   await waitFor( () => {
    expect(result.current.data.length).toBeGreaterThan(0)
   });
   const {data, isLoading, hasError} = result.current;
   expect(data.length).toBeGreaterThan(0)
   expect(isLoading).toBeFalsy();
   expect(hasError).toBe(null)
  })
});