import React ,{useEffect,useState} from "react";
import axios from "axios";
export default function ModifierEmployer(prop){
    const id = prop.employe ;
    const [employe,setEmploye] = useState('');
    const  [salaire,setSalaire]=useState('');
    const [specialite,setSpecialite] = useState()
    const [disciplines,setDisciplines] = useState([])
    const [message , setMessage] = useState('');
    useEffect(()=>{
        axios.post('/api/user/'+ id).then(
            (res)=>{
                setEmploye(res.data);
     
            }
        )
    },[prop.random]);
    useEffect(()=>{
        axios.post('/api/disciplines').then(
            (res) => setDisciplines(res.data.discipline)
        )
    })
    return(
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


                            <div className="row mt-3 mt-lg-5">
                                <label className="col-lg-4 col text-start form-label">Salaire :</label>
                                <input  type="text" className="form-control form-control-sm col  "
                                        placeholder="000 000"
                                        value={salaire}
                                        name="salaire"
                                        onChange={(event)=> setSalaire(event.target.value)}
                                />
                            </div>
                            <div className="row mt-3 mt-lg-5 ">
                                <label className="col-lg-4 col text-start form-label ">spécialité :</label>

                                <select className="form-select col"

                                        onChange={(event)=> setSpecialite(event.target.value)}>
                                    <option value={""}>Choisir la fonction</option>
                                    {
                                        disciplines?
                                            disciplines.map((disc)=>{
                                                return    <option key={disc.codeD} value={disc.codeD}>{disc.libelle}</option>
                                            })
                                            :null
                                    }

                                    <option value={"Entraîneur"}>entraîneur</option>
                                    <option value={"Admin"}>admin</option>
                                </select>


                            </div>



                 </div>
                <div  className="row  w-100  d-flex justify-content-between " style={{position:"absolute",left:"1%",bottom:"1%"}}>
                    <div className="col">
                        <button  style={{color:"white",background:"#ee9b57"}} className="btn  w-100">
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
