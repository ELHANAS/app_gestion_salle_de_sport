import React from "react";
import { Link } from "react-router-dom";
import AuthUser from "./authUser";
export default function Header(store){
    const {user} = AuthUser();
    return (
        <div id="header">
        <div  className="  row p-1" >
            <button  onClick={()=>store.ShowMenu()}  className="border-0 d-lg-none btn d-inline-block" style={{width:"50px"}} >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                     className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg></button>

        <h1 className="col-lg-9 col text-center">APP</h1>
        <div className="col-lg-3 col text-end px-3">
            <div className="row justify-content-end d-flex ">
                <Link to="/" className="col-3  text-center m-1" style={{width:"40px" ,textShadow:"2px 2px gray",color:"black",height:"40px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                     className="bi bi-bell-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                </svg>
                </Link>

                <Link to="/" className="col-3  text-center m-1" style={{width:"40px" ,textShadow:"2px 2px gray", color:"black" ,height:"40px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                         className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                </Link>

                <Link to="/" className="col-3   m-1" style={{width:"40px" ,textShadow:"2px 2px gray",height:"40px",color:"black"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                         className="bi bi-gear-fill" viewBox="0 0 16 16">
                        <path
                            d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                </Link>
                <Link to="/" className="  col-3 mx-2">
                    <img src={"users/ANAS.JPG"}  style={{width:"40px",borderRadius:"50%",border:"1PX solid black"}} alt=""/>

                </Link>
            </div>
            <div>

            </div>

        </div>
        </div>
    </div>
    )
}
