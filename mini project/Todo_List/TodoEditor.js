import { useState,useRef } from 'react';
import './TodoEditor.css'

const TodoEditor =({onCreate}) =>{
    const[content, setContent] = useState("");
    const onChangeContent =(e) =>{
        setContent(e.target.value);
    }
    const inputRef = useRef();
    const onSubmit =()=>{
        if(!content){
            inputRef.current.focus();
            alert("할일을 입력하세요!");
            return;
        }
        onCreate(content);
        setContent("");
    };

    const onKeyDown =(e) =>{
        if(e.keyCode ===13){
            onSubmit();
        };
    };

    return(
        <div className='TodoEditor'>
            <h4>새로운 할 일 작성하기💻</h4>
            <div className="editor_wrapper">
                <input value={content} onChange={onChangeContent} onKeyDown={onKeyDown} ref={inputRef} placeholder='새로운 할일' />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};
export default TodoEditor;