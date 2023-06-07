import React from "react";
import {Link, useNavigate} from "react-router-dom";

import axios from "axios";

export  default  function Notification(prop){
const  navigate = useNavigate() ;
function  supprimerNot(id){
    axios.post("/api/notification/destory/"+ id).then(
        ()=> navigate(0)
    )
}
    return (
        <div style={{position:"relative",height:"100%",width:"100%"}} className={"text-center "}>

            <p className={"border border-bottom p-2"}style={{background:"#f9a25e"}}>notification</p>
            {
                prop.notification.length?
                    <div  className={" w-100 bg-primary  text-end"}>
                        {    prop.notification.map((not) => {
                            return <div style={{background:'linear-gradient(to top right, #f9a25e,white)'}} className={"row w-100 border-bottom m-0 "} key={not.id}>
                                <Link role={"button"} className={"col-10  p-3 "} onClick={()=>{prop.none()}} to={'/ListeAbonnement/' +not.idMembre} >{not.message}
                                </Link>  <button className={"col-2 btn "} onClick={()=> supprimerNot(not.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                                 </div>



                        })
                        }
                    </div>

                    :<p>Aucun notfication</p>
            }
        </div>
    )
}
