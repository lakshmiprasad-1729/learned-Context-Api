import React ,{useContext} from 'react'
import { UserContext } from '../context-api/Context'

function Input2() {
  const {data} = useContext(UserContext);
 
      if(data !==null){
        return <div>hello {data.name}</div>
      }
  
}

export default Input2