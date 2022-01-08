import React, { useState, useEffect } from "react";
import { ListTodo } from "./ListTodo";
import { AddTodo } from "./AddTodo";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "../Assets/Scss/BodyList.scss";

export const BodyTodo = (props) => {
  let showDataini = [];
  let onEdit = [];

  useEffect(() => {
    bigData.map(() => {
      showDataini.push(false);
      onEdit.push(false);
    });
  });

  const [bigData, setbigData] = useState(props.data ? props.data : []);
  const [dataView, setdataView] = useState(showDataini);
  const [dataEdit, setdataEdit] = useState(onEdit);
  const [ValueTodo, setValueTodo] = useState("");
  const [ValueDec, setValueDec] = useState("");

  const showDetail = (e) => {
    let oldData = [...dataView];
    if (oldData[e - 1] === true) {
      oldData[e - 1] = false;
    } else {
      oldData[e - 1] = true;
    }
    setdataView(oldData);
  };

  const handleTimeStamp = (e) => {
    let today = new Date();

    var s = today.getSeconds();
    var i = today.getMinutes();
    var h = today.getHours();
    var cDate = today.getDate();
    var m = today.getUTCMonth();
    var y = today.getFullYear();

    let date =
      today.getFullYear() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getDate() +
      " " +
      (Number(h) - 1) +
      ":" +
      i +
      ":" +
      s;
    return date;
  };
  const EditFunction = (e) => {
    let oldData = [...dataEdit];
    if (oldData[e - 1] === true) {
      oldData[e - 1] = false;
    } else {
      oldData[e - 1] = true;
    }
    setdataEdit(oldData);
  };

  const OnChangeTitle = (e) => {
    let oldData = [...bigData];

    oldData[e.target.id - 1].title = e.target.value;
    setbigData(oldData);
  };

  const deleteInput = (e) => {
    const removedArr = [...bigData].filter((data) => data.id !== e);

    setbigData(removedArr);
  };

  const handleChangeNewTodo = (e) => {
    setValueTodo(e.target.value);
    //  console.log(ValueTodo)
  };

  const handleChangeNewDec = (e) => {
    setValueDec(e.target.value);
    //  console.log(ValueDec)
  };

  const FinisTodo = (e) => {
    let oldData = [...bigData];
    oldData[e - 1].status = 1;
    setbigData(oldData);
  };

  const handleSumbitNewTodo = (e) => {
    let dataValue = [...bigData];

    dataValue.push({
      id: bigData.length + 1,
      title: ValueTodo,
      description: ValueDec,
      status: 0,
      createdAt: handleTimeStamp(),
    });
    setbigData(dataValue);
    // console.log(dataValue)
    showDataini.push(false);
    onEdit.push(false);
    setValueDec("")
    setValueTodo("")
  };


  const Checkall=()=>{
    bigData.map((result , index)=>{
        let oldData = [...bigData];

        oldData[index ].status =1
        setbigData(oldData);
    })

  }

  return (
    <div className="center">
  
      <div className="bodyStyle">
          
      <AddTodo
        newTodo={handleChangeNewTodo}
        newDec={handleChangeNewDec}
        onSubmitTodo={handleSumbitNewTodo}
        ValueTodo={ValueTodo}
        ValueDec={ValueDec}
      />
      <div className="continer">
          <div className="thisList">
          <div className="row">
          <h1>Todo  <button onClick={(e)=>{Checkall(e)}}>Check all</button> </h1>
          

          <ListTodo
            data={bigData}
            DataSort={0}
            showDetail={showDetail}
            deleteFunction={deleteInput}
            EditFunction={EditFunction}
            onChangeTitile={OnChangeTitle}
            ListView={dataView}
            EditView={dataEdit}
            FinisTodo={FinisTodo}
          />
          </div>
          <div className="row">
          <h1>Finish </h1>
          <ListTodo
            data={bigData}
            DataSort={1}
            showDetail={showDetail}
            deleteFunction={deleteInput}
            EditFunction={EditFunction}
            onChangeTitile={OnChangeTitle}
            ListView={dataView}
            EditView={dataEdit}
            FinisTodo={FinisTodo}
          />
          </div>
       </div>
       </div></div>
    </div>
  );
};
