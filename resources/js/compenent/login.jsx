import React, { useState } from 'react'
import "./login.css"
import AuthUser from './authUser';
import {useHref} from "react-router-dom";
export default function Login(){
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [message , setMessage] = useState(null);
    function submite(e){
            http.post('/login',{email : email,password:password}).then(
                (res)=> setToken(res.data.user, res.data.access_token)


            ).catch(
                (res) => setMessage(res.response.data.error)
            );
            e.preventDefault() ;
    }
    return (
        <div  style={{position:"fixed",top:"0",bottom:"0",left:"0",right:"0"}}>

        <div  className='form-box'>

            <h1 className="h1 text-center  mb-2">
                <img style={{width:"100px"}} src={useHref('images/1685796041675.png')} alt="logo"/> <br/>
                <small className={"h1"} style={{color:"#ef9c57"}}>B</small>ienvenue !


            </h1>


                 <form  style={{position:"absolute",bottom:"40px",right:"50px",left:"50px"}} onSubmit={(event)=>submite(event)}>
                     <label htmlFor={"email"}>Email :</label>
                        <input type="email" placeholder="Email Address"
                               id={"email"}
                        className="form-control   "
                         name="email"  onChange={(event)=> setEmail(event.target.value)}
                         required  autoFocus />
                     <p className={"text-danger ps-2 mb-3"} style={{height:"10px"}}>
                         {
                             message? message : null
                         }
                     </p>
                     <label htmlFor={"password"}>Mot de passe :</label>
                          <input  type="password" className="form-control  "
                                  id={"password"}
                           name="password"
                                  placeholder={"A3JSD/@al"}
                           onChange={(event)=> setPassword(event.target.value)}
                             />


                            <div  className=" boreder mb-0">

                                    <button  type="submit" className="btn" >
                                        connecté
                                    </button>

                            </div>
                        </form>
        </div>
        </div>
    )
}
