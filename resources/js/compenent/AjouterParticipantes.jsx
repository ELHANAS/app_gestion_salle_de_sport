import React, {useState} from "react";
import AuthUser from "./authUser";
import {useNavigate} from "react-router-dom"
import axios from "axios";
export default function AjouterParticipantes (store){
const {httpData} = AuthUser() ;
    const navigate = useNavigate();
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [tel,setTel] = useState('');
    const [dateNss,setDateNss] = useState('');
    const [image,setImage] = useState('');
    const [message , setMessage] = useState('');


    function submite(){
        const formD = new FormData();
        formD.append("image",image);
        formD.append("email",email);
        formD.append("name",name);
        formD.append("tel",tel);
        formD.append("dateNss",dateNss);

        httpData.post('AjouterParticipant',formD).then(
            (res)=> {
                setMessage(res.data);
               Annuler();
                setTimeout(function() {

                    setMessage('')

                }, 3000);
            }
        ).catch(
            (err) => setMessage(err.data)
        );

    }
    function  Annuler(){
        setTel("");
        setDateNss("");
        setName("");
        setEmail("");
        setImage(null);
    }
    return(
        <div style={{position:"relative",height:"100%",width:"100%"}}  className='container p-0'>
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

            <h2 className="h4 text-center m-auto  w-75 p-2 bg-light" style={{borderRadius:"0 0 10px 10px "}} >Ajouter participant(e)</h2>
                <form className={"p-0"}>
                    <div style={{overflow:"auto",position:"absolute",height:"80%",top:"50px",width:"100%"}} className={" p-3"}>
                        <div className={"p-2 p-lg-5 w-100"} >

                        <div className=" mt-3 row">
                            <label className="col-lg-4 col" htmlFor="name">Name : </label>
                            <input type="text" className="form-control  col" id="name"
                                   name="name" placeholder="entrer your  Name ..."
                                   required autoFocus
                            value={name}
                                   onChange={(event)=> setName(event.target.value)}
                            />
                        </div>
                        <div className="  row mt-3">
                            <label htmlFor="dat_naiss" className="col-lg-4 col"> Email :</label>
                            <input type="email" className="form-control col" id="email" name="emailparticipant"
                                   placeholder="entrer your email"
                                   required
                                   onChange={(event)=> setEmail(event.target.value)}
                            value={email}/>


                        </div>
                        <div className=" row mt-3">
                            <label className="form-label col-lg-4 col" htmlFor="tele">Telephone
                            :</label>
                            <input type="tel" className="form-control col" id="tel" name="tel"
                                   onChange={(event)=> setTel(event.target.value)}
                            value={tel}/>
                        </div>
                        <div className=" row mt-3">
                            <label htmlFor="dat_naiss" className="col-lg-4 col">Date de Naissance :</label>
                            <input type="date" className="form-control col" id="dat_naiss" name="dat_naiss"
                                   placeholder="entrer your dat_naiss"
                                   required={true}
                                   onChange={(event)=> setDateNss(event.target.value)}
                            value={dateNss}/>


                        </div>



                            <div className=" row mt-3">
                                <label htmlFor="photo" className="col-lg-4 col">Photo :</label>
                                <input type="file" className="form-control col" id="photo" name="photo"

                                       onChange={(event) => setImage(event.target.files[0])}
                                      />

                            </div>

                        </div>
                    </div>
                    <div  className="row  w-100  d-flex justify-content-between " style={{position:"absolute",left:"1%",bottom:"1%"}}>
                        <div className="col">
                            <button  onClick={Annuler} style={{color:"white",background:"#ee9b57"}} className="btn  w-100">
                                Annuler
                            </button>
                        </div>
                        <div className="col">

                            <button onClick={submite} style={{color:"white",background:"#ee9b57"}}  type={"button"} className="btn  w-100" >
                                Enregistrer
                            </button>


                        </div>
                    </div>
                </form>

        </div>
    )
}
