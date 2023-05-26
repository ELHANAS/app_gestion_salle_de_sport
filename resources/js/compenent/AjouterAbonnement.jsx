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
                setMessage(res.data);
            navigate(0 )
            }

        )
    }
    return(
        <div style={{position:"relative",height:"100%",width:"100%"}}  className='container p-lg-3  px-lg-5'>
            <button className="btn"  style={{position:"absolute",top:"0",right:"0"}} onClick={()=>prop.none(null)}>
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
                <h2 className="h2 text-center my-4">Ajouter  un Abonnement</h2>

            <form>

                        <div className="form-group  py-3 row">
                            <label htmlFor="dat_naiss" className="col-lg-4"> Decipline  menu :</label>
                            <select className="form-select col" name={idDiscipline} onChange={(event)=>setIdDiscipline(event.target.value)}>
                                <option>choisir la discipline</option>
                                {
                                    desciplines.map((disc)=>{
                                        return   <option key={disc.codeD} value={disc.codeD}>{disc.libelle}</option>
                                    })
                                }

                            </select>
                        </div>
                        <div className="form-group row py-3">
                            <label htmlFor="dat_naiss" className="col col-lg-4"> Date de creation :</label>
                            <input type="date" onChange={(event)=>setDateCreationA(event.target.value)} className="form-control col" id="dateCreationA" name="dateCreationA"
                                   placeholder="entrer your email" />


                        </div>
                        <div className="form-group row py-3">
                            <label className="form-label col col-lg-4 " htmlFor="password">la durée de l'abonnement  :</label>
                            <input type="number" className="form-control col" id="duree" name="duree"  onChange={(event)=>setDuree(event.target.value)}/>
                        </div>


                        <div className="row border " style={{position:"absolute",width:"90%", bottom:"5px"}}>
                            <div className="col">
                                <button style={{color:"white",background:"#ee9b57"}} className="btn  w-100">
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
        </div>
    );
}
