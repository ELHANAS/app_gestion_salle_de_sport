import React, {useState} from "react";
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


 function App(){
    const {getToken} = AuthUser();
     const [showE ,setShowE] = useState("none");
     const [showParticipant ,setShowParticipant] = useState("none");
     const [showAbennement ,setShowAbennement] = useState("none");
     const [opacity ,setOpacity] = useState("1");
    const  [showMenu , setShowMenu] = useState("d-none")
     const  menu = document.getElementById("menu")
     function  ShowMenu(){
        if(showMenu === "d-none"){
            setShowMenu("d-block position-absolute w-25 h-75")
            menu.style.height = "97%";

        }else {
            setShowMenu("d-none")
            menu.style.height = "100%";
        }
console.log("done")
     }
     function ajouter(style){
        if(style === "abonnement"){
            setShowAbennement("block");
            setOpacity("0.2");
        }
        else if(style === "Employe"){
             setShowE("block");
             setOpacity("0.2");
         }
         else if(style === "participant"){
             setShowParticipant("block");
             setOpacity("0.2");
         }
        else {
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
            <div id="app" style={{opacity:opacity}}>
            <Header ShowMenu={ShowMenu} />

        <div  style={{height:"93%"}}  className="row m-0 ">
            <div className={"col-lg-2   d-lg-block  p-0 " + showMenu}
            >
                <Menu />
            </div>

          <div id="content" className="col-lg-10 col  p-0 ">


                    <div id="main" className="m-0 ">
                        <Routes>
                                <Route path="/" element= {<Home />} />
                                <Route path="/Employe" element= {<Employe ajouterEmploye={ajouter}/>} />
                                <Route path="/registre" element= {<Register />} />
                            <Route path="/participant" element= {<Participant ajouterParticipant={ajouter}/>} />
                            <Route path="/abonnement" element= {<Abonnement  ajouterAbonnement={ajouter}/>} />
                            <Route path="/disciplines" element= {<Discipline />} />


                            </Routes>
                        <div className="bg-dark" style={{height:"10px"}}></div>
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
            <div className="Ajouter" style={{display:showAbennement}}>
                <AjouterAbonnement none={ajouter}/>
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



