import React from 'react';
import Form from 'react-bootstrap/Form';
import { gradeLevels } from '../options';
import { schoolNames } from '../options';

function UpdatingForm({ handleInputChange, dataRow }) {
    return (
        <React.Fragment>
            <Form>
                <Form.Group>
                    <Form.Label className='small p-0 text-muted'>DOB: {new Date(dataRow[3]).toLocaleDateString('en-US')}</Form.Label>
                    <Form.Control type="date" placeholder="Enter DOB" onChange={(e) => handleInputChange(3, e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='small p-0 text-muted'>Grade Level: {dataRow[4]}</Form.Label>
                    <Form.Select onChange={(e) => handleInputChange(4, e.target.value)}>
                        <option>Select a grade level</option>
                        {gradeLevels.map((grade, idx) => {
                            return (
                                <option key={idx} value={grade}>{grade}</option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='small p-0 text-muted'>School: {dataRow[5]}</Form.Label>
                    <Form.Select onChange={(e) => handleInputChange(5, e.target.value)}>
                        <option>Select a school</option>
                        {schoolNames.map((school, idx) => {
                            return (
                                <option key={idx} value={school}>{school}</option>
                            )
                        })}
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label className='small p-0 text-muted'>Parent: {dataRow[6]}</Form.Label>
                    <Form.Control type="text" placeholder="Enter Parent" onChange={(e) => handleInputChange(6, e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='small p-0 text-muted'>Parent Phone: {dataRow[7]}</Form.Label>
                    <Form.Control type="tel" placeholder="Enter Parent Phone" onChange={(e) => handleInputChange(7, e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='small p-0 text-muted'>Status: {dataRow[8]}</Form.Label>
                    <Form.Select onChange={(e) => handleInputChange(8, e.target.value)}>
                        <option>Select a status option</option>
                        <option value="submitted">submitted</option>
                        <option value="scheduled">scheduled</option>
                        <option value="pending">pending</option>
                        <option value="transferred">transferred</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        </React.Fragment>
    );
}

export default UpdatingForm;