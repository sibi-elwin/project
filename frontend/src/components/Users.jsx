import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter,setFilter]=useState("")
    
    useEffect(()=>{
        
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter).then((response)=>{
            setUsers(response.data.user)
            
        })
        
    },[filter])
  
    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input  onChange={(e)=>{
                setFilter(e.target.value)

            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user=>  (<User user={user} />))}
        </div>
    </>
}

function User({user}) {
    const navigate=useNavigate();
    return <div className="flex justify-between shadow-md rounded-lg pl-2">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 mt-2 mr-2 pd-3">
                <div className="flex flex-col justify-center items-center h-full text-2xl space-y-3 pb-1 ">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full ">
                <div className="pb-1 font-medium mb-2">
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-full ">
            <div className="mt-2"><Button onClick={()=>{
                navigate("/send?id="+user._id+"&firstName="+user.firstName)
            }}  label={"Send Money"} /></div>
        </div>
    </div>
}