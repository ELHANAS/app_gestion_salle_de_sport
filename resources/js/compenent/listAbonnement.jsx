import React from "react";
import { Link } from "react-router-dom";


export  default function Abonnement(store){

    return(
        <div>
            <div style={{background:"#ef9d10f",borderBottom:"10px solid black"}} className="row p-2 d-flex  justify-content-lg-start">
                <div className="col-lg-3  col">
                    <div className="input-group w-100">
                        <div id="search-autocomplete" className="form-outline">
                            <input type="search" id="form1" placeholder="rechercher..." className="form-control"/>
                        </div>
                        <button type="button"  className="btn btn-dark">
                            <i  style={{color:"#ef9d10f",background:"#3b4d61"}} className="fas  fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className={"col col-lg-3"}>
                    <button role="button" onClick={()=> store.ajouterAbonnement("abonnement")} className="btn btn-dark" style={{color:"#ef9d10f",background:"#3b4d61"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-plus" viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        Ajouter abonnement</button>
                </div>
                <div className="col ">
                    <div className="input-group">
                        <button  style={{color:"#ef9d10f"}} className=" btn btn-dark">jour</button>
                        <input type="number" className="form-control " min="1" max="31"/>
                    </div>
                </div>
                <div className="col ">
                    <div className="input-group">
                        <button  style={{color:"#ef9d10f"}} className="btn btn-dark">mois</button>
                        <input type="number" className="form-control" min="1" max="12"/>
                    </div>
                </div>
                <div className="col ">
                    <div className="input-group">
                        <button   style={{color:"#ef9d10f"}} className="btn btn-dark">annee</button>
                        <input type="number" className="form-control" min="2010"  />
                    </div>
                </div>

            </div>

            <div className="row  " style={{height:"90%"}}>
                <div className="col-8"  style={{position:"relative"}} >

                    <ListAbonnemt />
                </div>
                <div className="col-4">
                    <Detail />
                </div>
            </div>
        </div>
    )
}
function ListAbonnemt(){
    return (
        <div style={{position:"absolute",width:"100%",height:"100%",overflow:"auto"}}>
            <table className="table table-light">
                <thead>
                <tr>
                <th>code</th>
                <th>membre</th>
                <th>date création</th>
                <th>duree</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>1</td>
                <td>mombre1</td>
                <td>03/04/2023</td>
                <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                <tr>
                    <td>1</td>
                    <td>mombre1</td>
                    <td>03/04/2023</td>
                    <td>3</td></tr>
                </tbody>
            </table>
        </div>
    )
}
function Detail(){
    return (
        <div  className="profil">
            <p>anas elhandouz</p>
            <p>03/03/2023</p>
            <p>Durée :<span>3</span> Mois</p>
            <p>Déscipines</p>
            <ul>
                <li>musculation   <span>130</span>dh</li>
                <li>KARATE   <span>130</span>dh</li>
                <li>box   <span>130</span>dh</li>
            </ul>
            <p>Totale : <span>1400</span></p>
            <p>Date fin :</p>
        </div>
    )
}

