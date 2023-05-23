import React, {useEffect, useState} from "react";
import AuthUser from "./authUser";
import {Link} from "react-router-dom";

export  function Profil(){

    const {user,httpData} = AuthUser() ;

    const [image,setImage] = useState('');

    function sendPhoto(e){

        httpData.post('/user/changePhoto/'+user.id,{photo:e.target.files[0]}).then(
            (res) => console.log(res.data)
        );


    }

    return(
        <div style={{overflow:"auto"}}>
        {
            user ?
<div>

                <div className={"row"}>
                    <div className={"col-lg-4"}>
                        <div className="card" style={{width: "100%"}}>
                            <div style={{position:"relative"}} className={"p-3"}>
                            {
                                user.photo ?
                            <img className="card-img-top" src={"users/" + user.photo}   style={{borderRadius:"10px",width:"50%",height:"50%",marginLeft:"25%"}}  alt="Card image cap" />
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
                                        setImage(e.target.files[0]);
                                    }} hidden type={"file"} name={"image"} id={"image"}/>
                                </div>
                            </div>

                                <div className="card-body">
                                    <h3 className="card-title">{user.name}</h3>
                                    <h4>{user.fonction}</h4>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{user.email}</li>
                                    <li className="list-group-item">{user.cin}</li>
                                    <li className="list-group-item">{user.salaire} DH</li>
                                </ul>
                                <div className="card-body">
                                    <Link to="#" className="card-link">Card link</Link>
                                    <Link to="#" className="card-link">Another link</Link>
                                </div>
                        </div>
                            </div>
                <div className={"col-lg-6"}></div>
            </div>
</div>
            :   <h2 className={"text-center"}>Loading..</h2>
        }
</div>
)
}
