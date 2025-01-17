import { useParams } from "react-router-dom";

const Diary =()=>{
    const {id} = useParams();

    return(
        <div>
            <div>{id}.st Diary</div>
            <div>Diary Pages</div>
        </div>
    )
};

export default Diary;