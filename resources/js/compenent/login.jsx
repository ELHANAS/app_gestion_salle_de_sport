import React, { useState } from 'react'
import "./login.css"
import AuthUser from './authUser';
export default function Login(){
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function submite(e){
            http.post('/login',{email : email,password:password}).then(
                (res)=> setToken(res.data.user, res.data.access_token)
            );
            e.preventDefault() ;
    }
    return (
        <div  className='form-box'>
            <h1 className="h1 text-center mb-5">Connexion</h1>
                 <form onSubmit={(event)=>submite(event)}>
                        <input type="email" placeholder="Email Address"
                        className="form-control  my-3 "
                         name="email"  onChange={(event)=> setEmail(event.target.value)}
                         required  autoFocus />
                          <input  type="password" className="form-control  "
                           name="password" autocomplete
                           onChange={(event)=> setPassword(event.target.value)}
                             />


                            <div className="row mb-0">
                                <div className="col">
                                    <button type="submit" className="btn btn-primary" >
                                    connexion
                                    </button>

                                </div>
                            </div>
                        </form>
        </div>
    )
}
