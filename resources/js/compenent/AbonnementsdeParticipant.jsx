import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";


export  default function AbonnementsdeParticipant(prop){
    const {id} = useParams() ;


const [participant,setParticipant] = useState('')
    const [abonnemets , setAbonnemets] = useState([]) ;
    useEffect(()=>{

       axios.post('/api/getAbonnement/' +parseInt(id) ).then(
           (res)=> {
               setAbonnemets(res.data.abonnements);
               setParticipant(res.data.participant);
           }
       )

    },[id]) ;
    return (<div>
        <div id={"secondHeader"} className="row p-2 d-flex  justify-content-between">
            <div className={"col col-lg-4"}>
                <h2 style={{borderLeft:"6px solid #ee9b57"}} className={"text-start ps-2"}>{participant.name}</h2>
            </div>
            <div className={"col col-lg-4 text-end"}>
                <button onClick={()=>prop.ajouterAbonnement(id)}  className="btn  ">

                    <span className={"ms-3"}>+ Ajouter  Abonnement</span>  </button>
            </div>


        </div>
        <div style={{height:"90%"}}>
        {
            abonnemets.length ?
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
                                    <button onClick={()=> prop.ajouterPiement(abn.codeA)} className={"btn w-75 text-center "}
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
        </div>
    </div>)
}
