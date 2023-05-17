import React from "react";
export default function AjouterAbonnement (store){
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
                <h2 className="h2 text-center my-4">Ajouter  un Abonnement</h2>

            <form  >

                        <div className="form-group  py-3 row">
                            <label htmlFor="dat_naiss" className="col-lg-4"> Decipline  menu :</label>
                            <select className="form-select col" >
                                <option selected>Deciplines</option>
                                <option value="1">karate</option>
                                <option value="2">tikwando</option>
                                <option value="3">lalalala</option>
                            </select>
                        </div>
                        <div className="form-group row py-3">
                            <label htmlFor="dat_naiss" className="col col-lg-4"> Date de creation :</label>
                            <input type="date" className="form-control col" id="email" name="emailparticipant"
                                   placeholder="entrer your email" value=""/>


                        </div>
                        <div className="form-group row py-3">
                            <label className="form-label col col-lg-4 " htmlFor="password">la durée de l'abonnement  :</label>
                            <input type="number" className="form-control col" id="password-employer" name="password-employer" value="" />
                        </div>


                        <div className="row border " style={{position:"absolute",width:"90%", bottom:"5px"}}>
                            <div className="col">
                                <button style={{color:"#ef9d10f",background:"#3b4d61"}} className="btn  w-100">
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
    );
}
