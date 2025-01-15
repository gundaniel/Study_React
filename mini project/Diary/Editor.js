import "./editor.css";
import {useEffect, useState} from 'react';
import {emotionList, getFormattedDate} from "../util";
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import EmotionItem from "./EmotionItem";

const Editor =({initData, onSubmit}) =>{
    const nagative = useNavigate();
    const [state, setState] = useState({
        date : getFormattedDate(new Date()),
        emotionId : 3,
        content: "",
    });

useEffect(()=>{
    if(initData){
        setState({
            ...initData, date:getFormattedDate(new Date(parseInt(initData.date))),
        });
    };
},[initData]);


const handlechangeDate=(e) =>{
    setState({...state,date:e.target.value});
};  

const handleChangeContent=(e)=>{
    setState({...state,content:e.target.value})
}

const handleSubmit=()=>{
    onSubmit(state);
};

const handleGoBack=()=>{
    nagative(-1);
}

const handleChangeEmotion =(emotionId)=>{
    setState({...state,emotionId});
}

    return(
        <div className="Editor">
            <div className="editor_section">
                {/*날짜*/}
                <h4>Today's what? </h4>
                <div className='input_wrapper'>
                    <input type="date" value={state.date} onChange={handlechangeDate}/>
                </div>
            </div>
            <div className="editor_section">
                {/*감정*/}
                <h4>Today's Emote</h4>
                <div className="input_wrapper emotion_list_wrapper">
                    {emotionList.map((it)=>(<EmotionItem key={it.id}{...it} onClick={handleChangeEmotion} alt={`emotion${it.id}`} src={it.img}
                    isSelected={state.emotionId === it.id}/>
                    ))}
                </div>
            </div>
            <div className="editor_section">
                {/*일기*/}
                <h4>Today's Diary</h4>
                <div className='input_wrapper'>
                    <textarea placeholder='오늘의 일기'value={state.content} onChange={handleChangeContent} />
                </div>
            </div>
            <div className="editor_section bottom_section">
                {/*작성완료, 취소*/}
                <Button text={"cancle"} onClick={handleGoBack}/>
                <Button text={"enter"} type={"positive"} onClick={handleSubmit}/>
            </div>
        </div>
    );
}

export default Editor;