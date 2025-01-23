// import {useState, useEffect } from 'react';

// import './App.css';

// const App=()=> {
//   const[result, setResult] = useState([]);
// //부산 여행 리스트
//   useEffect(()=>{
//     //fetch 이용한 데이터 확인
//     fetch('http://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=eiAG4t8b%2Bs%2B2j3Uu37WOtKL%2BjzXtfmmYCge29nHraawvuowFj7jbPQI8HZsGUCuPeh028dys2FZwdSe4nR96WA%3D%3D&numOfRows=3&pageNo=1&resultType=json')
//     .then(response => response.json())
//     .then(data =>{
//       // setResult(data.gyeongnammuseumList.body.items.item)
//       console.log(data.getRecommmendedKr.item.map(item => item.title))
//     })
//     .catch(error => console.log(error));
//   },[]);
  
//   return (
//     <div className="App">
//       <h3>경상남도 박물관 정보</h3>
//       <table className='App-table'>
//         <thead>
//           <tr>
//             <th>고유번호</th>
//             <th>기관명</th>
//             <th>관리기관명</th>
//             <th>소재지</th>
//             <th>홈페이지</th>
//             <th>연락처</th>
//           </tr>
//         </thead>
//         <tbody>
//           {result.map(item =>(
//             <tr key={item.entid}>
//               <td>{item.entid}</td>
//               <td>{item.title}</td>
//               <td>{item.sigungu}</td>
//               <td>{item.roadaddress}</td>
//               <td>{item.homepage}</td>
//               <td>{item.tel}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
// ----------------------------------------------------------------------------
// import { useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// const App=()=> {
// //부산 여행 리스트
//   useEffect(()=>{
//     //fetch 이용한 데이터 확인
//     fetch('http://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=eiAG4t8b%2Bs%2B2j3Uu37WOtKL%2BjzXtfmmYCge29nHraawvuowFj7jbPQI8HZsGUCuPeh028dys2FZwdSe4nR96WA%3D%3D&numOfRows=3&pageNo=1&resultType=json')
//     .then(response => response.json())
//     .then(data =>{
//       // setResult(data.gyeongnammuseumList.body.items.item)
//       console.log(data.getRecommendedKr.item.map((it)=> it.MAIN_TITLE));
//     })
//     .catch(error => console.log(error));
//   },[]);
  
//   return (
//     <div className="App">
        
//         <Button variant="outline-primary">Primary</Button>
//       <Button variant="outline-secondary">Secondary</Button>
//       <Button variant="outline-success">Success</Button>
//       <Button variant="outline-warning">Warning</Button>
//       <Button variant="outline-danger">Danger</Button>
//       <Button variant="outline-info">Info</Button>
//       <Button variant="outline-light">Light</Button>
//       <Button variant="outline-dark">Dark</Button>
//     </div>
//   );
// } 

// export default App;
//----------------------------------------------------------------------------
import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

const url='http://apis.data.go.kr/6260000/RecommendedService/getRecommendedKr?serviceKey=eiAG4t8b%2Bs%2B2j3Uu37WOtKL%2BjzXtfmmYCge29nHraawvuowFj7jbPQI8HZsGUCuPeh028dys2FZwdSe4nR96WA%3D%3D&numOfRows=4&pageNo=1&resultType=json';
export const BusantravelStateContext = React.createContext();



const App=()=> {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const[result, setResult] = useState([]);

//부산 여행 리스트
  useEffect(()=>{
    //fetch 이용한 데이터 확인
    fetch(url)
    .then(response => response.json())
    .then(data =>{
      setResult(data.getRecommendedKr.item);
      setIsDataLoaded(true);
     // console.log(data.getRecommendedKr.item.map((it)=> it.MAIN_TITLE));
    })
    .catch(error => console.log(error));
  },[]);
  
  if(!isDataLoaded){
    return <div>데이터를 불러오는 중입니다...</div>
  }
  else{
  return (
    <>
      <BusantravelStateContext.Provider value={result}>
        <Routes>
          <Route path='/' element= {<Home />}/>
          <Route path='/detail/:UC_SEQ' element= {<Detail />}/>
        </Routes>
      {/* <div className="App">
      <Button variant="outline-primary">Primary</Button>
      <Button variant="outline-secondary">Secondary</Button>
      <Button variant="outline-success">Success</Button>
      <Button variant="outline-warning">Warning</Button>
      <Button variant="outline-danger">Danger</Button>
      <Button variant="outline-info">Info</Button>
      <Button variant="outline-light">Light</Button>
      <Button variant="outline-dark">Dark</Button>
    </div> */}
    </BusantravelStateContext.Provider>
    </>
    
  );
} 
};

export default App;

