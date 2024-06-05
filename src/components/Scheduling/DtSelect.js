import Form from 'react-bootstrap/Form';

import React from 'react'
import ButtonComponent from './ButtonComponent';

const DtSelect = ({ toggleCurrent, toggleNext, togglePrevious }) => {
  return (
    <Form.Group className='mx-3 my-3 center-element align-baseline'>
      <Form.Label className='mx-3 my-3 center-element'>Select a date and time for the appointment:</Form.Label>
      <div>
        <input className="mx-3 my-3 center-element" type="date" id="apt-date" name="date" />
        <br />
        <input className="mx-3 my-3 center-element" type="time" id="apt-time" name="time" />
      </div>
      <ButtonComponent toggleCurrent={toggleCurrent} toggleNext={toggleNext} togglePrevious={togglePrevious} />
    </Form.Group>
  )
}

export default DtSelect;