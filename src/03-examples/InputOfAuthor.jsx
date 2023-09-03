// import {useState} from 'react'
// export const InputOfAuthor = ( {data, author} ) => {

//   const [inputValue, setInputValue] = useState('') 

//   const handleInputAuthor = () => {
    
//     const newAuthor = data.filter( data => 
//         data.author.toLowerCase().includes(inputValue.toLowerCase())
//       )
//       setInputValue(
//         newAuthor
//       )
//    };
//   const onInputChange = ({target}) => {
//    setInputValue(
//        target.value
//    )
//   }; 

  
//   const onSubmit = (event) => {
//     event.preventDefault()
//     if (inputValue.trim() <= 1) return; 
//     handleInputAuthor(inputValue.trim())
   
//   };


//   return (
//   <> 
//   <form onSubmit={onSubmit}>
//    <input className="form-control mb-3 mt-3"
//    placeholder="Buscar por autor"
//    value={inputValue}
//    onChange={onInputChange}
//    />
//    </form>
   
//    {/* {
//     (inputValue.trim().length > 1) 
//     ? data.map( data => 
//       <li> {data.author}  </li>
//     )
//     : null
//    } */}
 
//   </>
//   )
// }
