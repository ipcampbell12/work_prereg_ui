import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeaderComponent(props) {
    // console.log("siblingsState in header component is: ", props.siblingsState)
    return (

        <Modal.Header>
            <Container className='center-element'>
                <Row>
                    <Col> <h4>Scheduling Form</h4></Col>
                </Row>
                <Row>
                    <Col> Scheduling appointment for: <p className='fw-bold' style={{ display: "inline" }}>{props.siblingsState.map(row => `${row[1]} ${row[2]}`).join(', ')}</p></Col>
                </Row>
            </Container>
        </Modal.Header>

    );
}

export default HeaderComponent;