import { useState } from "react";

//상태변수(useState)를 선언하여 객체생성함
const EventPractice = () =>{
    const [val, setVal] = useState({
        name1 : '',
        content1: ''
    });
    //handleOnChange = onChange
    //이벤트 발생시 e객체 실행
    //e.target.name = 이벤트가 발생되어 name으로 설정된 값을 찾음
    //e.target.value = name의 value를 가져옴
    // = 해당하는 name : name에서 입력된 value
    // 스프레드 연산자를 사용하여 모든 값을 출력

    
    const handleOnChange = (e) => {
        setVal({...val,[e.target.name]: e.target.value }); 
      };
     
    //버튼 클릭시 출력되는 메서드 생성
    function btn(){ 
        alert (
            `이름:${val.name1} 내용:${val.content1}맞습니까?`
        );
    } 
    //엔터칠시 출력되는 메서드 생성
    const onKeyUp = e =>{
        if(e.key === 'Enter'){
            btn();
        }
    }

    return(
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name="name1" value={val.name1} onChange={handleOnChange} onKeyUp={onKeyUp} placeholder="이름"></input><br />
            <input type="text" name="content1" value={val.content1} onChange={handleOnChange} onKeyUp={onKeyUp} placeholder="내용"></input><br />
            <button onClick={btn} >확인</button>
        </div>
    );
}; 

export default EventPractice;

