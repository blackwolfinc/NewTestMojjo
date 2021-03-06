import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "../Assets/Scss/ListTodo.scss";
import SimpleModal from "./SimpleModal";

export const ListTodo = ({
  data,
  ListView,
  showDetail,
  deleteFunction,
  EditView,
  EditFunction,
  onChangeTitile,
  DataSort,
  FinisTodo,
}) => {
  let showDataini = ListView;
  let inputToggle = EditView;
  let DataSort2 = DataSort;

 

  return data.map((Dataku, index) => (
    <div >

      {Dataku.status === DataSort2 ? (
        <div
        
          className="ListSave"
          key={index}
        >
          {inputToggle[index] ? (
            <input
              id={Dataku.id}
              required
              placeholder={Dataku.title}
              onChange={(e) => {
                onChangeTitile(e);
              }}
            ></input>
          ) : (

            <SimpleModal 
            
            title ={Dataku.title}
            data={Dataku.description}/>

        
          )}
          <br />
          {showDataini[index] === true ? <div>{Dataku.description}</div> : ""}
          
          <br />
          <div className="icons">
            <button
              onClick={() => {
                EditFunction(Dataku.id);
              }}
            >
              {inputToggle[index] ? "Save" : "Edit"}{" "}
            </button>
            {Dataku.status ===0 ?   <button
              onClick={() => {
                deleteFunction(Dataku.id);
              }}
            >
              Delete
            </button>:""}
          

            {Dataku.status === 0 ? (
              <button
                onClick={() => {
                  FinisTodo(Dataku.id);
                }}
              >
                Finish
              </button>
            ) : (
             ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  ));
};
