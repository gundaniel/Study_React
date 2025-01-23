import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BusantravelList from '../component/BusantravelList';

const Home=()=>{
    return(
        <Container>
            <Row>
                <Col>
                    <h2 className='text-center'>부산 테마 여행 정보 목록</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <BusantravelList />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;