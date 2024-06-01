import Form from 'react-bootstrap/Form';

import React from 'react'
import ButtonComponent from './ButtonComponent';

const DtSelect = ({ toggleCurrent, toggleNext, togglePrevious }) => {
  return (
    <Form.Group>
      <Form.Label>Appointment</Form.Label>
      <input className="mx-1" type="date" id="apt-date" name="date" />
      <input className="mx-1" type="time" id="apt-time" name="time" />
      <ButtonComponent toggleCurrent={toggleCurrent} toggleNext={toggleNext} togglePrevious={togglePrevious} />
    </Form.Group>
  )
}

export default DtSelect;