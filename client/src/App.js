import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios'
function App() {
  const [advice,setAdvice]=useState("")
  const fetchData=()=>{
    axios.get("https://api.adviceslip.com/advice").then((response)=>{
         setAdvice(response.data.slip.advice)
    }).catch((err)=>{
       console.log(err);
    })
  }
  useEffect(() => {
    return () => {
      fetchData()
    };
  }, [])

  return (
    <div className="App">
      <div className="card">
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={()=>fetchData()}>
          <span>Give Me An Advice!!!</span></button>
      </div>
    </div>
  );
}

export default App;
