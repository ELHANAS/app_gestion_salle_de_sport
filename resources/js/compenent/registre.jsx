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
                    setFonction("");
                    setPassword('');
                    setSalaire("");
                    setCin("");
                    setName("");
                    setEmail("");
                }
            );
            navigate('/Employe');

            e.preventDefault() ;
    }
    function  Annuler(){
        setMessage('');
        setFonction("");
        setPassword('');
        setSalaire("");
        setCin("");
        setName("");
        setEmail("");
    }
    return (
        <div style={{position:"relative",height:"100%",width:"100%"}}  className='container p-lg-3  px-lg-5'>
            <button className="btn"  style={{position:"absolute",top:"0",right:"0"}} onClick={()=>store.none("none")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                     viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            {message?
                <p className={"text-center border bg-success border-success p-1"} style={{position:"absolute",width:"90%",color:"white", top:"5px"}}>{message}</p>
                :null
            }

                <h2 className="h2 text-center my-4">Ajouter employé</h2>
                 <form className={"row"}  onSubmit={(event)=>submite(event)}>
                     <div className={"col-lg-6 col-12"}>

                     <div className="row">
                         <label className="col-lg-4 py-3">Nom & prénom :</label>
                         <input type="text" placeholder="nom & prénom"
                                value={name}
                                className=" col form-control my-lg-3  "
                                name="name"  onChange={(event)=> setName(event.target.value)}
                                required  autoFocus />
                     </div>
                     <div className="row">
                         <label className="col-lg-4 py-3">Email :</label>
                        <input type="email" placeholder="Email Address"
                               value={email}
                        className="form-control col  my-lg-3 "
                         name="email"  onChange={(event)=> setEmail(event.target.value)}
                         required   />
                     </div>
                     <div className="row">
                         <label className="col-lg-4 py-lg-3">Mot de pass :</label>
                          <input  type="password" className="form-control col my-3 "
                                  value={password}
                                  placeholder="mot de passe"
                           name="password"
                           onChange={(event)=> setPassword(event.target.value)}
                             />
                     </div>
                     <div className="row">
                         <label className="col-lg-4 py-3">Salaire :</label>
                     <input  type="text" className="form-control col my-lg-3 "
                             placeholder="000 000"
                             value={salaire}
                             name="salaire"
                             onChange={(event)=> setSalaire(event.target.value)}
                     />
                     </div>
                     </div>
                     <div className={"col-lg-6 col-12"}>
                     <div className="row">
                         <label className="col-lg-4 py-lg-3">Cin :</label>
                     <input  type="text" className="form-control col  my-3"
                             name="cin"
                             value={cin}
                             placeholder={"AA00000"}
                             onChange={(event)=> setCin(event.target.value)}
                     />
                     </div>
                     <div className="row">
                         <label className="col-lg-4 py-3">Numéro de téléphone:</label>
                         <input  type="text" className="form-control col  my-lg-3"
                                 name="tel"
                                 value={tel}
                                 placeholder={"00 00 00 00 00"}
                                 onChange={(event)=> setTel(event.target.value)}
                         />
                     </div>
                     <div className="row">
                         <label className="col-lg-4 py-3">Fonction:</label>
                         <div className="col my-lg-3 p-0">
                             <select className="form-select" value={"choisir un fonction"} onChange={(event)=> setFonction(event.target.value)}>

                                 <option value={"Réceptionniste"}>Réceptionniste</option>
                                 <option value={"entraîneur"}>entraîneur</option>
                                 <option value={"admin"}>admin</option>
                             </select>
                         </div>

                     </div>
                     <div className="row">
                         <label className="col-lg-4 col py-lg-3">Photo:</label>
                         <input type="file" className="form-control col my-lg-3 " onChange={(event)=> setPhoto(event.target.files[0])} name="photo"/>

                     </div>
                     </div>

                            <div className="row  " style={{position:"absolute",width:"90%", bottom:"5px"}}>
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
