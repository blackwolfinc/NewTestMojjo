import React from 'react'

export const AddTodo = ({
  newTodo,
  onSubmitTodo
,ValueTodo,
ValueDec,
newDec
}) => {
    return (
        <div>
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
