import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Register from "./registre";
import AuthUser from "./authUser";
import axios from "axios";

export default function Employe(prop){
    const  navigate = useNavigate();
    const [employe , setEmploye] = useState(null);
    const [employes , setEmployes]  = useState([]);
    const [search,setSearch] = useState(null);

    function Search(){

            axios.post('/api/user/search',{'search' : search}).then(
                (res) => setEmployes(res.data)
            )

    }
    useEffect(()=>{
        axios.post('/api/users').then(
            (res) =>{ setEmployes(res.data.user)}

    )
    },[prop.random])
function getEmploye(id){
    const  emp = employes.find((emp) => emp.id === id);
    setEmploye(emp);
}

    return (
        <div >
            <div id={"secondHeader"}  className="row p-2 d-flex  justify-content-between">
                <div className="col-lg-3  col-8">
                    <div className="input-group text-end w-100">

                        <button type="button"  onClick={Search}  className="btn ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                        <div id="search-autocomplete" className="form-outline">
                            <input type="search" id="form1" onChange={(event)=> setSearch(event.target.value)}
                                   placeholder="rechercher..." className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className={"col col-lg-3 text-end"}>
                    <button onClick={()=>prop.ajouterEmploye("Employe")}  className="btn   ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
                        </svg>
                        <span className={"ms-3 d-none d-lg-inline"}> Ajouter Emlpyé</span>  </button>

                </div>

            </div>
            <div className="row  "  style={{height:"90%"}}>
                <div className="col-lg-8 col"   style={{position:"relative"}}>
                    <div style={{position:"absolute",width:"100%",height:"100%",overflow:"auto"}}  >
                        <ListeEmlpoye  showEmploye = {getEmploye} employes= {employes}/>
                    </div>

                </div>
                <div className="col col-lg-4">
                    <Profil employe = {employe} />
                </div>
            </div>

        </div>
    )
}


function ListeEmlpoye(prop){


    return(

        <div>
            <table className="table table-hover table-bordered " >
                <thead>
                    <tr>
                       <th>#</th>
                       <th>Nom & prénom</th>
                       <th>Fonction</th>
                    </tr>
                </thead>
                <tbody >
                {prop.employes.length ?prop.employes.map((emp) => {
                    return <tr onClick={()=> prop.showEmploye(emp.id)} key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.fonction}</td>
                    </tr>}) :

                   <tr  >
                      <td colSpan={"3"} >
                          <div className={"text-center d-flex justify-content-center p-3"}>
                              <div className="spinner-border mx-2"></div> Chargement..
                          </div>
                          </td> </tr>
                }
                </tbody>
            </table>
        </div>
    );
}


function Profil(prop){
    const employe = prop.employe ;
    const {user} = AuthUser();
    return (
        <div  className="profil">
        {employe?

                <div className="card text-center" style={{width: '100%'}}>
                    <div className={"text-center"}>
                        {employe.photo ?
                            <img className="card-img-top "  style={{width:"200px",height:"200px"}} src={"users/" + employe.photo } alt="Card image cap" />
                            :
                            <img className="card-img-top "  style={{width:"200px",height:"200px"}} src="users/user.jpg" alt="Card image cap" />
                        }
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{employe.name}</li>
                        <li className="list-group-item">{employe.fonction}</li>
                        <li className="list-group-item">{employe.cin}</li>
                        <li className="list-group-item">{employe.email}</li>
                        <li className="list-group-item">{employe.tel?employe.tel : "aucun telephone"}</li>
                    </ul>

            </div>
                :

                <div style={{width:"100%",height:"100%"}} className={"   d-flex justify-content-center align-content-md-center"}>
                    <img  src='images/GYMM.png' style={{width:"50%",margin:"auto auto" }} alt="logo"/>

                </div>

        }
        </div>

    );
}
