import { useRef } from "react"

export const FocusScreen = () => {
 
 const inputRef = useRef()
  
 const onClick = () => {
    // document.querySelector('input').select();
    // console.log(inputRef)
    inputRef.current.select()
  }
  
  return (
    <>
     <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black text-center">Focus Screen</h1>
     <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
     <input 
     type="text"
     placeholder="Ingrese su nombre"
     ref={inputRef}
     className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4 w-full"
     />

     <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
     onClick={onClick}
     >
      Set Focus
     </button>
    </>
   
  )
}
