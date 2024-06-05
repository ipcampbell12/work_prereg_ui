import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtonComponent({ toggleCurrent, toggleNext, togglePrevious }) {
    return (
        <div className='center-element'>
            <Button variant="danger" className="mx-1 my-1 center-element" onClick={() => { toggleCurrent(false); togglePrevious(true) }}>Previous</Button>
            <Button variant="primary" className="mx-1 my-1 center-element" onClick={() => { toggleCurrent(false); toggleNext(true) }}>Next</Button>
        </div>
    );
}

export default ButtonComponent;