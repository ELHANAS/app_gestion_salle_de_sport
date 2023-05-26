import React from "react";
import { Link } from "react-router-dom";
import AuthUser from "./authUser";

export default function Menu(){
    const {token,logout} = AuthUser();
    function logoutUser(){
        if(token != undefined){
            logout();
        }
    }
    return(
        <div id="menu" className="text-center ">
            <div >
         <ul  className=" text-start pt-5">
                <li >
                    <Link className="p-2" style={location.pathname === '/'? { borderBottom: "2px solid #ee9b57",color:"#fc7f11"}:{}}  to="/" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-house-fill" viewBox="0 0 16 16">
                            <path
                                d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                        </svg>
                      <span className={"ms-3"}  >Accueil</span>  </Link>

                </li>
                <li  >
                    <Link className="p-2" style={location.pathname === '/Employe'? { borderBottom: "2px solid #ee9b57",color:"#fc7f11"}:{}}  to="/Employe">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-person-rolodex" viewBox="0 0 16 16">
                            <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                            <path
                                d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z"/>
                        </svg>
                        <span className={"ms-3"}> Employé </span></Link>
                </li>
                <li >
                    <Link className="p-2" style={location.pathname === '/participant'? { borderBottom: "2px solid #ee9b57",color:"#fc7f11"}:{}}  to="/participant">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                            <path
                                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                        </svg>
                        <span className={"ms-3"}>Participant </span></Link>
                </li>
                <li>
                    <Link className="p-2"  style={location.pathname === '/abonnement'?{ borderBottom: "2px solid #ee9b57",color:"#fc7f11"}:{}}  to="/abonnement" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-union" viewBox="0 0 16 16">
                            <path
                                d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2z"/>
                        </svg>
                        <span className={"ms-3"}>Abonnement</span></Link>
                </li>
             <li >
                 <Link className="p-2" style={location.pathname === '/Paiement'? { borderBottom: "2px solid #ee9b57",color:"#fc7f11"}:{}}  to="/Paiement" >
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          className="bi bi-currency-exchange" viewBox="0 0 16 16">
                         <path
                             d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                     </svg>
                     <span className={"ms-3"}>Paiement</span></Link>
             </li>
                <li >
                    <Link className="p-2" style={location.pathname === '/disciplines'?{ borderBottom: "2px solid #ee9b57",color:"#fc7f11"}:{}} to="/disciplines" >
                    <i className='fas fa-baseball-ball' ></i>
                        <span className={"ms-3"}> Déscipline de sport</span></Link>
                </li>


            </ul>
            <ul id="downUl"  className="border-top text-start">

                <li className="p-3" >

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
  <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>
                    <span className={"ms-3"} onClick={logoutUser} role={"button"}>Logout</span>
                </li>

            </ul>
            </div>
            </div>
    )
}
