import Link from "next/link";
export default function Navbar(){
    return (
        <div className="container mx-auto flex justify-end items-center h-[40px] font-bold bg-slate-500 ">
            <div className="flex space-x-4">
            <Link href = "/ " className="text-white p-2">Home</Link>
            <br/>
            <Link href = "/Contact" className="text-white p-2">Contact</Link>
            <br/>
            <Link href = "/Services" className="text-white p-2">Services</Link>
            <br/>
            <Link href = "/About" className="text-white p-2">About</Link>
        </div>
        </div>

    )
    
    
}   