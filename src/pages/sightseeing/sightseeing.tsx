import { useEffect, useState } from "react";
import Header from "../../reusables/Header/Header";

const SightseeingPage = () => {
const [allsightseeing, setallsigthseeing] =useState ([])

    useEffect(() => {
fetch('http://localhost:30000/sightseeing',{
  method: "GET"
}).then(response =>{
  return response.json();
}).then(data=>{
console.log("data",data)
return setallsigthseeing(data)
  })
}, [])
console.log("allsightseeing",allsightseeing)

if(allsightseeing.length > 0 )
  return (
    <>
      <Header />

      <div className="page-content">
        <h1>Sightseeing Page</h1>
        <button>button6</button>

       <div>
        <p>allsightseeing[0].image{"}"} </p>
      </div>
      </div>
    </>
  )
}

export default SightseeingPage;
 