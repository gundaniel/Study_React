import './App.css';
// import { getEmotionImgById } from './util';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import { Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    // <div className="App">
    //   <div>
    //     <img src={getEmotionImgById(1)}alt="완전좋음"></img>
    //     <img src={getEmotionImgById(2)}alt="좋음"></img>
    //     <img src={getEmotionImgById(3)}alt="그럭저럭"></img>
    //     <img src={getEmotionImgById(4)}alt="나쁨"></img>
    //     <img src={getEmotionImgById(5)}alt="끔직함"></img>
    //   </div>
      <div className='App'>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/diary/:id' element={<Diary/>}/>
        <Route path='/edit' element={<Edit/>}/>
        </Routes>
        <hr />
        <div>
            <Link to={"/"}>Home </Link>
            <Link to={"/new"}>New Diary </Link>
            <Link to={"/diary"}>Read </Link>
            <Link to={"/edit"}>Edit/Delete </Link>
        </div>
        </div>
  );
}

export default App;
