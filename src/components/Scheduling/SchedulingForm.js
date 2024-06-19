import React, { useState, useEffect } from 'react'
import { ModalBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SetTags from './SetTags';
import BoundarySchool from './SchoolSelect';
import DtSelect from './DtSelect';
import HeaderComponent from './HeaderComponent';
import LanguageSelect from './LanguageSelect';
import ButtonComponent from './ButtonComponent';
import Spinner from 'react-bootstrap/Spinner';


function SchedulingForm(props) {


  const [arrToSave, setArrToSave] = useState('')

  //view states
  const [intro, setIntro] = useState(true)
  const [languageSelect, setLanguageSelect] = useState(false)
  const [tagSelect, setTagSelect] = useState(false)
  const [schoolSelect, setSchoolSelect] = useState(false)
  const [dtSelect, setDtSelect] = useState(false)

  console.log("Spinner state is: ", props.spinnerState)

  return (
    <Modal show={props.scheduling} onHide={props.turnOffScheduling} size='lg'>

      {props.spinnerState && (
        <div className='center-element my-5 mx-5'>
          <Spinner animation="grow" variant="info" role="status" />
        </div>
      )}

      {!props.spinnerState && (
        <React.Fragment>
          <HeaderComponent siblingsState={props.siblingsState} />
          <ModalBody>
            {intro ?
              <div>
                <h6 className='center-element mx-2 my-2 text-muted'>Follow these prompts to sechedule an appointment for {props.siblingsState.map((row) => `${row[2]}, ${row[1]}`).join(', ')}</h6>
                <ButtonComponent toggleCurrent={setIntro} toggleNext={setLanguageSelect} togglePrevious={props.turnOffScheduling} />
              </div>
              : ''}

            <br />
            {languageSelect ? <LanguageSelect siblingsState={props.siblingsState} toggleCurrent={setLanguageSelect} toggleNext={setTagSelect} togglePrevious={setIntro} /> : ''}
            <br />
            {tagSelect ? <SetTags siblingsState={props.siblingsState} toggleCurrent={setTagSelect} toggleNext={setSchoolSelect} togglePrevious={setLanguageSelect} /> : ''}
            <br />
            {schoolSelect ? <BoundarySchool siblingsState={props.siblingsState} toggleCurrent={setSchoolSelect} toggleNext={setDtSelect} togglePrevious={setTagSelect} /> : ''}
            <br />
            {dtSelect ? <DtSelect toggleCurrent={setDtSelect} togglePrevious={setSchoolSelect} /> : ''}

          </ModalBody>
        </React.Fragment>
      )

      }
      <div className='center-element'>
        <Button className="mx-1 my-1 center-element" variant="danger" width="75px" onClick={props.turnOffScheduling}>Close</Button>
      </div>
    </Modal>

  )
}

export default SchedulingForm;