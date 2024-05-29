import Form from 'react-bootstrap/Form';
import React from 'react'

const BoundarySchool = () => {
  return (
     <Form.Group>
      <Form.Label>BoundarySchool</Form.Label>
      <iframe src="https://app.guidek12.com/woodburnor/school_search/current/" width={1000} height={500}></iframe>
    </Form.Group>
  )
}

export default BoundarySchool

