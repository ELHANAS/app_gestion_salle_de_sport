import React from "react";
import { Link } from "react-router-dom";

export default function Discipline(){
    return (
        <div >
            <div style={{background:"yellow",borderBottom:"10px solid black"}} className="row p-2 d-flex  justify-content-lg-start">
                <div className="col-lg-3  col">
                    <div className="input-group w-100">
                        <div id="search-autocomplete" className="form-outline">
                            <input type="search" id="form1" placeholder="rechercher..." className="form-control"/>
                        </div>
                        <button type="button"  className="btn btn-dark">
                            <i  style={{color:"yellow"}} className="fas  fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className={"col col-lg-3"}>
                    <button onClick={()=>store.ajouterEmploye("Employe")} style={{color:"yellow"}} className="btn  btn-dark ">

                        <span className={"ms-3"}> Ajouter </span>  </button>
                </div>

            </div>

                <div className="col "   style={{position:"relative",height:"90%"}}>
                    <div className="border" style={{position:"absolute",width:"100%",height:"100%",overflow:"auto"}}>
                        <ListDiscipline />
                    </div>

                </div>


        </div>
    )
}


function ListDiscipline(){
    return(
        <div  >
            <table className="table ">
                <thead>
                <tr>
                    <th>id</th>
                    <th>libélle</th>
                    <th>Entrineur</th>
                    <th>Prix</th>
                    <th>membres</th>
                </tr>
                </thead>
                <tbody >
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>musculation</td>
                    <td>meryem ibraihmen</td>
                    <td>230 </td>
                    <td>200</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}



