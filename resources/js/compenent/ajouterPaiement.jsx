import React, {useState} from "react";



export  default  function AjouterPaiement(prop){
    const [message , setMessage] = useState();
    const [datePaiement , setDatePaiement]  = useState();   

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
                    <p className={"text-center border bg-success border-success p-1"} style={{position:"absolute",width:"90%",color:"white", top:"5px"}}>{message}</p>
                    :null
                }
                <h2 className="h2 text-center my-4">Ajouter  un paiement</h2>

                <div>


                    <div className="form-group row py-3">
                        <label htmlFor="dat_naiss" className="col col-lg-4"> Date de paiement :</label>
                        <input type="date"  className="form-control col" id="datePaiement" name="datePaiement"
                               placeholder="entrer your email" />


                    </div>
                    <div className="form-group row py-3">
                        <label className="form-label col col-lg-4 " htmlFor="password">le montant payé  :</label>
                        <input type="number" className="form-control col" id="montantPaye" name="montantPaye"  />
                    </div>


                    <div className="row border " style={{position:"absolute",width:"90%", bottom:"5px"}}>
                        <div className="col">
                            <button style={{color:"white",background:"#ee9b57"}} className="btn  w-100">
                                Annuler
                            </button>
                        </div>
                        <div className="col">

                            <button onClick={} style={{color:"white",background:"#ee9b57"}} type="button" className="btn  w-100" >
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
                </div>
        </div>

    )
}
