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
                setLibelle("");
                setPrix("");
                navigate(0)
            }

        )
    }
    function Annuler(){
        setMessage('');
        setLibelle("");
        setPrix("");

    }
    return(
        <div style={{position:"relative",height:"100%",width:"100%"}} className='container p-lg-3 px-lg-5'>
            <button className="btn" style={{position:"absolute",top:"0",right:"0"}} onClick={()=>prop.none(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                     viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            <div >
                {message?
                    <p className={"text-center border bg-success border-success p-1"} style={{position:"absolute",width:"90%",color:"white", top:"5px"}}>{message}</p>
                    :null
                }
                <h2 className="h2 text-center my-4">Ajouter un discipline</h2>

                <form>


                    <div className="form-group row py-3">
                        <label className="form-label col col-lg-4 " htmlFor="password">le nome de discipline :</label>
                        <input type="text" className="form-control col" id="libele" name="libele" value={libelle} onChange={(event)=>setLibelle(event.target.value)}/>
                    </div>
                    <div className="form-group row py-3">
                        <label className="form-label col col-lg-4 " htmlFor="password">le prix :</label>
                        <input type="number" className="form-control col" id="prix" name="prix" value={prix} onChange={(event)=>setPrix(event.target.value)}/>
                    </div>



                    <div className="row border " style={{position:"absolute",width:"90%", bottom:"5px"}}>
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
