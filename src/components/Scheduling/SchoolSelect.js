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
        <div className="container text-center">
          <div className="col justify-content-center">
            <div className='row border border-black'>
              <h6>Select the Student</h6>
              <Form.Select className='center-element mx-1 my-1'>
                <option>Select one of the students</option>
                {props.siblingsState.map((sibling) => {
                  return (
                    <option key={sibling[0]}>{`${sibling[1]}, ${sibling[2]}, Grade level: ${sibling[4]}`}</option>
                  )
                })
                }
              </Form.Select>
            </div>
            <div className='row border border-black'>
              <h6>Copy Address</h6>
              <Form.Label className='mx-1 my-1'><p>{props.siblingsState[0][5]}</p></Form.Label>
              <Button onClick={() => { copyToClipboard(props.siblingsState[0][5]); setAlertState(true) }} variant="secondary" size="sm" className='mx-1 my-1' active>Copy Address to Clipboard</Button>
            </div>
            <div className='row border border-black'>
              <h6>Select Boundary School</h6>
              <Form.Select className='center-element mx-1 my-1'>
                <option>Boundary School</option>
                {schoolNames.map((school, idx) => {
                  return (
                    <option key={idx} value={school}>{school}</option>
                  )
                })}
              </Form.Select>
            </div>
          </div>
          <div className="col justify-content-center">
            {
              props.siblingsState.map(sibling => {
                return (
                  <div key={sibling[0]} className='row border border-black mx-1 my-1'>
                    <p className="mx-1 my-1">{`${sibling[1]}, ${sibling[2]}, Grade level: ${sibling[4]}`}</p>
                    <p className="mx-1 my-1">Boundary School: {sibling[10]}</p>
                  </div>
                )
              })
            }
          </div>

          <div className="row justify-content-between mx-1 my-1">
            {alertState && <CustomAlert variant={'success'} text={"Address Copied to Clipboard!"} setAlert={setAlertState} />}
          </div>
        </div>
        <br />

        <iframe src="https://app.guidek12.com/woodburnor/school_search/current/" height={400} width={200} className='iframe-element'></iframe>
        <br />

        <ButtonComponent toggleCurrent={props.toggleCurrent} toggleNext={props.toggleNext} togglePrevious={props.togglePrevious} />

      </Form.Group>


    </React.Fragment>
  )
}

export default BoundarySchool

