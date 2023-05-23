import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";


export  default function AbonnementsdeParticipant(prop){
    const idA = useParams() ;
    const id = parseInt(idA.id)
const [participant,setParticipant] = useState('')
    const [abonnemets , setAbonnemets] = useState() ;

    useEffect(()=>{
       const  abns = prop.abonnements.filter((abn) =>abn.idMembre === id  );
const  participant = prop.participants.find((prt)=> prt.id === id) ;
setAbonnemets(abns) ;
        setParticipant(participant) ;

    },[]) ;
    return (<div>
        <div id={"secondHeader"} className="row p-2 d-flex  justify-content-lg-start">

            <div className={"col col-lg-4"}>
                <button onClick={()=>prop.ajouterAbonnement(id)} style={{color:"yellow"}} className="btn  btn-dark ">

                    <span className={"ms-3"}> Ajouter </span>  </button>
            </div>
            <div className={"col col-lg-4"}>
             <h2>{participant.name}</h2>
            </div>

        </div>
        {
            abonnemets ?
                <div>
                    <table className={"table table-bordered"}>
                        <thead>
                        <tr>

                            <th>discipline</th>
                            <th>date de creation</th>

                            <th>la durée</th>
                            <th>Etat</th>
                        </tr>
                        </thead>
                        <tbody>
                    {
                        abonnemets.map((abn) => {

                            return <tr key={abn.codeA}>

                                 <td>{abn.libelle}</td>
                                 <td>{abn.dateCreationA}</td>
                                 <td>{abn.duree}</td>
                                <td>
                                    <button  className={"btn w-75 text-center "}
                                             style={{
                                                 color: abn.etat ===1? 'white' : abn.etat ===2? 'green': 'red',
                                                backgroundColor:" #ef9c57",
                                                 boxShadow:"3px 3px 3px gray"
                                             }}
                                    >
                                        { abn.etat ===1? 'paiement encours' : abn.etat ===2? 'paiement terminer': 'non payé'
                                        }
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                        </tbody>
                    </table>
                </div>
                :null
        }
    </div>)
}
