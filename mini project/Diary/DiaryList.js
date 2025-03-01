import Button from './Button';
import './DiaryList.css'
import { useNavigate } from 'react-router-dom';
import {useState} from "react";


const sortOptionList =[
    {value:"latest", name : "latest"},
    {value:"oldest", name :"oldest"}
];



const DiaryList =({data})=>{
    const[sortType, setSortType] =useState("latest");
    const navigate = useNavigate();

    const onClickNew =()=>{
        navigate("/new");
    };

    const onChangeSortType =(e)=>{
        setSortType(e.target.value);
    }

    return <div className='DiaryList'>
        <div className='menu_wrapper'>
            <div className='left_col'>
                <select value={sortType} onChange={onChangeSortType}>
                    {sortOptionList.map((it,idx)=>(
                        <option key={idx} value={it.value}>
                            {it.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='right_col'>
                <Button type={"positive"} text={"new Diary"} onClick={onClickNew}/>
            </div>
        </div>
    </div>
}

export default DiaryList;