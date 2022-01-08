import React from 'react'
import "../Assets/Scss/AddTodo.scss"
export const AddTodo = ({
  newTodo,
  onSubmitTodo
,ValueTodo,
ValueDec,
newDec
}) => {
    return (
        <div className='inpuTodo'>
            <h1>Add New Todo  :</h1>
            <input
            value={ValueTodo}
            onChange={(e)=>{newTodo(e)}}    
            placeholder="title"
            ></input>

             <input
             placeholder="Discripton"
            value={ValueDec}
            onChange={(e)=>{newDec(e)}}    
            
            ></input>
            <button onClick={(e)=>{onSubmitTodo(e)}}>   
                save
            </button>   

        </div>
    )
}
