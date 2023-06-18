import React, {useEffect, useState} from "react";
import axios from "axios";
export  default  function Paiement(prop){
    const [paiements,setPaiements] = useState([]) ;
    useEffect(()=>{
        axios.post('/api/paiements').then(
            (res) => setPaiements(res.data.paiement)
        )
    },[])
    return (
        <div>
            <div id={"secondHeader"} className="row p-2 d-flex  justify-content-lg-start">
                <div className="col-lg-3  col">
                    <div className="input-group w-100">

                        <button type="button"  className="btn btn-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                        <div id="search-autocomplete" className="form-outline">
                            <input type="search" id="form1" placeholder="rechercher..." className="form-control"/>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row   d-flex justify-content-center"  style={{height:"90%"}}>
                <div className="col-11 "   style={{position:"relative"}}>
                    <div style={{position:"absolute",width:"100%",height:"100%",overflow:"auto"}}>
                        <ListePaieiement  paiements = {paiements}  />
                    </div>

                </div>
            </div>
        </div>
    )
}
function  ListePaieiement(prop){
    return (
        <table className={"table-bordered table"}>
            <thead>
            <tr>
                <th>Abonnement</th>
                <th>Montant payé</th>
                <th>Le reste</th>
                <th>Date de paiement</th>
            </tr>
            </thead>
            <tbody>
            {
                prop.paiements.length? prop.paiements.map((pay)=>{
                    return <tr key={pay.codeP}>
                        <td>
                            <ul>
                                <li>{pay.name}</li>
                                <li>{pay.libelle}</li>
                                <li>durée :{pay.duree} Moins</li>
                            </ul>



                        </td>
                        <td>{pay.montantPaye} dh</td>
                        <td>{pay.montantRestant} dh</td>
                        <td>{pay.datePaiement}</td>
                    </tr>
                }) :
                    <tr  >
                        <td colSpan={"4"} >
                            <div className={"text-center d-flex justify-content-center p-3"}>
                                <div className="spinner-border mx-2"></div> Chargement..
                            </div>
                        </td> </tr>
            }
            </tbody>
        </table>
    )
}
