import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
   for(let i = 0; i < iterationNumber; i++) {
    console.log('Ahí vamos')
   }; 

   return `${iterationNumber} iteraciones realizadas`
};

export const MemoHook = () => {
   const {counter, increment} = useCounter(400); 
   const [show, setShow] = useState(true);
   const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
   return (
     <>
     <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
      Counter: <small>{counter}</small> </h1>
     <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
     <h4>{memorizedValue}</h4>
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
