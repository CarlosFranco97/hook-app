import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//    id: 123, 
//    email: 'carlosfranco63.cf@gmail.com',
//    name: 'Carlos'
// }
export const UserProvider = ({children}) => {
  const [user, setUser] = useState()
    return (
   <UserContext.Provider value={{ user, setUser }}> 
 
      {children}

   </UserContext.Provider>
  )
}
