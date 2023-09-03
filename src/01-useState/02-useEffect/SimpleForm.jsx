import { useEffect, useState } from "react";
import { Message } from "./Message";

export const  SimpleForm = () => {
   
    const [formState, setFormState] = useState({
        username: 'Carlos', 
        email: 'carlosfranco63.cf@gmail.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
     const { name, value } = target;    
     setFormState({
      ...formState, 
      [name]: value
     })
    }

    useEffect(() => {
        // console.log('useEffect called! '), 
        [] });

    useEffect(() =>{
        // console.log('formState change')
    }, [formState]); 

    useEffect(() => {
        // console.log('email change')
    }, [email]);

    useEffect(() => {
        // console.log('username change')
    }, [username])

   

    return (
       <>
       <h1>Formulario Simple</h1>
       <hr />
       <input type="text" 
       className='form-control'
       name="username"
       placeholder="UserName" 
       value={username}
       onChange={onInputChange}
        /> 
        
        {
           (username === 'Carlos2') && <Message />
        }
       
       <input className='form-control mt-3'
        type="email" 
        name="email" 
        placeholder="Email"
        value={email}
        onChange={onInputChange}
        />
        
       
       </> 
    )
}