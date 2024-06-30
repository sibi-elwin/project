import axios from "axios";
import { useState } from "react";

export  function Balance(){
    const [resp,setResponse]=useState(0);
    console.log(localStorage.getItem("token"))
    const response =axios.get("http://localhost:3000/api/v1/account/balance",{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("token")
        }
}).then(response=>{
    setResponse(response.data.balance)
})
    
    return <div className="flex">
        <div className="flex mt-3">
            <div className="pl-5 pr-3 font-bold">Your Balance :{resp}</div>
            <div className="font-semibold"></div>
            </div>
    </div>
}