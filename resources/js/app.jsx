import React, {useEffect, useState} from "react";
import {Route, Routes, useHref} from "react-router-dom";
import Employe from "./compenent/employe";
import Home from "./compenent/home";
import Menu from "./compenent/menu";

import Header from "./compenent/header";
import Login from "./compenent/login";
import AuthUser from "./compenent/authUser";
import Register from "./compenent/registre";

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Participant from "@/compenent/participant";
import Abonnement from "@/compenent/listAbonnement";
import Discipline from "@/compenent/discipline";
import AjouterParticipantes from "@/compenent/AjouterParticipantes";
import AjouterAbonnement from "@/compenent/AjouterAbonnement";
import {Profil} from "./compenent/profil";
import axios from "axios";
import AbonnementsdeParticipant from "@/compenent/AbonnementsdeParticipant";
import Paiement from "@/compenent/paiement";
import AjouterPaiement from "@/compenent/ajouterPaiement";
import AjouterDiscipline from "@/compenent/AjouterDicipline";
import Statistique from "@/compenent/statistique";
import Notification from "@/compenent/notification";


 function App(){
    const {getToken,user} = AuthUser();
     const [showE ,setShowE] = useState("none");
     const [showParticipant ,setShowParticipant] = useState("none");
     const [showAbennement ,setShowAbennement] = useState("none");
     const [showDiscipline ,setShowDiscipline] = useState("none");
     const [showPaiement ,setShowPaiement] = useState("none");
     const [opacity ,setOpacity] = useState("1");
     const  [showMenu , setShowMenu] = useState({display: "none"});
     const [showNotification , setShowNotification] = useState("none")


     const [idparticipant , setIdParticipant] = useState(null) ;
     const [idAbonnement , setIdAbonnement] = useState() ;
     const  [random , setRandom] = useState() ;
     const  [notification , setNotification] = useState([]) ;

     function handlShowNotification(){
         if(showNotification === "none"){
             setShowNotification("block")
         }else{
             setShowNotification("none")
         }
     }
     function  ShowMenu(){
         if(showMenu.display === "none"){
             setShowMenu({display: "block",
                 background: "white", zIndex: "2",position:"absolute",width:"250px",height:"93%"})
         }else {
             setShowMenu({display: "none"}) ;
         }

     }
useEffect(()=>{
    console.log("get notificaiton")
    axios.post('/api/notifications').then(
        (res)=>{
            setNotification(res.data) ;
            console.log(res.data)
        }
    );

},[])

     setTimeout(function() {
         console.log("get notificaiton")
         axios.post('/api/notifications').then(
             (res)=>{
                 setNotification(res.data) ;
                 console.log(res.data)
             }
         );

     }, 60000);
     function ajouter(style){

         if(style === "Employe"){
             setShowE("block");
             setOpacity("0.2");
         }
         else if(style === "participant"){
             setShowParticipant("block");
             setOpacity("0.2");
         }
         else if(style === "discipline"){
             setShowDiscipline("block");
             setOpacity("0.2");
         }
         else {
             setRandom(Math.random() * 10);
             setShowE("none");
             setShowDiscipline("none")
             setShowAbennement("none")
             setShowParticipant("none");
             setOpacity("1");
         }


     }
     function  ajouterAbonnement(id){
         setIdParticipant(id)
         if(id){
             setShowAbennement("block");
             setOpacity("0.2");
         }else {
             setRandom(Math.random() * 10);
             setShowE("none");
             setShowAbennement("none")
             setShowParticipant("none");
             setOpacity("1");
         }
     }
     function ajouterPiement(id){
         setIdAbonnement(id) ;
         if (id){

             setRandom(Math.random() * 10);
             setShowPaiement("block");
             setOpacity("0.2");
         }else{
             setRandom(Math.random() * 10);
             setShowPaiement("none");
             setShowE("none");
             setShowAbennement("none")
             setShowParticipant("none");
             setOpacity("1");
         }
     }
     function isObjectEmpty(obj) {
         return Object.keys(obj).length === 0;
     }

    if(!getToken()){
       return (
        <Login />
       )
    }else{


    return (
        <div className={"h-100 w-100"}>
            {
                1?
                    <>
                        <div id="app" style={{opacity:opacity,paddingTop:"70px"}}>
                            <Header ShowMenu={ShowMenu} notification={notification} setShowNotification = {handlShowNotification}/>

                            <div  style={{height:"100%",borderBottom:"10px solid #ee9b57"}}  className="row m-0 ">
                                <div className={"col-lg-3 col-xl-2   d-lg-block  p-0 "} id={"divMenu"} style={showMenu}
                                >
                                    <Menu />
                                </div>

                                <div id="content" className="col-lg-9 col-xl-10 col  p-0 ">


                                    <div id="main" className="m-0 ">
                                        <Routes>
                                            <Route  path="/" element= {<Home  />} />

                                                <Route path="/Employes" element= {<Employe random={random}  ajouterEmploye={ajouter}/>} />
                                                <Route path="/statistiques" element= {<Statistique   />} />


                                            <Route path="/participants" element= {<Participant random={random}  ajouterParticipant={ajouter}/>} />
                                            <Route path="/abonnements" element= {<Abonnement    ajouterAbonnement={ajouter}/>} />
                                            <Route path="/disciplines" element= {<Discipline random={random} ajouter={ajouter}/>}  />
                                            <Route path="/profil" element= {<Profil />} />
                                            <Route path="/paiements" element= {<Paiement  />} />
                                            <Route path="/ListeAbonnement/:id" element= {<AbonnementsdeParticipant  random={random}  ajouterPiement = {ajouterPiement}  ajouterAbonnement ={ajouterAbonnement}/>} />
                                        </Routes>

                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="Ajouter" style={{display:showE}}>
                            <Register none={ajouter}/>
                        </div>
                        <div className="Ajouter" style={{display:showParticipant}}>
                            <AjouterParticipantes none={ajouter}/>
                        </div>

                        <div className="Ajouter" style={{display:showAbennement,overflow:"auto"}}>
                            <AjouterAbonnement none={ajouterAbonnement} id={idparticipant}  />
                        </div>
                        <div className="Ajouter" style={{display:showDiscipline,overflow:"auto"}}>
                            <AjouterDiscipline none={ajouter} />
                        </div>
                        <div className="Ajouter" style={{display:showPaiement,overflow:"auto"}}>
                            <AjouterPaiement random={random}   none = {ajouterPiement}  idAbonnement = {idAbonnement}/>
                        </div>
                            <div id={"notification"} style={{display:showNotification,overflow:"auto"}}>
                                <Notification notification={notification}  none = {handlShowNotification}/>
                            </div>

                    </>:

                      <div style={{width:"100%",height:"100%",position:"absolute"}} className={"bg-white text-center  d-flex justify-content-center align-content-md-center"}>
                              <p className={"text-center"} style={{width:"200",margin:"auto auto" }}><div className="spinner-border mx-2"></div> <br/>Chargement l'application.. <br/>
                                  <img style={{width:"100px",height:"100px"}} src="images/GYM.png" alt=""/>

                              </p>
                      </div>

            }

        </div>
    );
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter >
        <App />
    </BrowserRouter>
)



