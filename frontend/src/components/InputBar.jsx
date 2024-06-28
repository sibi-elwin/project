export function InputBar({placeholder,label,onChange}){
    return <div className="pd-4 ">
        <div className="text-sm text-left font-medium text-gray-800 ">{label} </div>
        
       <div className="space-x-3"> <input onChange={onChange} placeholder={placeholder} className=" border rounded border-slate-400  px-2 py-1 w-full pd-4 space-x-10 border-spacing-3 "></input></div>
       
    </div>

}