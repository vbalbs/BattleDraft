import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import logo from '../../assets/logo.png';
import DraftForm from '../form/form'
import './home.scss';

class Home extends React.Component {
    render() {
        return ( 
            <Container>
                <Row className="container-row">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Image className="container-row-title" src={logo}  alt="Logo"/>                   
                        <DraftForm />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
