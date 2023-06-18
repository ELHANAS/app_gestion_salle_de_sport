import React, {useState} from "react";
import AuthUser from "./authUser";
import {useNavigate} from "react-router-dom"
import axios from "axios";
export default function AjouterDiscipline(prop){
    const  navigate = useNavigate() ;
    const [libelle,setLibelle] = useState('');
    const [prix,setPrix] = useState('');
    const [message , setMessage] = useState('');



    function handlSubmite(){
        console.log(libelle);
        axios.post('/api/ajouteDiscipline',{
            libelle: libelle ,
            prix : prix
        }).then(
            (res)=> {
                setMessage(res.data);
                Annuler();
                setTimeout(function() {

                    setMessage('')

                }, 3000);
            }

        )
    }
    function Annuler(){

        setLibelle("");
        setPrix("");

    }
    return(
        <div style={{position:"relative",height:"100%",width:"100%"}} className='container '>
            <button className="btn" style={{position:"absolute",top:"0",right:"0"}} onClick={()=>prop.none(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                     viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            <div >
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
                <h2 className="h4 text-center m-auto  w-75 p-2 bg-light" style={{borderRadius:"0 0 10px 10px "}} >Ajouter un discipline de sport</h2>

                <form className={"p-3 p-lg-5"}>


                    <div className="form-group row py-3">
                        <label className="form-label col col-lg-4 " htmlFor="password">le nome de discipline :</label>
                        <input type="text" className="form-control col" id="libele" name="libele" value={libelle} onChange={(event)=>setLibelle(event.target.value)}/>
                    </div>
                    <div className="form-group row py-3">
                        <label className="form-label col col-lg-4 " htmlFor="password">le prix :</label>
                        <input type="number" className="form-control col" id="prix" name="prix" value={prix} onChange={(event)=>setPrix(event.target.value)}/>
                    </div>



                    <div  className="row  w-100  d-flex justify-content-between " style={{position:"absolute",left:"1%",bottom:"1%"}}>
                        <div className="col">
                            <button style={{color:"white",background:"#ee9b57"}} type={"button"} onClick={Annuler} className="btn w-100">
                                Annuler
                            </button>
                        </div>
                        <div className="col">

                            <button onClick={handlSubmite} style={{color:"white",background:"#ee9b57"}} type="button" className="btn w-100" >
                                Enregistrer
                            </button>


                        </div>


                    </div>

                </form>
            </div>
        </div>
    );
}
