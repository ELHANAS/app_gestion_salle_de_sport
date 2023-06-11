import React, { useState } from 'react'
import "./login.css"
import AuthUser from './authUser';
import { useNavigate } from 'react-router-dom';
export default function Register(store){
    const {httpData} = AuthUser()
    const navigate = useNavigate();
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
                    Annuler
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

                <h2 className="h4 text-center m-auto  w-75 p-2 bg-white" style={{border:"2px solid black",borderTop:"none",borderRadius:"0 0 10px 10px "}} >Ajouter employé</h2>
                 <form  onSubmit={(event)=>submite(event)}>
                     <div style={{overflow:"auto",position:"absolute",height:"80%",top:"50px",width:"100%",zIndex:"2"}} className={"p-2 fs-6"}>
                         <div className={"row w-100"} >

                     <div className={"col-lg-6  col-12"}>

                     <div className="row  mt-3">
                         <label className="col-lg-4 col ">Nom&prénom :</label>
                         <input type="text" placeholder="nom & prénom"
                                value={name}
                                className=" col form-control   "
                                name="name"  onChange={(event)=> setName(event.target.value)}
                                required  autoFocus />
                     </div>
                     <div className="row mt-3">
                         <label className="col-lg-4 col ">Email :</label>
                        <input type="email" placeholder="Email Address"
                               value={email}
                        className="form-control col   "
                         name="email"  onChange={(event)=> setEmail(event.target.value)}
                         required   />
                     </div>
                     <div className="row mt-3">
                         <label className="col-lg-4 col">Mot de pass :</label>
                          <input  type="password" className="form-control col  "
                                  value={password}
                                  placeholder="mot de passe"
                           name="password"
                           onChange={(event)=> setPassword(event.target.value)}
                             />
                     </div>
                     <div className="row mt-3">
                         <label className="col-lg-4 col">Salaire :</label>
                     <input  type="text" className="form-control col  "
                             placeholder="000 000"
                             value={salaire}
                             name="salaire"
                             onChange={(event)=> setSalaire(event.target.value)}
                     />
                     </div>
                     </div>
                     <div className={"col-lg-6 col-12"}>
                     <div className="row mt-3">
                         <label className="col-lg-4 col">Cin :</label>
                     <input  type="text" className="form-control col  "
                             name="cin"
                             value={cin}
                             placeholder={"AA00000"}
                             onChange={(event)=> setCin(event.target.value)}
                     />
                     </div>
                     <div className="row mt-3">
                         <label className="col-lg-4  col ">N° téléphone:</label>
                         <input  type="text" className="form-control col   "
                                 name="tel"
                                 value={tel}
                                 placeholder={"00 00 00 00 00"}
                                 onChange={(event)=> setTel(event.target.value)}
                         />
                     </div>
                     <div className="row mt-3  ">
                         <label className="col-lg-4 col  ">Fonction:</label>

                             <select className="form-select col"  onChange={(event)=> setFonction(event.target.value)}>
                                        <option >Choisir la fonction</option>
                                 <option value={"Réceptionniste"}>Réceptionniste</option>
                                 <option value={"Entraîneur"}>entraîneur</option>
                                 <option value={"Admin"}>admin</option>
                             </select>


                     </div>
                     <div className="row mt-3 ">
                         <label className="col-lg-4 col ">Photo:</label>
                         <input type="file" className="form-control col  " onChange={(event)=> setPhoto(event.target.files[0])} name="photo"/>

                     </div>

                     </div>

                     </div>
                     </div>
                     <div  className="row   " style={{width:"90%",right:"5%",position:"absolute",bottom:"10px"}}>
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
