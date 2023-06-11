import React, {useEffect, useState} from "react";
import AuthUser from "./authUser";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export  function Profil(){

    const {user,httpData} = AuthUser() ;
const  navigate = useNavigate();
    const [me,setMe] = useState('');
    const [random,setRandom] = useState('');

    function sendPhoto(e){

        httpData.post('/user/changePhoto/'+user.id,{photo:e.target.files[0]}).then(
            ()=> setRandom(Math.random() *10)
        )



    }
    useEffect(()=>{
        axios.post(`/api/user/${user.id}`).then(
            (res)=> setMe(res.data)
        )
    })

    return(
       <div>
        <div id={"secondHeader"}  className="row p-2 d-flex  justify-content-between">

        </div>
        <div style={{overflow:"auto",height:"90%",width:"100%"}}>

        {
            me ?
<div className={"w-100"}>

                <div className={"row w-100 border "}>
                    <div className={"col-lg-4 col-md-7 col-12  border"} >
                        <div className="card" style={{width: "100%"}}>
                            <div style={{position:"relative"}} className={"p-3"}>
                            {
                                me.photo ?
                            <img className="card-img-top" src={"users/" + me.photo}   style={{borderRadius:"10px",width:"50%",height:"50%",marginLeft:"25%"}}  alt="Card image cap" />
                                : <img className="card-img-top" src={"users/user.JPG"}  style={{borderRadius:"10px",width:"50%",height:"50%",marginLeft:"25%"}} alt="Card image cap" />
                                }
                                <div>
                                    <label role={"button"} htmlFor={"image"}
                                           style={{position: "absolute", top: "5px", right: "5px"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                             fill="currentColor"
                                             className="bi bi-camera-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                            <path
                                                d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                                        </svg>
                                    </label>
                                    <input onChange={(event) => {
                                        sendPhoto(event);

                                    }} hidden type={"file"} name={"image"} id={"image"}/>
                                </div>
                            </div>

                                <div className="card-body">
                                    <h3 className="card-title">{me.name}</h3>
                                    <h4>{user.fonction}</h4>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{me.email}</li>
                                    <li className="list-group-item">{me.cin}</li>
                                    <li className="list-group-item">{me.salaire} DH</li>
                                </ul>

                        </div>
                            </div>
                <div className={"col-lg-6"}></div>
            </div>
</div>
            :   <h2 className={"text-center h6"}>

                        <div className="spinner-border mx-2"></div> Chargement..

                </h2>
        }
</div>
       </div>
)
}
