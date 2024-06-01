import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtonComponent({ toggleCurrent, toggleNext, togglePrevious }) {
    return (
        <div>
            <Button variant="danger" onClick={() => { toggleCurrent(false); togglePrevious(true) }}>Previous</Button>
            <Button variant="primary" onClick={() => { toggleCurrent(false); toggleNext(true) }}>Next</Button>
        </div>
    );
}

export default ButtonComponent;