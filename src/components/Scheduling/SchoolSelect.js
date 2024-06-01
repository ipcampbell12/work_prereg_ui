import Form from 'react-bootstrap/Form';
import React from 'react'
import ButtonComponent from './ButtonComponent';

const BoundarySchool = ({ toggleCurrent, toggleNext, togglePrevious }) => {
  return (
    <Form.Group>
      <Form.Label className="mx-1" >BoundarySchool</Form.Label>
      <iframe src="https://app.guidek12.com/woodburnor/school_search/current/" width={1000} height={500}></iframe>
      <br />
      <ButtonComponent toggleCurrent={toggleCurrent} toggleNext={toggleNext} togglePrevious={togglePrevious} />
    </Form.Group>
  )
}

export default BoundarySchool

