import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Register from "./registre";
import AuthUser from "./authUser";
import axios from "axios";

export default function Employe(store){
    const [employe , setEmploye] = useState({});
function getEmploye(id){
    axios.post('/api/user/'+id).then(
        (res)=> setEmploye(res.data)
    )
}
    return (
        <div >
            <div style={{background:"yellow",borderBottom:"10px solid black"}}  className="row p-2 d-flex  justify-content-lg-start">
                <div className="col-lg-3  col">
                    <div className="input-group w-100">
                        <div id="search-autocomplete" className="form-outline">
                            <input type="search" id="form1" placeholder="rechercher..." className="form-control"/>
                        </div>
                        <button type="button" style={{background:"#3b4d61"}}  className="btn ">
                            <i  style={{color:"white"}} className="fas  fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className={"col col-lg-3"}>
                    <button onClick={()=>store.ajouterEmploye("Employe")} style={{color:"white",background:"#3b4d61"}} className="btn   ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
                        </svg>
                        <span className={"ms-3"}> Ajouter Emlpyé</span>  </button>
                </div>

            </div>
            <div className="row  "  style={{height:"90%"}}>
                <div className="col-lg-7 col"   style={{position:"relative"}}>
                    <div style={{position:"absolute",width:"100%",height:"100%",overflow:"auto"}}  >
                        <ListeEmlpoye  showEmploye = {getEmploye}/>
                    </div>

                </div>
                <div className="col col-lg-5">
                    <Profil employe = {employe}/>
                </div>
            </div>

        </div>
    )
}


function ListeEmlpoye(store){
    const [employes , setEmployes] =useState([]);

    const {http} = AuthUser();
    useEffect(()=>{
            console.log("res");
        axios.post('/api/users').then(
            (res)=> {
                setEmployes(res.data);
            console.log(res)

            }
        );
        }
        ,[]
    )
    console.log(employes)
    return(

        <div>
            <table className="table table-hover table-bordered " >
                <thead>
                    <tr>
                       <th>id</th>
                       <th>Nom & prénom</th>
                       <th>Fonction</th>
                    </tr>
                </thead>
                <tbody >
                {employes.map((emp) => {
                    return <tr onClick={()=> store.showEmploye(emp.id)} key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.fonction}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
}


function Profil(store){
    const employe = store.employe ;
    return (
        <div  className="profil">
        {employe?
               <div>
                    <p className={"h2 text-center"}>{employe.name}</p>
                    <div className="row">
                        <div className={"col"}>
                            <div id="imageProf" className="border m-4" style={{width:"150px",height:"150px",borderRadius:"50%"}}>
                                <img style={{width:"150px",height:"150px",borderRadius:"50%"}} src={"users/ANAS.JPG"} className="w-100" alt=""/>
                            </div>
                            <p className={"text-center"}>{employe.fonction}</p>
                        </div>
                        <div className={"col p-lg-5"}>

                            <p>{employe.email}</p>
                            <p>{employe.cin}</p>
                            <p>{employe.salaire} dh</p>
                        </div>
                    </div>
               </div>
                :null
        }
        </div>

    );
}
