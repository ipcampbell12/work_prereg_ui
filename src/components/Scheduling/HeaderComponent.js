import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeaderComponent(props) {
    console.log("siblingsState is: ", props.siblingsState)
    return (

        <Modal.Header>
            <Container className='center-element'>
                <Row>
                    <Col> <h4>Scheduling Form</h4></Col>
                </Row>
                <br />
                <Row>
                    <Col> Schedule Appointment for: {props.siblingsState.map((row) => { `${row[2]},${row[1]}` })}</Col>
                </Row>
            </Container>
        </Modal.Header>

    );
}

export default HeaderComponent;