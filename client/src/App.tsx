import { useState } from 'react'
 

import './App.css'

const URL = import.meta.env.VITE_BACKEND_URL ||  'http://localhost:3000'


function App() {
  const [result, setresult ] = useState("");

  return (
    <>
      <div>
            <h1> Merge Render  </h1>
            <button onClick={async()=> { 
              const res = await fetch(`${URL}/ping`)
              const data = await res.json();
              console.log(data);
              setresult(data);

              }}>  
              Users
                </button> 
                <pre> {JSON.stringify(result, null ,2)}   </pre>
      </div> 
       
    </>
  )
}

export default App
