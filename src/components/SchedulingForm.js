import React from 'react'
import { ModalBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 function SchedulingForm({dataRow, turnOffScheduling,scheduling}) {
  return (
    <Modal show={scheduling} onHide={turnOffScheduling} fullscreen={true} >
     <Modal.Header>
      <h1>Scheduling Form</h1>
      <br />
      <h5>Schedule Appointment for: {dataRow[1]} {dataRow[2]}</h5>
      
      </Modal.Header>
      <ModalBody>
      <p>This is where the scheduling happens</p>
      <Form.Group>
                    <Form.Label className='small p-0 text-muted'>What is the home language for {dataRow[1]} {dataRow[2]}?</Form.Label>
                    <Form.Select onChange={(e) => handleInputChange(4, e.target.value)}>
                        <option>Select a langauge</option>
                        {gradeLevels.map((grade, idx) => {
                            return (
                                <option key={idx} value={grade}>{grade}</option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>
      </ModalBody>
      <Button variant="warning" onClick={turnOffScheduling}>Close</Button>
    </Modal>
  )
}

export default SchedulingForm;