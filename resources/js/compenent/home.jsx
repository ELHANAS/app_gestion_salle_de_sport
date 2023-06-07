import React from "react";
import {Link, useHref} from "react-router-dom";

export default function Home(prop){
    return (
        <div style={{background:"transparent"}}>

            <div className={"container-fluid  text-dark h-100"} style={{paddingTop: '100 px',background:"transparent"}}>
                <div className={"row d-flex justify-content-between  m-5 "} style={{height:"40%"}}  id="rowHome">
                    <Link to={'/participant'} className={" col-lg-3 p-4 border  text-center fw-bold"}
                         >
                        <div className={" fs-1"} style={{ height: '50 px' }}>
                            <div className="d-flex justify-content-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                <path
                                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                            </svg>
                            </div>
                            <span>{prop.numbers.participant}</span>
                        </div>
                        <div style={{ height: '50 px' , marginTop: '40px' }}>
                            <span>Les participants </span>
                        </div>
                    </Link>
                    <Link to={"/Employe"} className={" col-lg-3 p-4 border bg-light text-center fw-bold"}
                        >
                        <div className={" fs-1"} style={{ height: '50 px' }}>
                            <div className={"d-flex justify-content-start"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                     className="bi bi-people" viewBox="0 0 16 16">
                                    <path
                                        d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                </svg>
                            </div>
                            <span>{prop.numbers.users}</span>
                        </div>
                        <div style={{ height: '50 px' , marginTop: '40px' }}>
                            <span>Les employées </span>
                        </div>
                    </Link>
                    <Link to={"#"} className={" col-lg-3 p-4 border bg-light text-center fw-bold"}
               >
                        <div className={" fs-1"} style={{ height: '50 px' }}>
                            <div className={"d-flex justify-content-start"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                     className="bi bi-shop-window" viewBox="0 0 16 16">
                                    <path
                                        d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>

                            </div>
                            <span>3212</span>
                        </div>
                        <div style={{ height: '50 px' , marginTop: '40px' }}>
                            <span>Les produits </span>
                        </div>
                    </Link>



                </div>
                <div className={"m-5  d-flex justify-content-between row d-none d-lg-block"} style={{background: "linear-gradient(to  left, #f9a25e ,white,white,white)",height:"40%"}}>

                        <img  className={"col-lg-4 w-50 h-100"} src={useHref(("images/GYM.png"))} alt="logo"/>

                    <h2 className={"col-lg-8 border"}></h2>
                </div>
            </div>

        </div>


    )
}
