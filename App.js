import './App.css';
// import Body from './components/Body';
// import Footer from './components/Footer';
// import Header from './components/Header';
import  MyComponent from './components/MyComponent';

const App = () => {
  const person = {
    name : "홍길동",
    age : 20,
    email : "javauser@naver.com",
    favoriteNumber : 7,
    hobbyList: ["운동","코딩","영화보기"]
  };
  return(
    <MyComponent{...person}>"나의 날은 반드시 온다"</MyComponent>
  );
};

// function App() {
//   return <div>자식 컴포넌트에 전달합니다</div>
//   }

// //함수 컴포넌트
// function App() {
//   // const BodyProps = {
//   //   name : "김철수",
//   //   location : "경기도 수원시 장안구",
//   //   favorList: ["피자","햄버거","떡볶이"]
//   // }
//   //const name = "홍길동";
//   //숫자값도  {}안에 값을 전달
//   return (
   
//       <MyComponent />
//   )

// }
export default App;

  