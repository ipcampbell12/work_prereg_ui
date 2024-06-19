import React from 'react';
import Form from 'react-bootstrap/Form';
import ButtonComponent from './ButtonComponent';
import { languages } from '../../options';

function LanguageSelect(props) {
    return (
        <Form.Group>
            <Form.Label className='small p-0 text-muted center-element'>What is the home language for {props.siblingsState.map((row) => `${row[2]},${row[1]}`).join(', ')}?</Form.Label>
            <br />
            <Form.Select className='center-element'>
                <option>Select a langauge</option>
                {languages.map((language, idx) => {
                    return (
                        <option key={idx} value={language}>{language}</option>
                    )
                })}
            </Form.Select>
            <br />
            <ButtonComponent toggleCurrent={props.toggleCurrent} toggleNext={props.toggleNext} togglePrevious={props.togglePrevious} />


        </Form.Group>
    );
}

export default LanguageSelect;