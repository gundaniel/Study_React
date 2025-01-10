
const Notice =({no})=>{
return(
<div className="hide">
    <p>-------출력내용--------</p>
    <p>제목:{no.title}</p>
    <p>내용:{no.cont}</p>
    <p>날짜:{no.date}</p>
    <p>----------------------</p>
    </div>
)
}

export default Notice;