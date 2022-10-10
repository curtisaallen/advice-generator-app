import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [advice, setAdvice] = useState("")

  const fetchData = async () => {
    try {
      const url = "https://api.adviceslip.com/advice";
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setAdvice(json.slip.advice)
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => { fetchData(); }, []);


const loadMoreData = async () => {
  fetchData();
}


  return (
<div className="m-5 flex xl:h-screen justify-center items-center space-x-4">
<main className="w-screen  mx-auto bg-[#313a49] rounded-xl w-[32rem] drop-shadow-xl p-14">
  <h1 className="text-center text-[#53ffab] text-sm font-semibold mb-4">ADVICE # 117</h1>
  <p className="text-center text-[#cee2e9] text-2xl font-extrabold mb-6">
  {advice}
  </p>
  <picture>
    <img src="data:image/svg+xml,%3Csvg width='444' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%234F5D74' d='M0 8h196v1H0zM248 8h196v1H248z'/%3E%3Cg transform='translate(212)' fill='%23CEE3E9'%3E%3Crect width='6' height='16' rx='3'/%3E%3Crect x='14' width='6' height='16' rx='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="divider" />
  </picture>
  <div className="mt-5 relative">
     <button onClick={() => { loadMoreData() }} className="rounded-full bg-[#53ffab] w-16 h-16 absolute m-auto left-0 right-0 top-4 hover:shadow-lg hover:shadow-[#50d71e] transition delay-150 duration-300 ease-in-out">
      <img className="m-auto" src= "data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z' fill='%23202733'/%3E%3C/svg%3E" alt="dice icon button" />
    </button>
  </div>
</main>
</div>
  );
}

export default App;
