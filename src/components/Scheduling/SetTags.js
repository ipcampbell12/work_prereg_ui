import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react'
import { tags } from '../../options';
import ButtonComponent from './ButtonComponent';

function SetTags({ dataRow, toggleCurrent, toggleNext, togglePrevious }) {


  return (
    <Form.Group>
      <Form.Label className='small p-0 text-muted' >Please check any of the following for {dataRow[1]} {dataRow[2]}</Form.Label>
      <div>
        {tags.map((tag, idx) => {
          return (
            <Form.Check
              type="switch"
              id="custom-switch"
              key={idx}
              label={tag}
              value={tag}
            />
          )
        })}
      </div>
      {tags.length > 0 ? <ButtonComponent toggleCurrent={toggleCurrent} toggleNext={toggleNext} togglePrevious={togglePrevious} /> : ''}

    </Form.Group>
  );
}

export default SetTags;