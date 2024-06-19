import Form from 'react-bootstrap/Form';
import React from 'react'
import ButtonComponent from './ButtonComponent';

const BoundarySchool = (props) => {
  return (
    <React.Fragment>
      {props.siblingsState.map((sibling) => {
        return (
          <Form.Group className="center-element map-container align-baseline">
            <h6>{`${sibling[1]}, ${sibling[2]}`}</h6>
            <p>{`Grade Level: ${sibling[4]}`}</p>
            <Form.Label className="mx-1 center-element" >BoundarySchool</Form.Label>
            <iframe src="https://app.guidek12.com/woodburnor/school_search/current/" height={400} className='iframe-element'></iframe>
            <br />
            <div className='center-element'>
              <Form.Label className='small p-0 text-muted mx-1 my-1'>Copy and paste boundary school here:</Form.Label>
              <Form.Control type="text" placeholder="Boundary School" className='mx-1 my-1 center-element' />
            </div>
            <br />
            <ButtonComponent toggleCurrent={props.toggleCurrent} toggleNext={props.toggleNext} togglePrevious={props.togglePrevious} />

          </Form.Group>
        )
      }
      )}
    </React.Fragment>
  )
}

export default BoundarySchool

