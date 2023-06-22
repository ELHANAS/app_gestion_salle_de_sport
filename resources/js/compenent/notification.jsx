import React, {useEffect, useState} from "react";
import {Link, useHref} from "react-router-dom";

import axios from "axios";

export  default  function Notification(prop){
const  [notification , setNotification] = useState([])
    console.log("notification:" )
    console.log(notification )
useEffect(()=>{
    setNotification(prop.notification )
},[prop.notification])
function  supprimerNot(id){
    axios.post("/api/notification/destory/"+ id).then(
        ()=> {
            setNotification(notification.filter((not) => not.id !== id))
        }
    )
}
    return (
        <div style={{position:"relative",height:"100%",width:"100%"}}  onAuxClick={()=>{
            if(showNotification === "block")
                prop.none()}}  className={"text-center "}>

            <p className={"  p-2 bg-light"}>notification</p>
            {
              notification.length?
                    <div  className={" w-100 bg-primary  text-end"}>
                        {   notification.map((not) => {
                            return <div style={{position:"relative"}} className={"row w-100 bg-white border-bottom text-dark m-0 "} key={not.id}>

                               <div className={"col-2 p-3"} >
                                   <div style={{borderRadius:"50%",overflow:"hidden"}}>

                                   {
                                       not.image?
                                           <img  className={"w-100"}  src={'/users/'+not.image} alt="avatar"/>
                                           :<img  className={"w-100"} src={'/users/user.jpg'} alt="avatar"/>
                                   }

                                   </div>
                               </div>
                                <Link role={"button"} className={"col-8 text-dark text-start p-3 "} onClick={()=>{prop.none()}} to={'/ListeAbonnement/' +not.idMembre} >{not.message}


                                </Link>


                                <button className={"col-2 btn "} onClick={()=> supprimerNot(not.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                                     viewBox="0 0 16 16">
                                    <path
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                                <span style={{position:'absolute',bottom:"1px",color:"gray" ,left:'40px',fontSize:"10px"}} className={" text-start ps-5 w-75"}>{( not.created_at )}</span>
                                 </div>



                        })
                        }
                    </div>

                    :<p>Aucun notfication</p>
            }
        </div>
    )
}
