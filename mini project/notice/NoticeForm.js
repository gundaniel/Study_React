import {useState} from "react"
import './noticeForm.css'
const NoticeForm = () =>{
    const[values,setValues] = useState({
        title : "",
        cont : "",
        date : ""
    })
    const [isVisible, setIsVisible] = useState(false);
    const handleOnChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value }); 
      };
    
    //버튼 클릭시 출력되는 메서드 생성
    function btn(){ 
        alert ("전송되었습니다"); 
        setIsVisible(true); // hide div 보이게 설정
     };

    //버튼 클릭시 없어지는 메서드 생성
    function btn2(){ 
        alert("삭제되었습니다");    
        setIsVisible(false) // hide div 안보이게 설정
    }


    
    //엔터칠시 출력되는 메서드 생성
    const onKeyUp = e =>{
        if(e.key === 'Enter'){
            btn();
        }
    }
    return(
        <div className="notice">
            <div>
                <h1>NoticeForm예제</h1>
            </div>
            <div>
                <input type="text" name="title" value={values.title} onChange={handleOnChange} onKeyUp={onKeyUp} placeholder="제목"/><br/>
                <textarea name="cont" value={values.cont} onChange={handleOnChange} onKeyUp={onKeyUp} placeholder="내용"/><br/>
                <input type="date" name="date" value={values.date} onChange={handleOnChange}placeholder="날짜"/><br/>
            </div>
            <div>
                <button onClick={btn}>전송</button>
                <button type="reset" onClick={btn2}>취소</button>
            </div>
           {isVisible && ( // 조건부 렌더링으로 hide div 표시
            <div className="hide">
                <p>-------출력내용--------</p>
                <p>제목: {values.title}</p>
                <p>내용: {values.cont}</p>
                <p>날짜: {values.date}</p>
                <p>----------------------</p>
            </div>
             )}
              </div>
    );
} 

export default NoticeForm;