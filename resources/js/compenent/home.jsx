import React from "react";

export default function Home(){
    return (
        <>

            <div className={"container-fluid  text-dark"} style={{paddingTop: '100 px'}}>
                <div className={"row d-flex justify-content-between  m-5 "}  id="rowHome">
                    <div className={" col-lg-3 p-4 border  text-center fw-bold"}
                         style={{height: '200 px ' , boxShadow: '3px 3px 10px  black' ,
                             backgroundImage: 'linear-gradient(to top right,yellow ,white)'}}>
                        <div className={" fs-1"} style={{ height: '50 px' }}>
                            <div className="d-flex justify-content-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                <path
                                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                            </svg>
                            </div>
                            <span>3212</span>
                        </div>
                        <div style={{ height: '50 px' , marginTop: '40px' }}>
                            <span>Les participants </span>
                        </div>
                    </div>
                    <div className={" col-lg-3 p-4 border bg-light text-center fw-bold"}
                         style={{height: '200 px ' , boxShadow: '3px 3px 10px  black' ,
                             backgroundImage: 'linear-gradient(to top right,yellow ,white)'}}>
                        <div className={" fs-1"} style={{ height: '50 px' }}>
                            <div className={"d-flex justify-content-start"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                     className="bi bi-people" viewBox="0 0 16 16">
                                    <path
                                        d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                </svg>
                            </div>
                            <span>12</span>
                        </div>
                        <div style={{ height: '50 px' , marginTop: '40px' }}>
                            <span>Les employées </span>
                        </div>
                    </div>
                    <div className={" col-lg-3 p-4 border bg-light text-center fw-bold"}
                         style={{height: '200 px ' , boxShadow: '3px 3px 10px  black' ,
                             backgroundImage:'linear-gradient(to top right,yellow ,white)'}}>
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
                    </div>

                </div>
                <div className={"row d-flex justify-content-between  m-5 "} id="rowHome">
                    <div className={" col-lg-3 p-4 border bg-light text-center fw-bold"}
                         style={{height: '200 px ' , boxShadow: '3px 3px 10px  black' ,
                             backgroundImage: 'linear-gradient(to top right,yellow ,white)'}}>
                        <div className={" fs-1"} style={{ height: '50 px' }}>
                            <div className={"d-flex justify-content-start"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                     className="bi bi-currency-dollar" viewBox="0 0 16 16">
                                    <path
                                        d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                                </svg>

                            </div>
                            <span>3212 MAD</span>
                        </div>
                        <div style={{ height: '50 px' , marginTop: '40px' }}>
                            <span>Investissements </span>
                        </div>
                    </div>
                    <div className={" col-lg-3 p-4 border bg-light text-center fw-bold"}
                         style={{height: '200 px ' , boxShadow: '3px 3px 10px  black' ,
                             backgroundImage: 'linear-gradient(to top right,yellow ,white)'}}>
                        <div className={" fs-1"} style={{ height: '50 px' }}>
                            <div className={"d-flex justify-content-start"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                     className="bi bi-currency-dollar" viewBox="0 0 16 16">
                                    <path
                                        d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                                </svg>

                            </div>
                            <span>2.9M MAD</span>
                        </div>
                        <div style={{ height: '50 px' , marginTop: '40px' }}>
                            <span>Bénéfice </span>
                        </div>
                    </div>
                    <div className={" col-lg-3 p-4 border bg-light text-center fw-bold"}
                         style={{height: '200 px ' , boxShadow: '3px 3px 10px  black' ,
                             backgroundImage:'linear-gradient(to top right,yellow ,white)'}}>
                        <div className={" fs-1"} style={{ height: '50 px' }}>
                            <div className={"d-flex justify-content-start"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                     className="bi bi-currency-dollar" viewBox="0 0 16 16">
                                    <path
                                        d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                                </svg>

                            </div>
                            <span>3.21M MAD</span>
                        </div>
                        <div style={{ height: '50 px' , marginTop: '40px' }}>
                            <span> Bénéfice Net </span>
                        </div>
                    </div>

                </div>
            </div>
        </>


    )
}
