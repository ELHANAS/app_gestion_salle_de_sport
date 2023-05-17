import React, {useState} from "react";
import AuthUser from "./authUser";
import {useNavigate} from "react-router-dom"
import axios from "axios";
export default function AjouterParticipantes (store){
const {http} = AuthUser() ;

    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [tel,setTel] = useState('');
    const [dateNss,setDateNss] = useState('');
    const [image,setImage] = useState();
    const [message , setMessage] = useState('');


    function submite(e){
        const formD = new FormData();
        formD.append("image",image);
        formD.append("email",email);
        formD.append("name",name);
        formD.append("tel",tel);
        formD.append("dateNss",dateNss);
        console.log(formD)
        http.post('AjouterParticipant',formD).then(
            (res)=> {
                setMessage(res.data);
                setTel("");
                setDateNss("");
                setName("");
                setEmail("");
            }
        );


        e.preventDefault() ;
    }
    function  Annuler(){
        setMessage('');
        setTel("");
        setDateNss("");
        setName("");
        setEmail("");
    }
    return(
        <div style={{position:"relative",height:"100%",width:"100%"}}  className='container p-lg-3  px-lg-5'>
            <button className="btn"  style={{position:"absolute",top:"0",right:"0"}} onClick={()=>store.none("none")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                     viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>

            <div >
                {message?
                    <p className={"text-center border bg-success border-success p-1"} style={{position:"absolute",width:"90%",color:"white", top:"5px"}}>{message}</p>
                    :null
                }
                <h2 className="h2 text-center my-4">Ajouter  un participant</h2>
                <form onSubmit={(event) => submite(event)}>

                        <div className="form-group  py-2 row">
                            <label className="col-lg-4 col" htmlFor="name">Name : </label>
                            <input type="text" className="form-control  col" id="name"
                                   name="name" placeholder="entrer your  Name ..."
                            value={name}
                                   onChange={(event)=> setName(event.target.value)}
                            />
                        </div>
                        <div className="form-group py-3 row mt-3">
                            <label htmlFor="dat_naiss" className="col-lg-4 col"> Email :</label>
                            <input type="email" className="form-control col" id="email" name="emailparticipant"
                                   placeholder="entrer your email"
                                   onChange={(event)=> setEmail(event.target.value)}
                            value={email}/>


                        </div>
                        <div className="form-group row py-3">
                            <label className="form-label col-lg-4 col" htmlFor="tele">Telephone
                            :</label>
                            <input type="tel" className="form-control col" id="tel" name="tel"
                                   onChange={(event)=> setTel(event.target.value)}
                            value={tel}/>
                        </div>
                        <div className="form-group row py-3">
                            <label htmlFor="dat_naiss" className="col-lg-4 col">Date de Naissance :</label>
                            <input type="date" className="form-control col" id="dat_naiss" name="dat_naiss"
                                   placeholder="entrer your dat_naiss"
                                   onChange={(event)=> setDateNss(event.target.value)}
                            value={dateNss}/>


                        </div>



                            <div className="form-group row py-3">
                                <label htmlFor="photo" className="col-lg-4 col">Photo :</label>
                                <input type="file" className="form-control col" id="photo" name="photo"
                                       onChange={(event) => setImage(event.target.files[0])}
                                      />

                            </div>


                    <div className="row border " style={{position:"absolute",width:"90%", bottom:"5px"}}>
                        <div className="col">
                            <button  onClick={Annuler} style={{color:"#ef9d10f",background:"#3b4d61"}} className="btn  w-100">
                                Annuler
                            </button>
                        </div>
                        <div className="col">

                            <button style={{color:"#ef9d10f",background:"#3b4d61"}} type="submit" className="btn  w-100" >
                                Enregistrer
                            </button>


                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
