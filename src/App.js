import React, { useState , useEffect } from 'react'
import json from "./Assets/Data.json"
import { BodyTodo } from './Components/BodyTodo'
import "./Assets/Scss/App.scss"
export const App = () => {
    // Jika Di beri Jam Kerja lebih bakal lebih baik lagi 
    // Belum Sempet Implement Redux karena waktu 
    const [dataJson, setDataJson] = useState(json)

    useEffect(() => {
     
      getData()
    }, [dataJson])
 

    const getData = ()=>{
      var axios = require('axios');

      var config = {
        method: 'get',
        url: 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list',
      
      };
      
      axios(config)
      .then(function (response) {
        setDataJson(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    }

  return (
    <div>
      <BodyTodo 
      data={dataJson}
      />
    </div>
  )
}
