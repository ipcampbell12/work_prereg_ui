import Form from 'react-bootstrap/Form';
import React from 'react';
import { tags } from '../../options';
import ButtonComponent from './ButtonComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SetTags(props) {
  // Assuming tags always has at least 10 elements
  const firstColumnTags = tags.slice(0, 5);
  const secondColumnTags = tags.slice(5, 10);

  return (
    <Form.Group>
      <Form.Label className='small p-0 text-muted'>
        Please check any of the following for {props.siblingsState.map((row) => { `${row[2]},${row[1]}` })}
      </Form.Label>
      <div className='mx-1 my-1'>
        <Container>
          <Row>
            <Col>
              {firstColumnTags.map((tag, idx) => (
                <Form.Check
                  type="switch"
                  id={`custom-switch-${idx}`}
                  className="d-flex flex-nowrap"
                  key={idx}
                  label={tag}
                  value={tag}
                />
              ))}
            </Col>
            <Col>
              {secondColumnTags.map((tag, idx) => (
                <Form.Check
                  type="switch"
                  id={`custom-switch-${idx + 5}`} // Ensure unique id
                  className="d-flex flex-nowrap"
                  key={idx + 5}
                  label={tag}
                  value={tag}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
      {tags.length > 0 && (
        <ButtonComponent
          toggleCurrent={props.toggleCurrent}
          toggleNext={props.toggleNext}
          togglePrevious={props.togglePrevious}
        />
      )}
    </Form.Group>
  );
}

export default SetTags;
