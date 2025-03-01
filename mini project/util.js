import emotion1 from "./img/emotion1.png"
import emotion2 from "./img/emotion2.png"
import emotion3 from "./img/emotion3.png"
import emotion4 from "./img/emotion4.png"
import emotion5 from "./img/emotion5.png"

export const getEmotionImgById = (emotionId)=>{
    const targetEmotionId = String(emotionId);
    switch(targetEmotionId){
        case "1":
            return emotion1;
        case "2":
            return emotion2;  
        case "3":
            return emotion3;
        case "4":
            return emotion4;
        case "5":
            return emotion5;  
            default:
                return null;
    }
};

export const getFormattedDate = (targetDate) =>{
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() +1;
    let date = targetDate.getDate();
    if(month < 10){
        month =`0${month}`;
    }
    if(date < 10){
        date = `0${date}`;
    }
    return `${year}-${month}-${date}`;
};

//getBy함수보다 뒤에 작성해야함 (화살표함수는 호이스팅의 대상이 아님)
export const emotionList=[
    {id:1, name:"Great",img:getEmotionImgById(1)},
    {id:2, name:"nice",img:getEmotionImgById(2)},
    {id:3, name:"soso",img:getEmotionImgById(3)},
    {id:4, name:"bed",img:getEmotionImgById(4)},
    {id:5, name:"Terrible",img:getEmotionImgById(5)},
]