import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react'
import { clientSideGetData } from '../../apiCalls';
import { Button } from 'react-bootstrap';
import ButtonComponent from './ButtonComponent';

function SetTags({ dataRow, toggleCurrent, toggleNext, togglePrevious }) {

  const [tags, setTags] = useState([])

  useEffect(() => {
    clientSideGetData("Tags", 2, 1, 2, displayTags)
  }, [])


  function displayTags(response) {
    const data = JSON.parse(response)
    setTags(data)
  }

  return (
    <Form.Group>
      <Form.Label className='small p-0 text-muted'>Please check any of the following for {dataRow[1]} {dataRow[2]}</Form.Label>
      {tags.map((tag, idx) => {
        return (
          <Form.Check
            type="switch"
            id="custom-switch"
            key={idx}
            label={tag[1]}
            value={tag[1]}
          />
        )
      })}
      {tags.length > 0 ? <ButtonComponent toggleCurrent={toggleCurrent} toggleNext={toggleNext} togglePrevious={togglePrevious} /> : ''}

    </Form.Group>
  );
}

export default SetTags;