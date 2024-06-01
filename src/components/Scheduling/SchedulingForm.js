import React, { useState, useEffect } from 'react'
import { ModalBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SetTags from './SetTags';
import BoundarySchool from './SchoolSelect';
import DtSelect from './DtSelect';
import HeaderComponent from './HeaderComponent';
import LanguageSelect from './LanguageSelect';
import { clientSideGetData } from '../../apiCalls';
import ButtonComponent from './ButtonComponent';


function SchedulingForm({ dataRow, turnOffScheduling, scheduling }) {

  const [languages, setLanguages] = useState([])
  const [arrToSave, setArrToSave] = useState('')

  //view states
  const [intro, setIntro] = useState(true)
  const [languageSelect, setLanguageSelect] = useState(false)
  const [tagSelect, setTagSelect] = useState(false)
  const [schoolSelect, setSchoolSelect] = useState(false)
  const [dtSelect, setDtSelect] = useState(false)

  useEffect(() => {
    clientSideGetData("Home Languages", 2, 2, 1, displayLanguages)
  }, [])


  function displayLanguages(response) {
    const data = JSON.parse(response)
    setLanguages(data)
  }

  return (
    <Modal show={scheduling} onHide={turnOffScheduling} size='lg'>
      <HeaderComponent dataRow={dataRow} />
      <ModalBody>
        {intro ?
          <div>
            <h5 >Follow these prompts to sechedule an appointment for {`${dataRow[1]} ${dataRow[2]}`}</h5>
            <ButtonComponent toggleCurrent={setIntro} toggleNext={setLanguageSelect} togglePrevious={turnOffScheduling} />
          </div>
          : ''}

        <br />
        {languageSelect ? <LanguageSelect dataRow={dataRow} toggleCurrent={setLanguageSelect} toggleNext={setTagSelect} togglePrevious={setIntro} languages={languages} /> : ''}
        <br />
        {tagSelect ? <SetTags dataRow={dataRow} toggleCurrent={setTagSelect} toggleNext={setSchoolSelect} togglePrevious={setLanguageSelect} /> : ''}
        <br />
        {schoolSelect ? <BoundarySchool toggleCurrent={setSchoolSelect} toggleNext={setDtSelect} togglePrevious={setTagSelect} /> : ''}
        <br />
        {dtSelect ? <DtSelect toggleCurrent={setDtSelect} togglePrevious={setSchoolSelect} /> : ''}

      </ModalBody>
      <Button variant="warning" onClick={turnOffScheduling}>Close</Button>
    </Modal>
  )
}

export default SchedulingForm;