import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate ,useLocation} from "react-router-dom";



export  default  function AjouterPaiement(prop){

    const  idAbonnement = prop.idAbonnement ;
    const [message , setMessage] = useState('');

    const  [Prix,setPrix] = useState() ;
    const [datePaiement , setDatePaiement]  = useState();
    const [montantPaye , setMontantPaye]  = useState();
    const [montantRestant , setMontantRestant]  = useState();

const  [somme , setSomme] = useState();
    setTimeout(function() {

        setMessage('')

    }, 9000);
function  handlSubmite(){
    axios.post('/api/ajouterPaiement',{
        montantRestant: montantRestant,
        montantPaye : montantPaye,
        datePaiement: datePaiement ,
        idAbonnement: idAbonnement
    }).then(
        (res)=>  {
            setMessage(res.data);
            datePaiement('');
            montantPaye(0);
            setTimeout(function() {
                setMessage('')
            }, 9000);
        }
    )


}

useEffect(()=> {


        axios.post('/api/getPaiements/' + idAbonnement).then(
            (res) =>{

                let numbers = res.data.paiements.map((pay) => pay.montantPaye);
                let restes = res.data.paiements.map((pay) => pay.montantRestant);

                if(restes.lastIndexOf(0) === restes.length -1 || res.data.abonnements[0].etat === 0){
                    numbers = [0];
                }
                else if( restes.indexOf(0) !== -1 ){
                    numbers = numbers.slice(restes.lastIndexOf(0) + 1);
                }

                const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


                    setSomme(sum);

                setPrix(res.data.abonnements[0].prix   * res.data.abonnements[0].duree);
                setId(res.data.abonnements[0].idMembre) ;
                setMessage('');
            }
        )
},[prop.random])


    useEffect(()=>{
        setMontantRestant(Prix - montantPaye - somme) ;
    },[montantPaye])

    function Annuler(){
        setMessage('');
        datePaiement('');
        montantPaye(0);
    }
    return(
        <div style={{position:"relative",height:"100%",width:"100%"}}  className='container p-lg-3  px-lg-5'>
            <button className="btn"  style={{position:"absolute",top:"0",right:"0"}} onClick={()=>prop.none(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                     viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            <div >
                {message?
                    <p className={"text-center alert alert-success   fs-5     py-lg-5 py-1"} style={{position:"absolute",width:"50%",left:"25%", top:"25%",zIndex:"3"}}>{message}
                        <br/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                        </svg>
                    </p>
                    :null
                }


                <div>

                    <div className="form-group row py-3">
                        <label htmlFor="totale" className="col col-lg-4"> Totale :</label>
                        <input type="number" readOnly  className="form-control col" id="totale" name="totaletotale"
                            value={Prix}    />


                    </div>
                    <div className="form-group row py-3">
                        <label htmlFor="mnPaye" className="col col-lg-4"> Montant déja payé :</label>
                        <input type="number" readOnly  className="form-control col" id="mnPaye" name="mnPaye"
                        value={somme} />


                    </div>
                    <div className="form-group row py-3">
                        <label htmlFor="datePaiement" className="col col-lg-4"> Date de paiement :</label>
                        <input type="date" value={datePaiement}  className="form-control col" id="datePaiement" name="datePaiement"
                            onChange={(event) => setDatePaiement(event.target.value)}    />


                    </div>
                    <div className="form-group row py-3">
                        <label className="form-label col col-lg-4 " htmlFor="password">le montant payé  :</label>
                        <input type="number" max={(Prix - somme )} min={0} value={montantPaye} className={ montantPaye > (Prix -somme) ?"form-control col border border-danger":"form-control col border border-2"} id="montantPaye" name="montantPaye"  onChange={(event) =>
                        {
                            if (event.target.value <= (Prix -somme))
                                setMontantPaye(event.target.value)


                        }}/>
                    </div>
                    <div className="form-group row py-3">
                        <label className="form-label col col-lg-4 " htmlFor="montantRestant">le montant Restant  :</label>
                        <input type="number" className="form-control col" readOnly={true} id="montantRestant" name="montantRestant"  value={montantRestant} />
                    </div>


                    <div className="row  " style={{position:"absolute",width:"90%", bottom:"5px"}}>
                        <div className="col">
                            <button onClick={Annuler} style={{color:"white",background:"#ee9b57"}} className="btn  w-100">
                                Annuler
                            </button>
                        </div>
                        <div className="col">

                            <button onClick={handlSubmite}  style={{color:"white",background:"#ee9b57"}} type="button" className="btn  w-100" >
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
                </div>
        </div>

    )
}
