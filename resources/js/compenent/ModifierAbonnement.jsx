import React from "react";
export default function AjouterAbonnement (){
    return(
        <>
            <div className="p-5">
                <h3 className={"my-5 text-center "} style={{color:"#BC2D00"}} ><span className={""} > Modifier  un Abonnement </span> </h3>
                <form  >
                    <div className="row mt-5 m-auto   d-flex justify-content-center " >
                        <div className="col-6  ">
                            <div className="form-group  row">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Decipline  menu</option>
                                    <option value="1">karate</option>
                                    <option value="2">tikwando</option>
                                    <option value="3">lalalala</option>
                                </select>
                            </div>
                            <div className="form-group row mt-4">
                                <label htmlFor="dat_naiss" className="col"> Date de creation :</label>
                                <input type="date" className="form-control col" id="email" name="emailparticipant"
                                       placeholder="entrer your email" value=""/>


                            </div>
                            <div className="form-group row mt-4">
                                <label className="form-label col" htmlFor="password">la durée de l'abonnement  :</label>
                                <input type="number" className="form-control col" id="password-employer" name="password-employer" value="" />
                            </div>

                            <div className="form-group row mt-4 ">
                                <button type="submit" className="form-group  m-auto btn mt-5   "  style={{background:"#BC2D00" , width:"30%", borderRadius:"20 px"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-check-all" viewBox="0 0 16 16">
                                        <path
                                            d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
                                    </svg>
                                    Enregistrer
                                </button>
                            </div>

                        </div>

                    </div>

                </form>
            </div>
        </>
    )
}
