import {useState} from "react";
import "./Body.css";

//say = 고정으로 출력되는 변수
//setSay = say를 변화시키는 상태변수

const Say = () =>{
    const[say, setSay]= useState('')
    const[color,setColor] = useState('black');
    
    function inBtn(){
       setSay("안녕하세요")
    }
    function outBtn(){
        setSay("안녕히 가세요")
    }
    
    return(
      <div className="const"> 
        <button onClick={inBtn}>입장</button>
        <button onClick={outBtn}>퇴장</button><br />
        <div style={{color}}>{say}</div>
        <button className="red" onClick={() => setColor("red")}>빨강</button>
        <button className="blue" onClick={() => setColor("blue")}>파랑</button>
        <button className="green" onClick={() => setColor("green")}>초록</button><br />
    </div>
  
    );
  }

export default Say;

