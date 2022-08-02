import React from 'react'
import {Mpesa} from "mpesa-api"


const mpesa = new Mpesa (credentials, environment);

const credentials = {
    clientKey: VZHgEBUYpW6cSafWLXcTpA97rPsslxqC,
    clientSecret: PTN4PbcjtMZC1ic1,
    intiatorPassword: "password" ,
    certificatePath: null
}

const environment = "Sandbox";

//Make Payment
mpesa.lipaNaMpesaOnline ({
    BusinessShortCode: 123456,
    passKey: "read",
    PartyA: "PartyA",
    PhoneNumber: 254700000,
    Amount: 1,
    TransactionDesc: "LipaNaMpesa" ,
    CallBackURL: "CallBack URL" 

}).then((Response)=>{
    console.log()
}).catch((error)=>{
    console.log();
})

function Mpesa() {
  return (
    <div></div>
  )
}

export default Mpesa