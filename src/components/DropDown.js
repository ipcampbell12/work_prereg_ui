import Dropdown from 'react-bootstrap/Dropdown';

function DropdownMenu(props) {
    return (
        <Dropdown onChange={props.onChange}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {`Select ${props.label}`}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    props.data.map((option, index) => {
                        return (
                            <Dropdown.Item key={index}>{option}</Dropdown.Item>
                        )
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownMenu;