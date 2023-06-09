import React, {useEffect, useState} from "react";
import {Link, useHref, useNavigate} from "react-router-dom";
import AuthUser from "./authUser";

export default function Header(prop){
const  navigate = useNavigate();
    const {user} = AuthUser() ;
const  [noitifcation , setNotification] = useState(prop.notification)
function  change(){
    setNotification([]);
}
    return (
        <div id="header">
        <div  className="  row " >
            <button  onClick={()=>prop.ShowMenu()}  className="border-0 d-lg-none btn d-inline-block"  >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                     className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg></button>
            <h1 className={"h1 col-lg-2 col p-0"} id={"logo"}>    <Link to={"/"}>

    <img style={{width:"100%",height:"70px"}} src={useHref("images/logo.png")} alt="logo"/>
  </Link></h1>

        <h2 className="col-lg-7 col pt-2 d-none d-lg-block  h1 fs-1 text-center" style={{fontStyle:"italic",fontWeight:"bold"}}>{
            location.pathname.toString().slice(1,16) === "ListeAbonnement" ?
                "Liste des abonnments"
                :location.pathname.toString().slice(1) === "Employes"?
                    "Les employés"
                :location.pathname.toString() === "/" ?
                    "Gym management"
                    :
          "Les "+  location.pathname.toString().slice(1)

        }</h2>
        <div className="col-lg-3 col ">
            <div id={"listHeader"} className="row d-flex justify-content-end ">
                <button className={"col-3  btn  text-center  "+
                noitifcation.length?
                    "text-danger btn"
                :" btn"
                }
                        onClick={()=>{prop.setShowNotification();change()}}  style={{position:"relative"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                     className="bi bi-bell-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                </svg>
                    {
                        noitifcation.length?
                            <div className={"text-danger bg-white"} style={{position:"absolute" , top:"20px",right:"10px",width:"20px",height:"20px",borderRadius:"50%",fontSize:"10px"}}> {prop.notification.length}</div>
                            :null
                    }

                </button>

                <button onClick={()=> navigate(-1)} className="col-3 btn   text-center " >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                         className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                </button>

                <button className="col-3 btn   " >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                         className="bi bi-gear-fill" viewBox="0 0 16 16">
                        <path
                            d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                </button>
                <Link to="/profil" className="  col-3 " >
                    {
                        user.photo?
                            <img src={useHref("users/"+ user.photo ) }  style={{width:"40px",height:"40px",borderRadius:"50%",border:"1PX solid black"}} alt=""/>
                            : <img src={"users/user.JPG"}  style={{width:"40px",height:"40px",borderRadius:"50%",border:"1PX solid black"}} alt=""/>
                    }


                </Link>
            </div>


        </div>
        </div>
    </div>
    )
}
