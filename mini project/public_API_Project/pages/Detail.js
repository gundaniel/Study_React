import './Home.css'
import { useContext, useEffect, useState } from "react";
import { BusantravelStateContext } from "../App";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BusantravelDetail from '../component/BusantravelDetail';

const Detail=()=>{
    const result = useContext(BusantravelStateContext);
    const {UC_SEQ} = useParams();
    const [travel, setTravel] = useState();

    useEffect(()=>{
        const data = result.find((it)=> String(it.UC_SEQ) === String(UC_SEQ));
        //console.log(data);
        if(data){
            setTravel(data);
        } 
    },[UC_SEQ, result]);
     
    if(!travel){
        return(
        <div> 여행정보를 읽어오는 중입니다...</div>
    )}
    else{
        return(
        <Container>
            <Row>
                <Col>
                    <h2 className="text-center">부산테마여행 상세정보</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <BusantravelDetail travel={travel}/>
                </Col>
            </Row>
        </Container>
        );
    };
} 
export default Detail;