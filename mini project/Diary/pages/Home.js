import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import Button from "../component/Button"
import Header from "../component/Header";
import { getMonthRangeByDate } from "../util";
import DiaryList from "../component/DiaryList";

// import Editor from '../component/Editor'

// const Home =()=>{
//     return(
//         <div>
//             <Header title={"Home"} 
//                 leftChild={<Button type="positive" text={"Positive"} onClick={()=>{alert("positive button");}}/>}
//                 rightChild={<Button type="negative" text={"Negative"} onClick={()=>{alert("negative button");}}/>}
//              />
//             {/* Home홈페이지<br />
//             <Button text={"버튼 텍스트"} onClick={()=>{alert("버튼클릭")}}/> */}
//         </div>
//     );
// };

const Home =()=>{
    const data = useContext(DiaryStateContext); //일기 데이터를 전달받기 위한 함수
    const [filteredData, setFilteredData] = useState([]);
    const [pivotDate, setPivotDate] = useState(new Date());
  const headerTitle = `${pivotDate.getFullYear()}Year ${pivotDate.getMonth() + 1}Month`;

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(data.filter((it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } 
    else{
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
    // return(
    //     <div>
    //         <Editor initData={{date:new Date().getTime(),emotionId:1, content:"Before Diary",}} 
    //         onSubmit={()=>{ alert("작성완료")}} />
    //     </div>
    // );
    
    return(
    <div>
        <Header title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
        />
        <DiaryList date={filteredData}/>
    </div>
    );
}
export default Home;