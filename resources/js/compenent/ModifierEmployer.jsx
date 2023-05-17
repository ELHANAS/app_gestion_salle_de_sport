import React from "react";
export default function ModifierEmployer (){
    return(
        <>
            <div className="p-5">
                <h3 className={"my-5 text-center "} style={{color:"#BC2D00"}} ><span className={""} > Modifier  un Employer</span> </h3>
                <form className="row" >
                    <div className="col-6">
                        <div className="form-group  row">
                            <label className="col" htmlFor="name">Name : </label>
                            <input type="text" className="form-control  col" id="name" value=""
                                   name="name" placeholder="entrer your  Name ..."/>
                        </div>
                        <div className="form-group row mt-3">
                            <label htmlFor="dat_naiss" className="col"> Email :</label>
                            <input type="email" className="form-control col" id="email" name="emailparticipant"
                                   placeholder="entrer your email" value=""/>


                        </div>
                        <div className="form-group row mt-3"><label className="form-label col" htmlFor="password">Password
                            :</label>
                            <input type="password" className="form-control col" id="password-employer" name="password-employer" value="" />
                        </div>
                        <div className="form-group row mt-3">
                            <label htmlFor="dat_naiss" className="col">Date de Naissance :</label>
                            <input type="date" className="form-control col" id="dat_naiss" name="dat_naiss"
                                   placeholder="entrer your dat_naiss" value=""/>


                        </div>


                    </div>
                    <div className="col-6">
                        <div className="form-group row">
                            <label htmlFor="adress" className="col">Adress:</label>
                            <input type="text" className="form-control col" id="Adress" name="Adress"
                                   placeholder="entrer your Adress" value="" />

                        </div>
                        <div className="form-group row mt-3">
                            <label htmlFor="Telephone" className="col">Salaire : </label>
                            <input type="text" className="form-control col" name="salaire" id="salaire" value="" placeholder="salaire ..." />
                        </div>
                        <div className="col">
                            <div className="form-group row mt-3">
                                <label htmlFor="dat_inscription" className="col">Fonction:</label>
                                <input type="text" className="form-control col" id="fonction" name="fonction"
                                       placeholder="entrer fonction" value=""/>

                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group row mt-3">
                                <label htmlFor="PHOTO" className="col">PHOTO :</label>
                                <input type="file" className="form-control col" id="photo" name="photo"
                                       value=""/>

                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn mt-5 m-auto  "  style={{background:"#BC2D00" , width:"30%", borderRadius:"20 px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-check-all" viewBox="0 0 16 16">
                            <path
                                d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
                        </svg>
                        Enregistrer
                    </button>
                </form>
            </div>
        </>
    )
}
