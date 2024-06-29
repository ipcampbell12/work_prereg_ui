import React from 'react';
import { schoolNames, copyToClipboard } from '../../options';
import Form from 'react-bootstrap/Form';



function StudentRow(props) {
    return (
        <tr>
            <td>{props.fname}</td>
            <td>{props.lname}</td>
            <td>{props.grade}</td>
            <td>{props.address} <p>&#x1F601;</p></td>
            <td>
                <Form.Select>
                    {schoolNames.map((school) => {
                        return (
                            <option value={school}>{school}</option>
                        )
                    })}
                </Form.Select>
            </td>


        </tr>
    );
}

export default StudentRow;