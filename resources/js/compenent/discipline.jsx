import React, {useEffect, useState} from "react";
import {Link, useHref} from "react-router-dom";
import AuthUser from "@/compenent/authUser";
import axios from "axios";


export default function Discipline(prop){
    const [detailDiscipline , setDetailDiscipline] = useState(null);
    const [Disciplines , setDisciplines] = useState([]);
    useEffect(()=>{
        axios.post('/api/disciplines').then(
            (res) => setDisciplines(res.data.discipline)
        )
    },[prop.random])
    function  getDiscipline(id){
        const detail = Disciplines.find((disc) =>  disc.codeD === id)  ;
        setDetailDiscipline(detail) ;
    }

    return (
        <div >
            <div id={"secondHeader"} className="row p-2 d-flex  justify-content-between">
                <div className="col-lg-3  col-8">
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
                <div className={"col col-lg-3 text-end"}>
                    <button onClick={()=> prop.ajouter("discipline")}  className="btn  btn-dark ">

                        + <span className={"ms-3 d-none d-lg-inline"}>  Ajouter Discipline</span>  </button>
                </div>

            </div>
    <div className="row" style={{height:"90%"}}>
                <div className="col col-lg-8 "  style={{position:"relative"}}  >
                    <div className="border"  style={{position:"absolute",width:"100%",height:"100%",overflow:"auto"}}>
                        <ListDiscipline Disciplines = {Disciplines}  getDisciplines = {getDiscipline}   />
                    </div>

                </div>
            <div className="col col-lg-4">
                <DetailDiscipline detail ={detailDiscipline}   />
            </div>
        </div>

        </div>
    )
}


function ListDiscipline(prop){
    return(
        <div  >
            <table className="table ">
                <thead>
                <tr>
                    <th>#</th>
                    <th>libélle</th>
                    <th>Prix</th>

                </tr>
                </thead>
                <tbody >
                {
                    prop.Disciplines.length ? prop.Disciplines.map((disc) =>{
                        return <tr onClick={() => prop.getDisciplines(disc.codeD)} key={disc.codeD} >
                            <td>{disc.codeD}</td>
                            <td>{disc.libelle}</td>
                            <td>{disc.prix}</td>

                        </tr>
                    }):
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



function  DetailDiscipline(prop){
const [entraineurs , setEntraineurs] = useState('') ;

function  getEntrineurs(id){
    if(id === "none"){
        setEntraineurs('');
    }else{
        axios.post('/api/disciplineDetail/' + id).then(
            (res) => setEntraineurs(res.data.entraineurs)
        )
    }

}
console.log(entraineurs)
    return (
        <div className={"w-100 h-100"}>
            {
                prop.detail ?
                    <div>


                                 <div className={"text-center p-5"} >
                                    <div  style={{width: '100%'}}>
                                        <p className={"h2 text-center"}>{prop.detail.libelle}</p>
                                    </div>
                                     <button className={"btn"} onClick={()=>getEntrineurs(prop.detail.codeD)}>Afficher Entraineurs</button>
                                     <button className={"btn"} onClick={()=>getEntrineurs("none")}>cacher Entraineurs</button>
                                     {
                                         entraineurs ?
                                             entraineurs.map((entraineur)=>{
                                                 return     <div className="card text-center" style={{width: '100%'}}>
                                                     <div className={"text-center"}>
                                                         {entraineur.photo ?
                                                             <img className="card-img-top "  style={{width:"200px",height:"200px"}} src={"users/" + entraineur.photo } alt="Card image cap" />
                                                             :
                                                             <img className="card-img-top "  style={{width:"200px",height:"200px"}} src="users/user.jpg" alt="Card image cap" />
                                                         }
                                                     </div>
                                                     <ul className="list-group list-group-flush">
                                                         <li className="list-group-item">{entraineur.name}</li>

                                                     </ul>
                                                 </div>
                                             })
                                         :

                                            null

                                     }
                                </div>
                    </div>:
                    <div style={{width:"100%",height:"100%"}} className={"   d-flex justify-content-center align-content-md-center"}>
                        <img  src='images/GYMM.png' style={{width:"50%",margin:"auto auto" }} alt="logo"/>

                    </div>

            }
        </div>
    )
}



