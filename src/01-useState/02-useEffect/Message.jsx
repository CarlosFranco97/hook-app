import { useEffect, useState } from "react"

export const Message = () => {
  
    const [coords, setCoords] = useState({
        x: 0, y: 0
    })

    useEffect(() => {
    
        const onMoveMouse = ({x,y}) => {
        setCoords({x,y})
    }
   
    window.addEventListener('mousemmove', onMoveMouse)
         
     return () => {
       window.removeEventListener('mousemove', onMoveMouse)
     }


    }, []) 
    

    return (
   <>
    <div>¡Usuario ya existe!</div>
   </> 
  )
}
