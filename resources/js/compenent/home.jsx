import React, {useEffect, useState} from "react";
import {Link, useHref} from "react-router-dom";
import axios from "axios";

export default function Home(prop){
    const  images= prop.images;
    const [currentIndex, setCurrentIndex] = useState(0);
    setTimeout(()=>{
        const random =Math.floor( Math.random()* images.length  );

        setCurrentIndex(random );
        console.log(random)

    },30000)


    return (
        <div className={"w-100 text-white   h-100 text-center"} style={{textShadow:"3px 3px 3px black"}}>
            <img src={images[currentIndex]} style={{position:"absolute",top:"0",left:"0",zIndex:"0",opacity:"0.5"}} className={"w-100 h-100"} alt="image"/>
            <div className={"m-auto d-flex justify-content-center row p-5 w-auto"} style={{position:"absolute",height:"50%",top:"25%",background:"transparent"}}>
                <h1 >GYM MANAGEMENT</h1>
                <p className={"p "}>Application de gestion salle de sport la plus facil</p>
<p className={"text-light col-lg-6 col"}>c'est une application qui permet suivre les participant et les employés en plus que ça vous pouvez consulter les statstique de votre salle de sport facillement</p>
            </div>
        </div>

    )
}
