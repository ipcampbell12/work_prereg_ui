import { useEffect } from 'react'
import Alert from 'react-bootstrap/Alert'


function CustomAlert({ variant, text, setAlert }) {

    useEffect(() => {
        setTimeout(() => setAlert(false), 4000)
    });

    return (
        <Alert variant={variant}>
            {text}
            <span className="close" onClick={() => setShow(false)}> &times;</span>
        </Alert>
    );
}

export default CustomAlert;