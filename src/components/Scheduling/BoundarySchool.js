import Form from 'react-bootstrap/Form';
import React from 'react'
import { Button } from 'react-bootstrap';

const BoundarySchool = ({handleDtSelect}) => {
  return (
     <Form.Group>
      <Form.Label>BoundarySchool</Form.Label>
      <iframe src="https://app.guidek12.com/woodburnor/school_search/current/" width={1000} height={500}></iframe>
      <Button variant="primary" onClick={handleDtSelect}>Next</Button>
    </Form.Group>
  )
}

export default BoundarySchool

