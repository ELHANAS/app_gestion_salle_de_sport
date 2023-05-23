import React from "react";
export  default  function Paiement(prop){
    const paiements = prop.paiements ;
    return (
        <div>
            <div>
                <table className={"table-bordered table"}>
                    <thead>
                    <tr>
                        <th>Abonnement</th>
                        <th>Montant payé</th>
                        <th>Montant restant</th>
                        <th>date de paiement</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        paiements.map((pay)=>{
                            return <tr key={pay.codeP}>
                                <td>
                                    <ul>
                                        <li>{pay.name}</li>
                                        <li>{pay.libelle}</li>
                                        <li>durée :{pay.duree} Moins</li>
                                    </ul>



                                </td>
                                <td>{pay.montantPaye} dh</td>
                                <td>{pay.montantRestant} dh</td>
                                <td>{pay.datePaiement}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
