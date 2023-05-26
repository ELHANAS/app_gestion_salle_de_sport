import React, {useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";
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


 function App(){
    const {getToken} = AuthUser();
     const [showE ,setShowE] = useState("none");
     const [showParticipant ,setShowParticipant] = useState("none");
     const [showAbennement ,setShowAbennement] = useState("none");
     const [showDiscipline ,setShowDiscipline] = useState("none");
     const [showPaiement ,setShowPaiement] = useState("none");
     const [opacity ,setOpacity] = useState("1");
     const  [showMenu , setShowMenu] = useState({display: "none"});

     const [numbers , setNumbers] = useState({});

     const [idparticipant , setIdParticipant] = useState(null) ;
     const [idAbonnement , setIdAbonnement] = useState() ;
     function  ShowMenu(){
         if(showMenu.display === "none"){
             setShowMenu({display: "block",
                 background: "white", zIndex: "2",position:"absolute",width:"200px",height:"93%"})
         }else {
             setShowMenu({display: "none"}) ;
         }

     }
useEffect(()=>{
    axios.post('/api/numberUsers').then(
        (res)=> setNumbers(res.data)
    )
},[])
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
             setShowE("none");
             setShowAbennement("none")
             setShowParticipant("none");
             setOpacity("1");
         }
     }
     function ajouterPiement(id){
         setIdAbonnement(id) ;
         if (id){


             setShowPaiement("block");
             setOpacity("0.2");
         }else{
             setShowPaiement("none");
             setShowE("none");
             setShowAbennement("none")
             setShowParticipant("none");
             setOpacity("1");
         }
     }

    if(!getToken()){
       return (
        <Login />
       )
    }else{


    return (
        <div >
            <div id="app" style={{opacity:opacity,paddingTop:"70px"}}>
            <Header ShowMenu={ShowMenu} />

        <div  style={{height:"100%",borderBottom:"10px solid #ee9b57"}}  className="row m-0 ">
            <div className={"col-lg-2   d-lg-block  p-0 "} style={showMenu}
            >
                <Menu />
            </div>

          <div id="content" className="col-lg-10 col  p-0 ">


                    <div id="main" className="m-0 ">
                        <Routes>
                                <Route  path="/" element= {<Home numbers = {numbers} />} />
                                <Route path="/Employe" element= {<Employe   ajouterEmploye={ajouter}/>} />
                                <Route path="/registre" element= {<Register />} />
                            <Route path="/participant" element= {<Participant   ajouterParticipant={ajouter}/>} />
                            <Route path="/abonnement" element= {<Abonnement    ajouterAbonnement={ajouter}/>} />
                            <Route path="/disciplines" element= {<Discipline  ajouter={ajouter}/>}  />
                            <Route path="/profil" element= {<Profil />} />
                            <Route path="/Paiement" element= {<Paiement  />} />
                            <Route path="/ListeAbonnement/:id" element= {<AbonnementsdeParticipant   ajouterPiement = {ajouterPiement}  ajouterAbonnement ={ajouterAbonnement}/>} />

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
                <AjouterPaiement   none = {ajouterPiement}  idAbonnement = {idAbonnement}/>
            </div>


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



