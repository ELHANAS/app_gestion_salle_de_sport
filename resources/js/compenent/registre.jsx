import React, { useState } from 'react'
import "./login.css"
import AuthUser from './authUser';
export default function Register(store){
    const {httpData} = AuthUser()
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('');
    const [fonction,setFonction] = useState('');
    const [salaire,setSalaire] = useState('');
    const [cin,setCin] = useState('');
    const [photo,setPhoto] = useState('');
    const [tel,setTel] = useState('');
    const [message , setMessage] = useState('');

    function submite(e){
            httpData.post('/registre',{
                name:name,
                email : email,
                password:password,
                fonction : fonction,
                salaire : salaire ,
                cin : cin,
                tel:tel,
                photo : photo
            }).then(
                (res)=> {
                    setMessage(res.data);
                    Annuler()
                    setTimeout(function() {

                        setMessage('')

                    }, 3000);
                }
            );

            e.preventDefault() ;
    }
    function  Annuler(){
        setFonction("");
        setPassword('');
        setSalaire("");
        setCin("");
        setName("");
        setEmail("");
    }
    return (
        <div style={{position:"relative",height:"100%",width:"100%"}}  className='container p-0 text-center'>
            <button className="btn"  style={{position:"absolute",top:"0",right:"0"}} onClick={()=>store.none("none")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                     viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            {message?
                <p className={"text-center alert alert-success   fs-5     py-lg-5 py-1"} style={{position:"absolute",width:"50%",left:"25%", top:"25%",zIndex:"3"}}>{message}
                <br/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </p>
                :null
            }

                <h2 className="h4 text-center m-auto  w-75 p-2 bg-light" style={{borderRadius:"0 0 10px 10px "}} >Ajouter employé</h2>
                 <form  onSubmit={(event)=>submite(event)}>
                     <div style={{overflow:"auto",position:"absolute",height:"80%",top:"50px",width:"100%",zIndex:"2",fontSize:"5px"}} className={"p-2 "}>
                         <div className={"row w-100"} >

                     <div className={"col-lg-6 p-lg-4  col-12"}>

                     <div className="row  mt-3 mt-lg-5">
                         <label className="col-lg-4 col text-start form-label ">Nom&prénom :</label>
                         <input type="text"  placeholder="nom & prénom"
                                value={name}
                                className=" col form-control  form-control-sm  "
                                name="name"  onChange={(event)=> setName(event.target.value)}
                                required  autoFocus />
                     </div>
                     <div className="row mt-3 mt-lg-5">
                         <label className="col-lg-4 col text-start form-label">Email :</label>
                        <input type="email" aria-required={true} placeholder="Email Address"
                               value={email}
                        className="form-control col  form-control-sm "
                         name="email"  onChange={(event)=> setEmail(event.target.value)}
                            />
                     </div>
                     <div className="row mt-3 mt-lg-5">
                         <label className="col-lg-4 col text-start form-label">Mot de pass :</label>
                          <input  type="password" className="form-control col  form-control-sm"
                                  value={password}
                                  aria-required={true}
                                  placeholder="mot de passe"
                           name="password"
                           onChange={(event)=> setPassword(event.target.value)}
                             />
                     </div>
                     <div className="row mt-3 mt-lg-5">
                         <label className="col-lg-4 col text-start form-label">Salaire :</label>
                     <input  type="text" className="form-control form-control-sm col  "
                             placeholder="000 000"
                             value={salaire}
                             name="salaire"
                             onChange={(event)=> setSalaire(event.target.value)}
                     />
                     </div>
                     </div>
                     <div className={"col-lg-6 p-lg-4   col-12"}>
                     <div className="row mt-3   mt-lg-5">
                         <label className="col-lg-4 col text-start form-label">Cin :</label>
                     <input  type="text" className="form-control form-control-sm col  "
                             name="cin"
                             value={cin}
                             required={true}
                             placeholder={"AA00000"}
                             onChange={(event)=> setCin(event.target.value)}
                     />
                     </div>
                     <div className="row mt-3 mt-lg-5">
                         <label className="col-lg-4  col text-start form-label">N° téléphone:</label>
                         <input  type="text" className="form-control form-control-sm col   "
                                 name="tel"
                                 value={tel}
                                 placeholder={"00 00 00 00 00"}
                                 onChange={(event)=> setTel(event.target.value)}
                         />
                     </div>
                     <div className="row mt-3 mt-lg-5 ">
                         <label className="col-lg-4 col text-start form-label ">Fonction:</label>

                             <select className="form-select col"
                                     required={true}
                                     onChange={(event)=> setFonction(event.target.value)}>
                                        <option value={""}>Choisir la fonction</option>
                                 <option value={"Réceptionniste"}>Réceptionniste</option>
                                 <option value={"Entraîneur"}>entraîneur</option>
                                 <option value={"Admin"}>admin</option>
                             </select>


                     </div>
                     <div className="row mt-3 mt-lg-5">
                         <label className="col-lg-4 col text-start form-label">Photo:</label>
                         <input type="file" className="form-control col  " onChange={(event)=> setPhoto(event.target.files[0])} name="photo"/>

                     </div>

                     </div>

                     </div>
                     </div>
                     <div  className="row  w-100  d-flex justify-content-between " style={{position:"absolute",left:"1%",bottom:"1%"}}>
                         <div className="col">
                             <button onClick={Annuler} style={{color:"white",background:"#ee9b57"}} className="btn  w-100">
                                 Annuler
                             </button>
                         </div>
                         <div className="col">

                             <button style={{color:"white",background:"#ee9b57"}} type="submit" className="btn  w-100" >
                                 Enregistrer
                             </button>


                         </div>
                     </div>
                        </form>

        </div>
    )
}
