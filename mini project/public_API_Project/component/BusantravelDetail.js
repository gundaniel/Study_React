import Table from "react-bootstrap/esm/Table";
import Image from "react-bootstrap/Image"; // Image를 import해야 사용 가능
import './BusantravelDetail.css'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const BusantravelDetail =({travel})=>{    
    const navigate = useNavigate();
    const goBack =()=>{
        navigate (-1);
    }

    return(
        <div>
            <Table>
                <tbody>
                    <tr>
                        <th>{travel.MAIN_TITLE}</th>
                    </tr>
                    <tr>
                        <td>{travel.ADDR1}</td>
                    </tr>
                    <tr>
                    <td><Image alt={travel.SUBTITLE} src={travel.MAIN_IMG_THUMB}  thumbnail className='image' /></td>
                    </tr>
                    <tr>
                        <td>{travel.ITEMCNTNTS}</td>
                    </tr>
                </tbody>
            </Table>
            <div>
            <Button className='text-end' variant="warning" onClick={goBack}>돌아가기</Button>
            </div>
       </div>
    );
}

export default BusantravelDetail;