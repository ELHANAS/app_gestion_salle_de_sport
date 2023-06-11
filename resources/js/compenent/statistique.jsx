import React, {useEffect, useState} from "react";
import {Bar, Pie} from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import axios from "axios";
Chart.register(...registerables);

export default  function Statistique(prop){

const [statistiqueLabels,setStatistiqueLabels] = useState([])
    const [statistiqueData,setStatistiqueData] = useState([])
    const [statistiqueLabelsM,setStatistiqueLabelsM] = useState([])
    const [statistiqueDataM,setStatistiqueDataM] = useState([])
    const [periode,setPeriode] = useState('annee')
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const [annee,setAnne] = useState(year)
    const [mois,setMois] = useState(month)
    const [titre,setTitre] = useState()
    const [totalePaiement,setTotalePaiement] = useState()
    const [totaleParticipant,setTotaleParticipant] = useState()
    const [max,setMax] = useState({})
    const [maxp,setMaxp] = useState({})
    const [numbers , setNumbers] = useState({});
    const [labelsDisciplin,setlabelsDisciplin] = useState();
    const [dataDisciplin,setDataDisciplin] = useState();

    const dataNumbers = {
        labels: [
            'Participants actif',
            'Participants Non actif',
            'Les nouvau participants'
        ],
        datasets: [{
            label: 'statistique des paticipants',
            data: [numbers.membresActif, numbers.membresNoActif, numbers.membresNouvau],
            backgroundColor: [
                'rgb(23,134,0)',
                'rgb(231,0,0)',
                'rgb(157,155,155)'
            ],
            hoverOffset: 4
        }]
    };
    const dataAbonnements = {
        labels: [
            'Abonnements paye',
            'Abonnements non paye',
            'Abonnements encours'
        ],
        datasets: [{
            label: 'statistique des paticipants',
            data: [numbers.abonnementPaye, numbers.abonnementNonPaye, numbers.abonnementEncours],
            backgroundColor: [
                'rgb(23,134,0)',
                'rgb(231,0,0)',
                'rgb(157,155,155)'
            ],
            hoverOffset: 4,

        }]
    };
    const  data ={
        labels : statistiqueLabels,
        datasets :[
            {
                label : "Paiements",
                data : statistiqueData ,
    backgroundColor : "#ee9b57"
            },

        ],
    };
    const  dataM ={
        labels : statistiqueLabelsM,
        datasets :[
            {
                label : "Les participants",
                data : statistiqueDataM ,
                backgroundColor : "BLACK"
            },

        ],
    };
    const  dataDiscip ={
        labels : labelsDisciplin,
        datasets :[
            {
                label : "Les discipline de sport",
                data : dataDisciplin ,
                backgroundColor : "BLACK"
            },

        ],
    };
    var options = {
        scales: {
            y: {
                ticks: {
                    callback: function(value, index, values) {
                        return value + ' DH'; // Add 'units' to the label
                    }
                }
            }
        }
    };
    console.log(periode)
function  handlPeriode(e){
    if(e.target.checked){
        setPeriode(e.target.value);

    }
}
    function  changeDate(e){
        const  date =new Date(e.target.value)
         setMois(date.getMonth() + 1);
         setAnne(date.getFullYear())
        console.log(annee)
    }
    useEffect(()=>{
        axios.post('/api/discipline/participant').then(
            (res) => {
                console.log(res.data)
                setlabelsDisciplin(res.data.map((d) => d.libelle));
                setDataDisciplin(res.data.map((d)=> d.count))
            }
        )
    },[]) ;
    useEffect(()=>{
        if(periode === 'annee'){
            axios.post('/api/paiementStatistique/'+ annee).then(
                (res) => {
                    const  monthP = res.data.paiements.map((month)=> month.month)
                    const  monthM = res.data.membres.map((month)=> month.month)
                    setStatistiqueLabels(monthP)
                    setStatistiqueLabelsM(monthM)
                    const  sumP = res.data.paiements.map((month)=> month.sum)
                    const  sumM = res.data.membres.map((month)=> month.sum)
                    setStatistiqueDataM(sumM)
                    setStatistiqueData(sumP)
                    const maxObject = res.data.paiements.reduce((max, obj) => {
                        return obj.sum > max.sum ? obj : max;
                    });
                    const maxParticipant = res.data.membres.reduce((max, obj) => {
                        return obj.sum > max.sum ? obj : max;
                    });
                    setMax(maxObject)
                    setMaxp(maxParticipant)
                    const somme = sumP.reduce((total, element) => parseInt(total)  + parseInt(element), 0);
                    const sommeM = sumM.reduce((total, element) => parseInt(total)  + parseInt(element), 0);
                    setTotalePaiement(somme) ;
                    setTotaleParticipant(sommeM)
                }
            )
            ; setTitre(annee)
        }else {
            axios.post('/api/paiementStatistiqueMonth/'+ mois).then(
                (res) => {
                    const  monthP = res.data.paiements.map((month)=> month.day)
                    const  monthM = res.data.membres.map((month)=> month.day)
                    setStatistiqueLabels(monthP)
                    setStatistiqueLabelsM(monthM)
                    const  sumP = res.data.paiements.map((month)=> month.sum)
                    const  sumM = res.data.membres.map((month)=> month.sum)
                    setStatistiqueDataM(sumM)
                    setStatistiqueData(sumP)

                    const maxObject = res.data.paiements.reduce((max, obj) => {
                        return obj.sum > max.sum ? obj : max;
                    });
                    const maxParticipant = res.data.membres.reduce((max, obj) => {
                        return obj.sum > max.sum ? obj : max;
                    });
                    setMax(maxObject)
                    setMaxp(maxParticipant)
                    const somme = sumP.reduce((total, element) => parseInt(total)  + parseInt(element), 0);
                    const sommeM = sumM.reduce((total, element) => parseInt(total)  + parseInt(element), 0);
                    setTotalePaiement(somme) ;
                    setTotaleParticipant(sommeM)
                }
            )
            ;
            const monthName = getMonthName(mois );
            setTitre(monthName)
        }


    },[periode,mois,annee])

    useEffect(()=>{
        axios.post('/api/numberUsers').then(
            (res)=>{
                setNumbers(res.data) ;
                console.log(res.data)
            }
        );
    },[])
    const getMonthName = (monthNumber) => {
        const date = new Date();
        date.setMonth(monthNumber - 1); // Les mois commencent à partir de 0, donc on soustrait 1
        const monthName = date.toLocaleString('default', { month: 'long' });
        return monthName;
    };

    return(
        <div  >

            <div id={"secondHeader"}  className="row p-2 d-flex  justify-content-between">
                <div className="col-lg-3  col">
                    <div className="input-group w-100">
                        <input type="month" name="yearMonth" id="yearMonth" value="mai 2023"   onChange={(event)=> changeDate(event)}/>
                    </div>
                </div>
                <div className={"col col-lg-3 text-end"}>
                    <label className={'form-check-label'}>Anneé</label>
                    <input  className={'form-check-input mx-5'} type={"radio"} value={'annee'} name={"period"}  checked={periode === 'annee'? true :false}  onChange={(event)=> handlPeriode(event)}/>
                    <label  className={'form-check-label'}>Mois</label>
                    <input className={'form-check-input'} type={"radio"} value={'mois'} name={"period"}  checked={periode === 'mois'? true :false} onChange={(event)=> handlPeriode(event)}/>
                </div>




            </div>

            <div  style={{height:"90%"}}>

                <div className={"row pb-5"} style={{height:"100%"}}>
                    <div className="col-12 text-center"  >
                        <div style={{position:"relative",width:"100%",height:"100%"}}>
                            <div style={{overflow:"auto",position:"absolute",top:"0",bottom:"0",left:"0",right:'0'}}>

                                <h1 className={"h1 w-100"} style={{backgroundColor:"#ee9b57"}}>{titre}</h1>
                                <div className="row w-100 d-flex justify-content-around">

                                    <div className={"col-lg-5 p-0  row "}>

                                        <p className={"h4 col text-white "} style={{backgroundColor:"#000000"}}><span className={"fs-6"}>Totale</span>  <br/> {totalePaiement} DH</p>

                                        {
                                            max.hasOwnProperty("month")?
                                                <p className={"h4 col  text-white"} style={{backgroundColor:"#ee9b57"}}>
                                                    <span className={"fs-6"}>{  max.month}</span>   <br/>{max.sum} DH
                                                </p>
                                                :  <p className={"h4  col text-white "}style={{backgroundColor:"#ee9b57"}}>
                                                    <span className={"fs-6"}>{  max.day}</span>   <br/>{max.sum} DH
                                                </p>
                                        }

                                    </div>
                                    <div className={"col-lg-5 p-0  row"}>
                                        <p className={"h4 text-white  col "} style={{backgroundColor:"#000000"}}><span className={"fs-6"}>Totale</span>  <br/> {totaleParticipant} participants</p>

                                        {
                                            maxp.hasOwnProperty("month")?
                                                <p className={"h4  col text-white "} style={{backgroundColor:"#ee9b57"}}>
                                                    <span className={"fs-6"}>{  maxp.month}</span>   <br/>{maxp.sum} participants
                                                </p>
                                                :  <p className={"h4 col text-white "}style={{backgroundColor:"#ee9b57"}}>
                                                    <span className={"fs-6"}>{  maxp.day}</span>   <br/>{maxp.sum} participants
                                                </p>
                                        }

                                    </div>
                                </div>
                         <div className={"row w-100 mt-lg-3"}>
                             <div className="col-lg-6">
                                 <div className={"card  w-100"} >
                                     <Bar   data={data} options={options} />
                                 </div>
                             </div>

                             <div className="col-lg-6">
                                 <div className={"card  w-100"} >
                                     <Bar   data={dataM}  />
                                 </div>
                             </div>


                          </div>

                                <div className={"row w-100 "}>
                                    <div className="col-lg-3 col p-lg-3">
                                        <div className={"card text-start  "} >
                                            <Pie data={dataNumbers} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col p-lg-3">
                                        <div className={"card text-start  "} >
                                            <Pie data={dataAbonnements} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col p-lg-3">
                                        <div className={"card text-start  "} >
                                            <table className={'table w-100'}>
                                               <tr >
                                                   <th>Participants</th>
                                                   <th>Employés</th>
                                               </tr>
                                                <tr>
                                                    <td>{numbers.participant}</td>
                                                    <td>{numbers.users}</td>

                                                </tr>
                                            </table>

                                                <div className={"card  w-100"} >
                                                    <Bar   data={dataDiscip}  />
                                                </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>



            </div>

        </div>
    )
}
