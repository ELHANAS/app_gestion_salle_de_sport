import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import AuthUser from "@/compenent/authUser";
import axios from "axios";

export default function Participant(prop){
    const [participant, setParticipant] = useState(null) ;
    const [participants, setParticipants] =useState([]);
    const [search,setSearch] = useState();
    function Search(){
        if (search){
            axios.post('/api/member/search',{'search' : search}).then(
                (res) => setParticipants(res.data)
            )
        }else{

        }
    }
useEffect(()=>{
    axios.post('/api/participants').then(
        (res) => setParticipants(res.data.membre)
    )
},[])
    function getParticipant(id){
        const part = participants.find((part) => part.id === id) ;
        setParticipant(part) ;
    }

    return (
        <div >
            <div id={"secondHeader"} className="row p-2 d-flex  justify-content-lg-start">
                <div className="col-lg-3  col">
                    <div className="input-group w-100">
                        <div id="search-autocomplete" className="form-outline">
                            <input type="text" id="form1" placeholder="rechercher..." onChange={(event)=> setSearch(event.target.value)} className="form-control"/>
                        </div>
                        <button type="button" onClick={Search} className="btn btn-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={"col col-lg-3"}>
                    <button onClick={()=> prop.ajouterParticipant("participant")} to="#"  className="btn  btn-dark ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
                        </svg>
                        <span className={"ms-3 d-none d-lg-inline"}>  Ajouter participant</span>  </button>
                </div>

            </div>

            <div className="row  "  style={{height:"90%"}}>
                <div className="col-lg-8 col "   style={{position:"relative"}}>
                    <div style={{position:"absolute",width:"100%",height:"100%",overflow:"auto"}}>
                        <ListeParticipant  participants = {participants}  showPartcipant={getParticipant}/>
                    </div>

                </div>
                <div className="col col-lg-4">

                    <Profil participant = {participant}/>
                </div>
            </div>
        </div>
    )
}


function ListeParticipant(prop){



    return(
        <div  >
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Nom & prénom</th>
                    <th>Date de naissance</th>
                </tr>
                </thead>
                <tbody >
                {prop.participants.map((prt) => {
                    return <tr onClick={()=> prop.showPartcipant(prt.id)} key={prt.id}>
                        <td>{prt.id}</td>
                        <td>{prt.name}</td>
                        <td>{prt.dateNss}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
}


function Profil(prop){
    return (
        <>
            {prop.participant ?
                <div  className="profil">
                    <div className="card text-center" style={{width: '100%'}}>
                        <div className={"text-center"}>
                            {prop.participant.photo ?
                                <img className="card-img-top "  style={{width:"200px",height:"200px"}} src={"users/" + prop.participant.photo } alt="Card image cap" />
                                :
                            <img className="card-img-top "  style={{width:"200px",height:"200px"}} src="users/user.jpg" alt="Card image cap" />
                            }
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{prop.participant.name}</li>
                            <li className="list-group-item">{prop.participant.email?prop.participant.email :  "aucun email"}</li>
                            <li className="list-group-item">{prop.participant.tel?prop.participant.tel : "aucun telephone"}</li>
                            <li className="list-group-item">{prop.participant.dateNss}</li>
                        </ul>
                        <div className="card-body">
                            <button   className={"btn"}>Modifier</button>
                            <Link to={'/ListeAbonnement/' +prop.participant.id}  className={"btn"}>+ abonnement</Link>
                        </div>
                    </div>
                </div>
                :     <div  className="profil">

                    <div className="card" style={{width: '100%'}}>
                        <div className={"text-center"}>
                        <img className="card-img-top " style={{width:"100px"}} src="users/user.jpg" alt="Card image cap" />
                        </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Aucun profil selected</li>

                            </ul>

                    </div>
                </div>
            }

        </>
    )
}
