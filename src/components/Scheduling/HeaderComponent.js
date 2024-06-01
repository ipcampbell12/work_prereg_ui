import React from 'react';
import Modal from 'react-bootstrap/Modal';

function HeaderComponent({ dataRow }) {
    return (
        <React.Fragment>
            <Modal.Header>
                <h1>Scheduling Form</h1>
                <br />
                <h5>Schedule Appointment for: {dataRow[1]} {dataRow[2]}</h5>

            </Modal.Header>
        </React.Fragment>
    );
}

export default HeaderComponent;