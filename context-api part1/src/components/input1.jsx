import React, { useState ,useContext } from 'react'
import { UserContext } from '../context-api/Context';

function Input1() {
    const [name,setName] = useState(null);
    const [password,setPassword] = useState(null);
    
    const {setData} = useContext(UserContext);
    function handle(){
        setData({name,password})
    }

  return (
    <div>
        <h3>name</h3>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" />
        <h3>password</h3>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" />
        <button onClick={handle}>submit</button>
    </div>
  )
}

export default Input1