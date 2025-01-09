
const Viewer =({count}) =>{
   //구조분해 할당을 사용하지 않을 경우 props를 사용 dot(.)를 사용
   // const Viewer =(props) =>{
    return(
        <div>
            <div>현재 카운트: </div>
            <h1>{count}</h1>
        </div>
    );
};

export default Viewer; 