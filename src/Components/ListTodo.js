import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "../Assets/Scss/ListTodo.scss";

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

  const handleSort = (Dataku) => {
    const sorted = [Dataku].sort((a, b) =>
      a.createdAt.localeCompare(b.createdAt)
    );
    // console.log(sorted)
  };

  return data.map((Dataku, index) => (
    <div >
      {handleSort(Dataku)}

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
            <div  className="titleData"  onClick={() => {
              showDetail(Dataku.id);
            }}
          key={Dataku.id}>{Dataku.title}</div>
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
            <button
              onClick={() => {
                deleteFunction(Dataku.id);
              }}
            >
              Delete
            </button>

            {Dataku.status === 0 ? (
              <button
                onClick={() => {
                  FinisTodo(Dataku.id);
                }}
              >
                Finish
              </button>
            ) : (
              <button
                onClick={() => {
                  FinisTodo(Dataku.id);
                }}
                disabled
              >
                Finish
              </button>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  ));
};
