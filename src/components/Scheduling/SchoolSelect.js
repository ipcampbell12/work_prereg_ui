import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent';
import { schoolNames, copyToClipboard } from '../../options';
import CustomAlert from '../../UI/CustomAlert'


const BoundarySchool = (props) => {
  const [alertState, setAlertState] = useState(false)


  return (
    <React.Fragment>

      <Form.Group className="center-element map-container align-baseline">



        <Form.Select className='center-element mx-3 my-3'>
          <option>Select one of the students</option>
          {props.siblingsState.map((sibling) => {
            return (
              <option key={sibling[0]}>{`${sibling[1]}, ${sibling[2]}, Grade level: ${sibling[4]}`}</option>
            )
          })
          }
        </Form.Select>
        <Form.Label className='mx-1 my-1'>Address: {props.siblingsState[0][5]}</Form.Label>
        <Button onClick={() => { copyToClipboard(props.siblingsState[0][5]); setAlertState(true) }} variant="secondary" size="sm" className='mx-1 my-1' active>Copy Address to Clipboard</Button>
        {alertState && <CustomAlert variant={'success'} text={"Address Copied to Clipboard!"} setAlert={setAlertState} />}

        <Form.Label className="mx-1 center-element" >BoundarySchool</Form.Label>
        <iframe src="https://app.guidek12.com/woodburnor/school_search/current/" height={400} width={200} className='iframe-element'></iframe>
        <br />


        <Form.Select className='center-element mx-3 my-3'>
          <option>Select a Boundary School based on output above</option>
          {schoolNames.map((school, idx) => {
            return (
              <option key={idx} value={school}>{school}</option>
            )
          })}
        </Form.Select>
        <br />
        <ButtonComponent toggleCurrent={props.toggleCurrent} toggleNext={props.toggleNext} togglePrevious={props.togglePrevious} />

      </Form.Group>


    </React.Fragment>
  )
}

export default BoundarySchool

