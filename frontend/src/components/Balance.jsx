import axios from "axios";
import { useState } from "react";

export  function Balance(){
    const [resonse,setResponse]=useState(0);
    const response =axios.post("http://localhost:3000/api/v1/account/balance",{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    }).then(response=>setResponse(response.data.msg))
    
    return <div className="flex">
        <div className="flex mt-3"><div className="pl-5 pr-3 font-bold">Your Balance :</div><div className="font-semibold">{response}</div></div>
    </div>
}