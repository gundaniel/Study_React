import './Header.css'

const Header=()=> {
    return(
        <div className="Header">
         <h3>오늘은..💙</h3>
         {/*toDateString은 포맷을 사용하여 날짜만 출력*/}
         <h1>{new Date().toDateString()}</h1>
        </div>
    );
};
export default Header;