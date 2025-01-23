import './BusantravelItem.css'

import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';


const BusantravelItem =({UC_SEQ, MAIN_TITLE, MAIN_IMG_THUMB,ADDR1}) => {
    return(
        <tr className='align-middle'>
            <td><Image alt={MAIN_TITLE} src={MAIN_IMG_THUMB} thumbnail className='image' /></td>
            <td><Link to={`/detail/${UC_SEQ}`} className='link'>{MAIN_TITLE}</Link></td>
            <td>{ADDR1}</td>
        </tr>
    );
    
};   

export default BusantravelItem;