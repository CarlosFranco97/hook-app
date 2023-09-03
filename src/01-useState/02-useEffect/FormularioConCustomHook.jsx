import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const  FormularioConCustomHook = () => {
   
  const {formState, onInputChange, username, email, password, onResetForm
  } = useForm({
    username: '',
    email: '',
    password: ''
  });

//   const { username, email, password } = formState;

    return (
       <>
       <h1>Formulario con CustomHook</h1>
       <hr />
       <input type="text" 
       className='form-control'
       name="username"
       placeholder="UserName" 
       value={username}
       onChange={onInputChange}
        /> 
       
       <input className='form-control mt-3'
        type="email" 
        name="email" 
        placeholder="Email"
        value={email}
        onChange={onInputChange}
        />
        
        <input className='form-control mt-3' 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={password}
        onChange={onInputChange}

        /> 
        <div className="d-flex justify-content-center">
        <button onClick={onResetForm} className="btn btn-primary mt-2 ">
          Borrar
        </button>
        </div>
       
       </> 
    )
}