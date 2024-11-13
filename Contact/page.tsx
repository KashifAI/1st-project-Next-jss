import Navbar from "../Components/Navbar";
export default function About() {
    return (
      <div>
        <Navbar />
<div className="font-bold text-2xl text-center">
        You can contact us at:
       
        <ol className="font-medium text-slate-700">
          <li>Wmail: abc@xyz.com</li>
          <li>Cell: 0311-1122334</li>
        </ol>
        </div>
      </div>
    );
  }