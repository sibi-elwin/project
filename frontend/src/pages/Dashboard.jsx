import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { InputBar } from "../components/InputBar";
import { Users } from "../components/Users";

export function Dashboard(){
    return <div className="pt-6 flex flex-col justify-between text-balance"> 
        <AppBar></AppBar>
        <Balance></Balance>
        <div className="pl-4 pr-4"><Users></Users></div>
        
    </div>
    
}