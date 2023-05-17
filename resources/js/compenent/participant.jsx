import React from "react";
import { Link } from "react-router-dom";

export default function Participant(store){
    return (
        <div >
            <div style={{background:"yellow",borderBottom:"10px solid black"}} className="row p-2 d-flex  justify-content-lg-start">
                <div className="col-lg-3  col">
                    <div className="input-group w-100">
                        <div id="search-autocomplete" className="form-outline">
                            <input type="search" id="form1" placeholder="rechercher..." className="form-control"/>
                        </div>
                        <button type="button"  className="btn btn-dark">
                            <i  style={{color:"yellow"}} className="fas  fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className={"col col-lg-3"}>
                    <button onClick={()=> store.ajouterParticipant("participant")} to="#" style={{color:"yellow"}} className="btn  btn-dark ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
                        </svg>
                        <span className={"ms-3"}> Ajouter participant</span>  </button>
                </div>

            </div>

            <div className="row  "  style={{height:"90%"}}>
                <div className="col-lg-7 col "   style={{position:"relative"}}>
                    <div style={{position:"absolute",width:"100%",height:"100%",overflow:"auto"}}>
                        <ListeEmlpoye />
                    </div>

                </div>
                <div className="col col-lg-5">
                    <Profil />
                </div>
            </div>
        </div>
    )
}


function ListeEmlpoye(){
    return(
        <div  >
            <table className="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Nom & prénom</th>
                    <th></th> </tr>
                </thead>
                <tbody >
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td></td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas  SS elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas  SS elhandouz</td>
                    <td>entr</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>anas   TT SS elhandouz</td>
                    <td>entr</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}


function Profil(){
    return (
        <div  className="profil">
            <p className={"h2 text-center"}>anas elhandouz</p>
            <div className="row">
                <div className={"col"}>
                    <div id="imageProf" className="border m-4" style={{width:"150px",height:"150px",borderRadius:"50%"}}>
                        <img  style={{width:"150px",height:"150px",borderRadius:"50%"}} src={"users/ANAS.JPG"} className="w-100" alt=""/>
                    </div>
                    <p className={"text-center"}>Fonction</p>
                </div>
                <div className={"col p-lg-5"}>

                    <p>anaselhandouz@gmail.com</p>
                    <p>07 37 37 94 47</p>
                    <p>03/03/1998</p>
                </div>
            </div>
        </div>
    )
}
