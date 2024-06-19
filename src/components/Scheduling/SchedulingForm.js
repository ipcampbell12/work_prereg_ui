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


function SchedulingForm(props) {


  const [arrToSave, setArrToSave] = useState('')

  //view states
  const [intro, setIntro] = useState(true)
  const [languageSelect, setLanguageSelect] = useState(false)
  const [tagSelect, setTagSelect] = useState(false)
  const [schoolSelect, setSchoolSelect] = useState(false)
  const [dtSelect, setDtSelect] = useState(false)

  return (
    <Modal show={props.scheduling} onHide={props.turnOffScheduling} size='lg'>
      <HeaderComponent siblingsState={props.siblingsState} />
      <ModalBody>
        {intro ?
          <div>
            <h5 className='center-element'>Follow these prompts to sechedule an appointment for {props.siblingsState.map((row) => { `${row[2]},${row[1]}` })}</h5>
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
      <div className='center-element'>
        <Button className="mx-1 my-1 center-element" variant="danger" width="75px" onClick={props.turnOffScheduling}>Close</Button>
      </div>
    </Modal>
  )
}

export default SchedulingForm;