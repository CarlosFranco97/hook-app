import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
   const {counter, increment} = useCounter(); 
   const [show, setShow] = useState(true)
   return (
     <>
     <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Counter: <Small value={counter}/> </h1>
     <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
     <button 
     className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
     onClick={() => increment()}
     >
        +1
        </button>     
     <button
     className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
     onClick={() => setShow(
        !show
     )}
     >
      Show/Hide {JSON.stringify(show)}
     </button>
    

     </>
    


        )
}
