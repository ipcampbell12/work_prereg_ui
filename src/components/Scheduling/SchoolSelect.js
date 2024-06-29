import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent';
import StudentRow from './StudentRow';
import Button from 'react-bootstrap/Button';
import CustomAlert from '../../UI/CustomAlert'
import Table from 'react-bootstrap/Table';

//import '../../styles/main.scss'; // Import the CSS file

const BoundarySchool = (props) => {
  const [alertState, setAlertState] = useState(false)


  return (
    <React.Fragment>

      <Form.Group>
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Grade</th>
              <th>Address</th>
              <th>School Select</th>
            </tr>
          </thead>
          <tbody>
            {
              props.siblingsState.map((sibling) => {
                return (
                  <StudentRow
                    key={sibling[0]}
                    fname={sibling[1]}
                    lname={sibling[2]}
                    grade={sibling[4]}
                    address={sibling[5]}
                    onAlert={setAlertState} />

                )
              })
            }
          </tbody>
        </Table>
        <Button onClick={() => { copyToClipboard(props.address); props.onAlert(true) }} variant="secondary" size="sm" className='mx-1 my-1' active>Copy Address to Clipboard</Button>
        <div className="mx-1 my-1">
          {alertState && <CustomAlert variant={'success'} text={"Address Copied to Clipboard!"} setAlert={setAlertState} />}
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

