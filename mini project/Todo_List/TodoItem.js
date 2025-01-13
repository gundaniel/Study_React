import './TodoItem.css';

const TodoItem =({id,content,isDone,createDate,onUpdate, onDelete}) =>{
    const onChangeCheckbox =()=>{
        onUpdate(id);
    }

    const onClickDelete =()=>{
        if(window.confirm("정말 삭제 하시겠습니까?")){
        onDelete(id);
        };
    }
    
    return(
        <div className="TodoItem">
            <div className="checkbox_col">
                <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">
                {new Date(createDate).toLocaleDateString()}
            </div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
};
export default TodoItem; 