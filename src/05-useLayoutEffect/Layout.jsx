import { useFetch, useCounter } from "../hooks"
// import { InputOfAuthor } from "./InputOfAuthor";
import { LoadingQuotes, Quotes } from "../03-examples";

export const Layout = () => {
  
  const {counter, increment, decrement } = useCounter(1)
  const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`)
     
     //desestructurando la data con esta condicion, porque en este punto es null
     const {quote, author} = !!data && data[0]; 
     
    return (
   <>
    <h1 className="title-1 mb-3">Breaking Bad Quotes</h1>
    <hr />
    {/* <InputOfAuthor data={data} author={author}/> */}

    {
      (isLoading) 
       ?  <LoadingQuotes/> 
       : <Quotes author={author} quote={quote}/>

    }
   
  

   <div className="d-flex justify-content-center mt-3">
   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
   onClick={() => decrement()}
  disabled={isLoading}
   >
    PREVIOUS QUOTE
    </button>
    <button 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
    disabled={isLoading}
    onClick={() => increment()}>
      NEXT QUOTE
    </button>
   </div>
  </>
  )
}


