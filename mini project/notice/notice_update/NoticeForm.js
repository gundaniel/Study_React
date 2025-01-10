import './noticeForm.css'

const NoticeForm = ({values,handleOnChange,btn1}) =>{
    const{title,cont,date} = values;

    return( 
        <div className="notice">
            <div>
                <h1>NoticeForm예제</h1>
            </div>
            <div> 
            <input type="text" name="title" value={title} onChange={handleOnChange}  placeholder="제목"/><br/>
                <textarea name="cont" value={cont} onChange={handleOnChange}  placeholder="내용"/><br/>
                <input type="date" name="date" value={date} onChange={handleOnChange}placeholder="날짜"/><br/>
            </div>
            <div>
                <button type="button" onClick={()=>btn1()}>전송</button>
            </div><br />
        </div>
    );

}

export default NoticeForm;