import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export  default function Abonnement(prop){
    const [abonnements,setAbonnements] = useState([]) ;
    const [paiements,setPaiements] = useState('');
    useEffect(()=>{
        axios.post('/api/abonnements').then(
            (res) => setAbonnements(res.data.Abonnement)
        )
    },[])
    function  getPaiments(id){
        axios.post('/api/getPaiements/' + id).then(
            (res) => setPaiements(res.data.paiements)
        )
    }

    return(
        <div>
            <div id={"secondHeader"} className="row p-2 d-flex  justify-content-between">
                <div className="col-lg-3  col">
                    <div className="input-group w-100">
                        <div id="search-autocomplete" className="form-outline">
                            <input type="search" id="form1" placeholder="rechercher..." className="form-control"/>
                        </div>
                        <button type="button"  className="btn btn-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="col ">
                    <div className="input-group">
                        <button   className=" btn btn-dark">jour</button>
                        <input type="number" className="form-control " min="1" max="31"/>
                    </div>
                </div>
                <div className="col ">
                    <div className="input-group">
                        <button   className="btn btn-dark">mois</button>
                        <input type="number" className="form-control" min="1" max="12"/>
                    </div>
                </div>
                <div className="col ">
                    <div className="input-group">
                        <button    className="btn btn-dark">annee</button>
                        <input type="number" className="form-control" min="2010"  />
                    </div>
                </div>
                <div className={"col col-lg-3"}>

                    <Link to={"/participants"}    >
                        <button className={"btn"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-plus" viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        Ajouter abonnement
                        </button>
                        </Link>
                </div>
            </div>

            <div className="row  " style={{height:"90%"}}>
                <div className="col-8"  style={{position:"relative"}} >

                    <ListAbonnemt  abonnements={abonnements}  getPaiments = {getPaiments}/>
                </div>
                <div className="col-4">
                    <Detail paiements = {paiements} />
                </div>
            </div>
        </div>
    )
}
function ListAbonnemt(prop){
    const abonnements = prop.abonnements ;
    return (
        <div style={{position:"absolute",width:"100%",height:"100%",overflow:"auto"}}>
            <table className="table table-bordered">
                <thead>
                <tr>
                <th>#</th>
                <th>membre</th>
                    <th>discipline</th>
                <th>date création</th>
                <th>duree</th>
                </tr>
                </thead>
                <tbody>
                {
                    abonnements.length ? abonnements.map((abn)=>{
                        return <tr key={abn.codeA} onClick={()=> prop.getPaiments(abn.codeA)}>
                            <td>{abn.codeA}</td>
                            <td>{abn.name}</td>
                            <td>{abn.libelle}</td>
                            <td>{abn.dateCreationA}</td>
                            <td>{abn.duree} Moins</td>
                        </tr>
                    }):
                    <tr  >
                    <td colSpan={"5)"} >
                <div className={"text-center d-flex justify-content-center p-3"}>
                    <div className="spinner-border mx-2"></div> Chargement..
                </div>
                </td> </tr>
                }
                </tbody>
            </table>
        </div>
    )
}
function Detail(prop){
    return (
        <div  className="profil">
            {
                prop.paiements.length ?
                    <ul>
                        {
                            prop.paiements.map((pay) =>{
                                return <li>
                                    <ul className={'border-bottom p-3'}>
                                        <li> date de paiment : {pay.datePaiement}</li>
                                        <li>Montant payé : {pay.montantPaye} dh</li>
                                        <li>Montant restant : {pay.montantRestant} dh</li>
                                    </ul>
                                </li>
                            })
                        }
                    </ul>
                    :<p>Aucun paiement</p>
            }

        </div>
    )
}

