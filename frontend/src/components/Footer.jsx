
import {Link} from "react-router-dom"


export function Footer({label,to}){
    return <div className="text-gray-600 text-sm flex justify-center pb-4">
      <div>{label}</div>
    <Link to={to}  className="underline">Login</Link>
    </div>

}