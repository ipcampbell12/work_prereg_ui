import React from 'react';
import Form from 'react-bootstrap/Form';
import ButtonComponent from './ButtonComponent';

function LanguageSelect({ dataRow, toggleCurrent, toggleNext, togglePrevious, languages }) {
    return (
        <Form.Group>
            <Form.Label className='small p-0 text-muted'>What is the home language for {dataRow[1]} {dataRow[2]}?</Form.Label>
            <br />
            <Form.Select>
                <option>Select a langauge</option>
                {languages.map((school, idx) => {
                    return (
                        <option key={idx} value={school}>{school}</option>
                    )
                })}
            </Form.Select>
            <br />
            <ButtonComponent toggleCurrent={toggleCurrent} toggleNext={toggleNext} togglePrevious={togglePrevious} />


        </Form.Group>
    );
}

export default LanguageSelect;