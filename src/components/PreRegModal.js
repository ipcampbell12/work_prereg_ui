import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdatingForm from './UpdatingForm';
//import DropdownMenu from './DropDown';



function PreRegModal({ dataRow, closeModal, modalOpen, getData }) {

    const [editing, setEditing] = useState(false);
    const [arrToSave, setArrToSave] = useState(dataRow.slice(0, 9));

    async function clientSideSaveData(row, data) {
        try {
            //console.log("Attempting to fetch data from google sheet")
            console.log(data)
            await google.script.run.serverSideUpdateRow(row, data);

        } catch (error) {
            console.error("Error fetching data: ", error)
        }
    }

    const turnOnEditing = () => {
        setEditing(true)
    }
    const saveChanges = (e) => {
        e.preventDefault()
        const row = dataRow[0]
        const data = [dataRow[0], dataRow[1], dataRow[2], ...arrToSave.slice(3)]
        clientSideSaveData(row, data);
        setEditing(false);
        getData()
        console.log('Changes saved')
    }

    const handleInputChange = (index, value) => {
        console.log("The entered value is: ", value)

        const newArr = [...arrToSave];
        newArr[index] = value;
        setArrToSave(newArr);
    };


    return (

        <Modal show={modalOpen} onHide={closeModal} >
            <Modal.Header closeButton>
                <Modal.Title>{dataRow[2]}, {dataRow[1]}</Modal.Title>
            </Modal.Header>
            {!editing ?
                <Modal.Body>

                    <p className='small p-0'>DOB: {new Date(dataRow[3]).toLocaleDateString('en-US')}</p>
                    <p className='small p-0'>Grade Level: {dataRow[4]}</p>
                    <p className='small p-0'>School: {dataRow[5]}</p>
                    <p className='small p-0'>Parent: {dataRow[6]}</p>
                    <p className='small p-0'>Parent Phone: {dataRow[7]}</p>
                    <p className='small p-0'>Status: {dataRow[8]}</p>

                </Modal.Body>
                :
                <Modal.Body>
                    <UpdatingForm handleInputChange={handleInputChange} dataRow={dataRow} />
                </Modal.Body>
            }
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Close</Button>
                <Button variant={editing ? "primary" : "danger"} onClick={editing ? saveChanges : turnOnEditing}>{editing ? "Save Changes" : "Edit Information"}</Button>
            </Modal.Footer>

        </Modal>


    );
}

export default PreRegModal;