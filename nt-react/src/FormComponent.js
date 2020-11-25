// este codigo permite el envio de parametros desde este formunlario de ingreso a otro sitio
// en la linea  en la funcion flecha  const valideteForm =(event) =>   se llama  con el fin de enviar los 
// componenetes , cuando esta vacio se puede usar de la forma que este en este momento <form onSubmit={valideteForm}> 
// en caso de que tenga parametros se debe usar asi <form onSubmit={() => valideteForm(variables)}> 
// valida si el formulario esta bien   event.preventDefault();
import React, { useState, Fragment } from 'react';

const FormComponent =() => {
    const [email, setEmail] = useState("");

    const valideteForm =(event) =>{
        if(email==''){
            event.preventDefault();
            console.log("email vacio");
        } else if(email.length<10){
            event.preventDefault();
            console.log("correo menor de 10 caracteras");
        }

         
    }
    
    return(
        <Fragment>
            <h1>Formunlario de Registro</h1>
            <form onSubmit={valideteForm}>                        
            <div className="form-group">
                <label >Email address</label>
                <input type="email"  value={email} onChange={text => setEmail(text.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label >Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" >Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Fragment>
    )
}
export default FormComponent