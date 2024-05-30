import React,{ useState, useEffect } from 'react'
import { ModalBody } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SetTags from './SetTags';
import BoundarySchool from './BoundarySchool';
import Appointment from './Appointment';



 function SchedulingForm({dataRow, turnOffScheduling,scheduling}) {

  const [languages,setLanguages] = useState([])
  const [arrToSave, setArrToSave] = useState('')
  const [tagSelect,setTagSelect] = useState(false)
  const [schoolSelect,setSchoolSelect] = useState(false)
  const [dtSelect,setDtSelect] = useState(false)

  const handleTagSelect = () =>{
    setTagSelect(true)
  }

  const handleSchoolSelect = () =>{
    setSchoolSelect(true)
  }

  const handleDtSelect = () =>{
    setDtSelect(true)
  }

  async function clientSideGetData() {
    try {
        //console.log("Attempting to fetch data from google sheet")
        await google.script.run
            .withSuccessHandler(displaySheetData)
            .serverSideGetData("Home Languages",2,2,1);
  
    } catch (error) {
        console.error("Error fetching data: ", error)
    }
  }

  useEffect(()=>{
    clientSideGetData()
  },[])

  function displaySheetData(response) {
    const data = JSON.parse(response)
    setLanguages(data)
}

const handleInputChange = (index, value) => {
  console.log("The entered value is: ", value)

  const newArr = [...arrToSave];
  newArr[index] = value;
  setArrToSave(newArr);
};

  return (
    <Modal show={scheduling} onHide={turnOffScheduling} fullscreen={true} >
     <Modal.Header>
      <h1>Scheduling Form</h1>
      <br />
      <h5>Schedule Appointment for: {dataRow[1]} {dataRow[2]}</h5>
      
      </Modal.Header>
      <ModalBody>
      <p>This is where the scheduling happens</p>
              <Form.Group>
                    <Form.Label className='small p-0 text-muted'>What is the home language for {dataRow[1]} {dataRow[2]}?</Form.Label>
                    <Form.Select onChange={(e) => handleInputChange(10, e.target.value)}>
                        <option>Select a langauge</option>
                        {languages.map((school, idx) => {
                            return (
                                <option key={idx} value={school}>{school}</option>
                            )
                        })}
                    </Form.Select>
                    <Button variant="primary" onClick={handleTagSelect}>Next</Button>
                </Form.Group>
      
     {tagSelect ? <SetTags dataRow={dataRow} handleSchoolSelect={handleSchoolSelect}/> :''}
     {schoolSelect? <BoundarySchool handleDtSelect={handleDtSelect}/> :''}
     {dtSelect? <Appointment /> :''}
      </ModalBody>
      <Button variant="warning" onClick={turnOffScheduling}>Close</Button>
    </Modal>
  )
}

export default SchedulingForm;