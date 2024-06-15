import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UpdatingForm from "./UpdatingForm";
import BasicInfo from "./BasicInfo";
import { clientSideSaveData, clientSideGetData } from "../apiCalls";
//import DropdownMenu from './DropDown';

function PreRegModal({
  dataRow,
  closeModal,
  modalOpen,
  turnOnScheduling,
  onParent,
  displaySheetData
}) {
  const [editing, setEditing] = useState(false);
  const [arrToSave, setArrToSave] = useState(dataRow.slice(0, 9));

  const turnOnEditing = () => {
    setEditing(true);
  };
  const saveChanges = (e) => {
    e.preventDefault();
    const row = dataRow[0];
    const data = [dataRow[0], dataRow[1], dataRow[2], ...arrToSave.slice(3)];
    clientSideSaveData(row, data);
    setEditing(false);
    //update data being dipslayed on UI
    clientSideGetData("Pre Registrations", 2, 1, 14, displaySheetData)
    console.log("Changes saved");
  };

  const handleInputChange = (index, value) => {
    console.log("The entered value is: ", value)

    const newArr = [...arrToSave];
    newArr[index] = value;
    setArrToSave(newArr);
  };

  return (
    <Modal show={modalOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {dataRow[2]}, {dataRow[1]}
        </Modal.Title>
      </Modal.Header>

      {!editing ? (
        <Modal.Body>
          <BasicInfo dataRow={dataRow} />
        </Modal.Body>
      ) : (
        <Modal.Body>
          <UpdatingForm
            handleInputChange={handleInputChange}
            dataRow={dataRow}
          />
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button
          variant="warning"
          onClick={() => {
            onParent(dataRow[6]);
            turnOnScheduling();
            closeModal();
          }}
        >
          Schedule Appointment
        </Button>
        <Button
          variant={editing ? "primary" : "danger"}
          onClick={editing ? saveChanges : turnOnEditing}
        >
          {editing ? "Save Changes" : "Edit Information"}
        </Button>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PreRegModal;