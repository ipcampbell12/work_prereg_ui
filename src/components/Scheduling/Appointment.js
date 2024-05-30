import Form from 'react-bootstrap/Form';
import React from 'react'

const Appointment = () => {
  return (
     <Form.Group>
      <Form.Label>Appointment</Form.Label>
      <input type="date" id="apt-date" name="date"/>
      <input type="time" id="apt-time" name="time"/>
    </Form.Group>
  )
}

export default Appointment;