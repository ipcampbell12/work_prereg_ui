import Form from 'react-bootstrap/Form';
import React from 'react'
import ButtonComponent from './ButtonComponent';

const BoundarySchool = ({ toggleCurrent, toggleNext, togglePrevious }) => {
  return (
    <Form.Group className="center-element map-container">
      <Form.Label className="mx-1 center-element" >BoundarySchool</Form.Label>
      <iframe src="https://app.guidek12.com/woodburnor/school_search/current/" width={400} height={400} className='vertically-centered-element'></iframe>
      <br />
      <ButtonComponent toggleCurrent={toggleCurrent} toggleNext={toggleNext} togglePrevious={togglePrevious} />
    </Form.Group>
  )
}

export default BoundarySchool

