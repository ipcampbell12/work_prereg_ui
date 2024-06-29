import React, { useState, useEffect } from 'react';
import { schoolNames, copyToClipboard } from '../../options';
import Form from 'react-bootstrap/Form';



function StudentRow(props) {

    const [schoolSelected, setSchoolSelected] = useState(false)

    const handleSchoolSelect = (event) => {
        if (event.target.value !== "Select School") {
            setSchoolSelected(true);
        }
        console.log("schoolSelected is set to ", schoolSelected)
    };


    return (
        <tr className={schoolSelected ? 'bg-success-subtle' : "bg-body-secondary"}>
            <td>{props.fname}</td>
            <td>{props.lname}</td>
            <td>{props.grade}</td>
            <td className='center-element'>{props.address}</td>
            <td className='center-element small-text'>
                <p>Copy</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16" onClick={() => { copyToClipboard(props.address); props.onAlert(true) }}>
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                </svg>
            </td>
            <td>
                <Form.Select onChange={handleSchoolSelect}>
                    <option>Select School</option>
                    {schoolNames.map((school, idx) => {
                        return (
                            <option key={idx} value={school} size="sm">{school}</option>
                        )
                    })}
                </Form.Select>
            </td>


        </tr>
    );
}

export default StudentRow;