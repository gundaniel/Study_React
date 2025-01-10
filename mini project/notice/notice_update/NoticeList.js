import Notice from "./notice";
import "./NoticeList.css"
const NoticeList=({values =[]})=>{
    return(
        <div>
        {values.map((no, index)=>(
            <Notice key={index} no={no} />
        ))}
     </div>
    );
}
export default NoticeList;

