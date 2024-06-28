import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { InputBar } from "../components/InputBar";
import { SubHeader } from "../components/subHeader";

export function Signin(){
    return  <div className="flex items-center justify-center h-screen bg-gray-400 border-spacing-3 ">
    <div className=" w-80 flex flex-col justify-flex-end bg-white rounded-xl  space-x-4 space-y-4 px-5">
  <div className="flex flex-col text-center border-spacing-3 text-wrap pt-2" > <Header label={"Sign In"}>
   </Header>
   <SubHeader label={"Enter your infromation to sign in to your account"}></SubHeader></div>

  
   <InputBar label="Username" placeholder="john@gmail.com"></InputBar>
   <InputBar label="Password" placeholder="123"></InputBar>
   
   <Button label={"Sign In"}></Button>
   <Footer label={"Do not have an account ? "} to={"/signup"}>
   </Footer>
   

</div>

</div>
    
}