import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export default function AjouterAbonnement (prop){
    const navigate = useNavigate() ;
    const [dateCreationA,setDateCreationA] = useState('')
    const [message,setMessage] = useState('')
    const [idDiscipline,setIdDiscipline] = useState('')
    const [duree,setDuree] = useState('')
    const [desciplines,setDesciplines] = useState([])
    const [msStyle ,setMsStyle] =useState('success')

    useEffect(()=>{
        axios.post('/api/disciplines').then(
            (res) => setDesciplines(res.data.discipline)
        )
    },[])

    function handlSubmite(){


        axios.post('/api/ajouterAbonnement',{
            'dateCreationA' : dateCreationA ,
            'idMembre' : prop.id ,
            'idDiscipline' : idDiscipline,
            'duree' : duree
        }).then(
            (res)=> {

                setMessage(res.data.message);
                setMsStyle(res.data.style)
               anuller()
                setTimeout(function() {

                    setMessage('')

                }, 3000);

            }

        )

    }
    function  anuller(){
        setDateCreationA('')
        setIdDiscipline('')
        setDuree('');

    }
    return(
        <div style={{position:"relative",height:"100%",width:"100%"}}  className='container p-0'>
            <button className="btn"  style={{position:"absolute",top:"0",right:"0"}} onClick={()=>prop.none(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                     viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>

                {message?
                    <p className={"text-center alert alert-"+msStyle+"   fs-5     py-lg-5 py-1"} style={{position:"absolute",width:"50%",left:"25%", top:"25%",zIndex:"3"}}>{message}
                        <br/>
                        {msStyle === "success"?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>}
                    </p>
                    :null
                }

                <h2 className="h4 text-center m-auto  w-75 p-2 bg-light" style={{borderRadius:"0 0 10px 10px "}} >Ajouter un abonnement</h2>


                <form className={"p-3 w-100  p-lg-5"}>

                        <div className="form-group  py-3 row">
                            <label htmlFor="dat_naiss" className="col-lg-4 col"> Decipline  menu :</label>
                            <select className="form-select col"  value={!idDiscipline ? "choisir la discipline" :null}  name={idDiscipline} onChange={(event)=>setIdDiscipline(event.target.value)}>
                                <option hidden={true} value={""}>choisir la discipline</option>
                                {
                                    desciplines.map((disc)=>{
                                        return   <option key={disc.codeD}  value={disc.codeD}>{disc.libelle}</option>
                                    })
                                }

                            </select>

                        </div>
                        <div className="form-group row py-3">
                            <label htmlFor="dat_naiss" className="col col-lg-4"> Date de creation :</label>
                            <input type="date" value={dateCreationA} onChange={(event)=>setDateCreationA(event.target.value)} className="form-control col" id="dateCreationA" name="dateCreationA"
                                   placeholder="entrer your email" />



                        </div>
                        <div className="form-group row py-3">
                            <label className="form-label col col-lg-4 " htmlFor="password">la durée de l'abonnement  :</label>
                            <select  value={!duree ? "choisir la durée" :null}  className="form-select col" id="duree" name="duree"   onChange={(event)=>setDuree(event.target.value)}>
                               <option hidden={true} value={""}>Choisir la durée</option>
                                <option value={1}>1 Mois</option>
                                <option value={3}>3 Mois</option>
                                <option value={6}>6 Mois</option>
                                <option value={12}>12 Mois</option>
                            </select>

                        </div>


                <div  className="row  w-100  d-flex justify-content-between " style={{position:"absolute",left:"1%",bottom:"1%"}}>

                             <div className="col">
                                <button onClick={anuller} style={{color:"white",background:"#ee9b57"}} type={"button"} className="btn  w-100">
                                    Annuler
                                </button>
                            </div>
                            <div className="col">

                                <button onClick={handlSubmite} style={{color:"white",background:"#ee9b57"}} type="button" className="btn  w-100" >
                                    Enregistrer
                                </button>


                            </div>


                </div>

                </form>

        </div>
    );
}
