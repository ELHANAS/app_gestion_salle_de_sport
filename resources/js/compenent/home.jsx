import React, {useEffect, useState} from "react";
import {Link, useHref} from "react-router-dom";
import axios from "axios";

export default function Home(prop){
    const  images= prop.images;



    return (
        <div className={"w-100 text-white   h-100 text-center"} style={{textShadow:"3px 3px 3px black"}}>
            {
                images.length?
                    <img src={images[prop.currentIndex]} id={"imagesAccuiel"} alt="image"/>:
                    <img src={"background/pexels-pixabay-163403.jpg"} id={"imagesAccuiel"} alt="image"/>

            }
            <div className={" p-5 "} style={{position:"absolute",height:"25%",top:"5%",left:'5%',width:"90%",background:'rgba(0,0,0,0.5)',borderRadius:"0"}}>
                <h1 >GYM MANAGEMENT</h1>
                <p className={"p "}>Application de gestion salle de sport la plus facil</p>
            </div>
        </div>

    )
}
