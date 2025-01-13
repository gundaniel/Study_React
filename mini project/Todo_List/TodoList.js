import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

const TodoList =({todo, onUpdate, onDelete})=>{
    const[search,setSearch] =useState(""); //기본값은 공백으로 상태변수 선언

    const onChangeSearch =(e) => {//이벤트가 발생한 값으로 온체인지서치적용 
        setSearch(e.target.value);
    };

    const getSearchResult = ()=>{
        return search === ""
        ? todo : todo.filter((it)=>
            //todo.filter((it)=> it.content.includes(search)); -> 대소문자를 구분하여
        it.content.toLowerCase().includes(search.toLowerCase()) //대소문자를 어느하나로 변환하여(지금은 소문자)
        );
    };
    
    return(
        <div className='TodoList'>
            <h4>할일 목록🌴</h4>
            <input className='searchbar' value={search} onChange={onChangeSearch} placeholder='검색어를 입력하세요' />
            <div className='list_wrapper'>
                {/*map을 이용하여 반복 시행*/}
                {getSearchResult().map((it)=>( 
                     <TodoItem key={it.id}{...it} onUpdate={onUpdate} onDelete={onDelete}/>
                ))}
            </div>
        </div> 
    );
};

export default TodoList; 