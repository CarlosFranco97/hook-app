import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
  
    const [counter, setCounter ] = useState(10)
    
    const incrementFather = useCallback(
        () => {
        setCounter(
           (c) =>  c + value ); },
           []
        )
   
    return (
     <>
     <h1 
 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black"
 > 
 Callback Hook: {counter}
 </h1>
 <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
 <ShowIncrement  increment={ incrementFather }/>
     </>
    )
}
