import { useContext, useEffect } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {
    
  const { user, setUser } = useContext(UserContext)
 
  return (
      <>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label="pre">
        {JSON.stringify(user, null, 3)}
      </pre>  
      <button
      onClick={() => setUser({id: 123, name: 'Carlos', email: 'carlosfranco63.cf@gmail.com'})}
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">
       Establecer Usuario
      </button>
      
     </>
      )
  }
  