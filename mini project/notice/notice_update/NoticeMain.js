import { useState } from "react";
import NoticeForm from "./NoticeForm";
import NoticeList from "./NoticeList";
import { useEffect } from "react";

const NoticeMain =()=>{
 const[values,setValues] = useState({
        title : "",
        cont : "",
        date : ""
    });
    
    //빈배열로 초기화
    const[notices,setNotices] = useState([]); 

    //바뀔 값을 담음
    const handleOnChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value }); 
      };
    

    //버튼 클릭시 출력되는 메서드 생성
    const btn1=()=> { 
        setNotices([...notices, { ...values }]);
        setValues({ title: "", cont: "", date: "" }); 
        alert ("전송되었습니다"); 
     };

    //출력될 화면 표시
return(
    <>
     <NoticeForm values={values} handleOnChange={handleOnChange} btn1={btn1} />
     <NoticeList values={notices}/>
    </>
)

} 

export default NoticeMain;