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
      <Form.Label className='small p-0 text-muted'>Please note any of the following situations
      </Form.Label>
      <div className='mx-1 my-1'>
        {props.siblingsState.map(row => {
          return (
            <Container className='mx-1 my-1' key={row[0]}>
              <h6 className='mx-2 my-2 text-muted'>Check all of the following that apply for {<p className='fw-bold' style={{ display: "inline" }}>{`${row[1]}  ${row[2]}`}</p>}</h6>
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
          )
        }
        )}
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
