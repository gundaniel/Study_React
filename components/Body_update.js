import React from "react"
import "./Body.css"
import {useState} from "react"
//js는 비어있는 형태로 배열을 줄 수 있음

/*const Body = () =>{

  function handleOnclick(){
  alert("버튼 클릭");
}
  return(
    <div className="body"> 
      <button onClick={handleOnclick}>클릭하세요 </button><br />
      <button onClick={()=>{
        alert("리액트에서 이벤트처리");
      }}>버튼클릭</button>
    </div>
  );
}*/

//-----------------------------------------------------------------------
/*  
const Body = () =>{
function handleOnclick(e) {
    console.log(e);
    console.log("name", e.target.name);
    console.log("id", e.target.id);
    if(e.target.name ==="1st"){
      console.log("첫번째 버튼 클릭");
    }
    else if(e.target.name ==="2nd"){
      console.log("두번째 버튼 클릭");
    }
  }
    return(
      <div className="body">
        <button name="1st" id="btn1" onClick={handleOnclick}>첫번째 버튼</button><br />
        <button name="2nd" id="btn2" onClick={handleOnclick}>두번째 버튼</button>
      </div>
    );
  };
  */
//-----------------------------------------------------------------------
/*
const Body = () =>{
const[count, setCount] = useState(0);
const onIncrease = () => {
setCount(count + 1);
}
return(
  <div className="body">
    <h2>{count}</h2>
    <button onClick={onIncrease}>+</button>
  </div>
);
}
*/
/*
function Body(){
  const[text,setText] =useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  }
  return(
    <div>
        <input value={text}onChange={handleOnChange}/>
        <div>{text}</div>
    </div>
  )
}*/
//-----------------------------------------------------------------------
/*
function Body(){
  const[date,setDate] =useState("");
  const handleOnChange = (e) => {
    console.log("변경된 값", e.target.value);
    setDate(e.target.value);
  }
  return(
    <div>
        <input type="date" value={date} onChange={handleOnChange}/>
        <div>선택날짜:{date}</div>
    </div>
  )
}
  */
 //-----------------------------------------------------------------------

function Body(){
  const[text,setText] =useState("");
  const[option,setOption] =useState("");
  const[date,setDate] =useState("");
  const[text1,setText1] =useState("");
  
  const handleOnChange = (e1) => {
    console.log("현재 입력값", e1.target.value);
    setText(e1.target.value);
  }
  const handleOnChange1 = (e2) => {
    console.log("현재 입력값", e2.target.value);
    setOption(e2.target.value) 
  }
  const handleOnChange2 = (e3) => {
    console.log("현재 입력값", e3.target.value);
    setDate(e3.target.value) 
  }
  const handleOnChange3 = (e4) => {
    console.log("현재 입력값", e4.target.value);
    setText1(e4.target.value) 
  }
    return(
      <div>
        <h1>Body</h1>
       <input value={text}onChange={handleOnChange}/> <br />
       <select value={option}onChange={handleOnChange1}>
          <option key={1}>남성</option>
          <option key={2}>여성</option>
       </select><br />
       <input type="date" value={date} onChange={handleOnChange2}/><br />
       <textarea value={text1} onChange={handleOnChange3}/> <br />
        <hr />
        <h2>데이터 출력</h2>
        <br />
        <div>이름: {text}</div>
        <div>성별: {option}</div>
        <div>생년월일: {date}</div>
        <div>입력내용: {text1}</div>
        <hr />
      </div>
      
    );
  };

//-----------------------------------------------------------------------


  export default Body;