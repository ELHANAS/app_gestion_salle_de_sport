import React from "react";
import {Link, useHref} from "react-router-dom";

export default function Home(prop){
    return (
        <div style={{background:"transparent"}}>

            <div className={"container-fluid  text-dark h-100"} style={{paddingTop: '100 px',background:"transparent"}}>
                <div className={"row d-flex justify-content-between  m-5 "} style={{height:"40%"}}  id="rowHome">





                </div>
                <div className={"m-5  d-flex justify-content-between row d-none d-lg-block"} style={{background: "linear-gradient(to  left, #f9a25e ,white,white,white)",height:"40%"}}>

                        <img  className={"col-lg-4 w-50 h-100"} src={useHref(("images/GYM.png"))} alt="logo"/>

                    <h2 className={"col-lg-8 border"}></h2>
                </div>
            </div>

        </div>


    )
}
