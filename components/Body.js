import React from "react"
import "./Body.css"

//js는 비어있는 형태로 배열을 줄 수 있음


function Body({children}){
  console.log(children);
  return(
    <div className="body">
      {children}
    </div>
  );
}




/*function Body({name, location, favorList}) {
  console.log(name, location, favorList);
  return(

      <div className="body">
      <h1>{name}님은 {location}에 거주하며</h1>
      <h2>{favorList}를 좋아힙니다.</h2>
      <hr />
      <table>
      <caption>테이블 생성 </caption>
        <thead>
         <tr>
          <th>자식요소</th>
         </tr>
        </thead>
        <tbody>
          <tr>
            <td>이름</td>
            <td>나이</td>
            <td>취미</td>
          </tr>
          <tr>
            <td>김서건</td>
            <td>32세</td>
            <td>운동</td>
          </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
    </div>
  );*/

  //  return(
//  // <div className="body">
//    // <h1>body</h1>
//   //</div>
//  );
 
  // const number =7;

  // if(number % 2 === 0){
  //   return<div>{number}은(는)짝수 입니다.</div>
  // }
  // else{
  //   return<div>{number}은(는)홀수 입니다.</div>
  // }
  //자식 객체로 생성 objA.a
    // return (
    //   <div>
    //     <h1>body</h1>
    //     <h2>{objA.a}</h2>
    //     <h2>{objA.b}</h2>
    //   </div>
  
    // );
  export default Body;