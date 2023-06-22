import React, {useEffect, useState} from "react";
import AuthUser from "./authUser";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export  function Profil(prop){

    const {user,httpData} = AuthUser() ;
const  navigate = useNavigate();
    const [me,setMe] = useState('');
    const [random,setRandom] = useState('');
    const  [show,setShow] = useState('none');

    function sendPhoto(e){

        httpData.post('/user/changePhoto/'+user.id,{photo:e.target.files[0]}).then(
            ()=> setRandom(Math.random() *10)
        )



    }
    function modifier(style){
        setRandom(Math.random() * 100);
        setShow(style);

    }
    useEffect(()=>{
        axios.post(`/api/user/${user.id}`).then(
            (res)=> setMe(res.data)
        )
    },[random])

    return(
       <div >
        <div id={"secondHeader"}  className="row p-2 d-flex  justify-content-between">

        </div>
        <div style={{overflow:"auto",height:"90%",width:"100%",position:"relative"}}>

        {
            me ?
            <div className={"w-100 row m-auto"} >
                <div className={"col-lg-4 col"} style={{position:"relative"}}>
                    <div className={"border"} style={{position:"absolute",top:"30px",left:"30px",width:"150px",height:"150px"}}>
                            <div className={"w-100  h-100"} style={{position:"relative"}}>
                        {
                            me.photo ?
                                <img className="w-100 h-100" src={"users/" + me.photo}     alt="Card image cap" />
                                : <img className="w-100 h-100" src={"users/user.JPG"}   alt="Card image cap" />
                        }
                                <div>
                                    <label role={"button"} className={"text-white text-center"} htmlFor={"image"}
                                           style={{position: "absolute",width:"30px",height:"25px",borderRadius:"5px",background:'black', bottom: "5px", left: "5px"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
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
                        <li className="list-group-item">{me.salaire} DH</li>
                    </div>

                </div>
                <div className={"col"}>
                                    <h3 className="border-start h-1 border-5 border-dark m-5 mb-0 p-3">{me.name}</h3>
                                    <h4 className="border-start border-5 border-success mx-5  p-3">{user.fonction}</h4>

                                <ul >
                                    <li className="border-start border-5 border-dark mx-5 mt-2 ps-5 p-1">{me.email}</li>
                                    <li className="border-start border-5 border-success mx-5  ps-5 p-1">{me.cin}</li>
                                    <li className="border-start border-5 border-dark mx-5  ps-5 p-1">{me.tel}</li>

                                    <li>
                                        <button onClick={()=>modifier('block')} className={"btn btn-dark m-5  "}>modifier</button>
                                    </li>
                                </ul>
                </div>

            </div>
            :   <h2 className={"text-center p-5 m-5 h6"}>

                        <div className="spinner-border mx-2"></div> Chargement..

                </h2>
        }
            <div className="Ajouter" style={{display:show,right:"0"}}>
                <ModifierUserr random={random} user={me} none={modifier} />
            </div>
</div>

       </div>
)
}


function ModifierUserr(prop){
    const  user = prop.user;
    const [email,setEmail] = useState();
    const [Npassword,setNpassword] = useState();
    const [oldPassword,setOldPassword] = useState();
    const  [confirmPassword ,setConfirmPassword] = useState();
    const [message,setMessage] = useState('')
    const [msStyle ,setMsStyle] =useState('success')

    useEffect(()=>{
        setEmail(user.email);
    },[prop.random]);
    function  handlSubmit(){
        if(Npassword === confirmPassword) {
            axios.post('/api/update/me', {
                email: email,
                id: user.id,
                NouveauPass: Npassword,
                oldPassword: oldPassword
            }).then(
                (res) => {
                    console.log(res.data)
                    setMessage(res.data.message);
                    setMsStyle(res.data.style)

                    setTimeout(function() {

                        setMessage('')

                    }, 3000);
                }
            )
        }
    }
    return (

        <div style={{position:"relative",height:"100%",width:"100%"}}  className='container p-0'>
            <button className="btn"  style={{position:"absolute",top:"0",right:"0"}} onClick={()=>prop.none("none")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                     viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            {message?
                <p className={"text-center alert alert-"+msStyle+"   fs-5     py-lg-5 py-1"} style={{position:"absolute",width:"50%",left:"25%", top:"25%",zIndex:"3"}}>{message}
                    <br/>
                    {msStyle === "success"?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>:
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                            <path
                                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>}
                </p>
                :null
            }
            <h2 className="h4 text-center m-auto  w-75 p-2 bg-light" style={{borderRadius:"0 0 10px 10px "}} >modifier mes informations personnelles</h2>

            <div className={"p-5"}>

                <label className={"form-label"} htmlFor="email">Email :</label>
                <input className={"form-control"} type="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
                <label className={"form-label"} htmlFor="password">Mot de passe actuel :</label>
                <input className={"form-control"} type={"password"}  onChange={(event)=>setOldPassword(event.target.value)}/>
                <label className={"form-label"} htmlFor="password">nouveau mot de passe :</label>
                <input className={"form-control"} type={"password"} onChange={(event)=>setNpassword(event.target.value)}/>
                <label className={"form-label"} htmlFor="password">Confirmez le mot de passe :</label>
                <input className={"form-control"} type={"password"} onChange={(event)=>setConfirmPassword(event.target.value)}/>
            </div>
            <div  className="row  w-100  d-flex justify-content-between " style={{position:"absolute",left:"1%",bottom:"1%"}}>
                <div className="col">
                    <button style={{color:"white",background:"#ee9b57"}} type={"button"} className="btn w-100">
                        Annuler
                    </button>
                </div>
                <div className="col">

                    <button onClick={handlSubmit}  style={{color:"white",background:"#ee9b57"}} type="button" className="btn w-100" >
                        Enregistrer
                    </button>


                </div>


            </div>
        </div>
    )
}
