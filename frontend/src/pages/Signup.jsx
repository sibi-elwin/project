import { Header } from "../components/Header";
import { SubHeader } from "../components/subHeader";
import { InputBar } from "../components/InputBar";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup(){
    const [fname,setFirstName]=useState("");
    const [lname,setLastName]=useState("");
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    return <div className="flex items-center justify-center h-screen bg-gray-400 border-spacing-3 ">
         <div className=" w-80 flex flex-col justify-flex-end bg-white rounded-xl  space-x-4 space-y-4 px-5">
       <div className="flex flex-col text-center border-spacing-3 text-wrap pt-2" > <Header label={"Sign Up"}>
        </Header>
        <SubHeader label={"Enter your infromation to create an account"}></SubHeader></div>

        <InputBar onChange={e=>{setFirstName(e.target.value)}} label="First Name" placeholder="John"></InputBar>
        <InputBar onChange={e=>{setLastName(e.target.value)}} label="Last Name" placeholder="Doe"></InputBar>
        <InputBar onChange={e=>{setUserName(e.target.value)}} label="Username" placeholder="john@gmail.com"></InputBar>
        <InputBar onChange={e=>{setPassword(e.target.value)}} label="Password" placeholder="123"></InputBar>
        
        <Button onClick={async ()=>{
            const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
                username,
                fname,
                lname,
                password

            }
           
        )
        

        localStorage.setItem("token",response.data.token);
        navigate("/dashboard");

        }} label={"Sign up"}></Button>
        <Footer label={"Already have and account ? "} to={"/signin"}>
        </Footer>
        

    </div>

    </div>
}