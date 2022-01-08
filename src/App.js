import React, { useState } from 'react'
import json from "./Assets/Data.json"
import { BodyTodo } from './Components/BodyTodo'
export const App = () => {
  
    const [dataJson, setDataJson] = useState(json)
 


  return (
    <div>
      <BodyTodo 
      data={dataJson}
  
      />
    </div>
  )
}
