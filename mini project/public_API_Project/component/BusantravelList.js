import { BusantravelStateContext } from '../App';
import { useContext } from 'react';

import Table from 'react-bootstrap/Table';
import BusantravelItem from './BusantravelItem';

const BusantravelList =()=>{
    const result = useContext(BusantravelStateContext);

    return(
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>이미지</th>
                    <th>콘텐츠명</th>
                    <th>주소</th>
                </tr>
            </thead>
            <tbody>
                {result.map(item=>(
                    <BusantravelItem key={item.UC_SEQ}{...item} />
                ))}
            </tbody>
        </Table>
  );
}
export default BusantravelList;