import React, { useEffect, useState } from 'react';
import DataDisplay from './DataDisplay';
import PreRegModal from './PreRegModal';
import SchedulingForm from './Scheduling/SchedulingForm';


const tabNames = ["submitted", "scheduled", "pending", "transferred"];

function Tabs(props) {
  const [scheduling, setScheduling] = useState(false);
  const [tabState, setTabState] = useState("submitted");
  const [modalOpen, setModalOpen] = useState(false);
  const [dataRow, setDataRow] = useState(props.dataState[0]);

  //add sibling state to Tabs component to reduce complexity. You don't need ot pass it around 
  const handleTabClick = (tab) => {
    setTabState(tab);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  //can be moved to preRegeModal
  const showData = (response) => {
    console.log("Turn on scheduling is running")
    const data = JSON.parse(response);
    props.setSiblingsState(data)
    //props.spinnerOff()
    //console.log("Spinner has been turned off")
    console.log("Scheduling state is: ", scheduling)
  };

  const turnOffScheduling = () => {
    setScheduling(false);
    console.log("Scheduling is getting turned off")
  };

  return (
    <div>
      {modalOpen && (
        <PreRegModal
          dataRow={dataRow}
          closeModal={closeModal}
          modalOpen={modalOpen}
          turnOnScheduling={() => setScheduling(true)}
          onParent={props.onParent}
          displaySheetData={props.displaySheetData}
          spinnerOn={props.spinnerOn}
          showData={showData}
        />
      )}
      {scheduling && (
        <SchedulingForm
          siblingsState={props.siblingsState}
          turnOffScheduling={turnOffScheduling}
          scheduling={scheduling}
          setSiblingsState={props.setSiblingsState}
        />
      )}
      <ul className="nav nav-tabs" role="tablist">
        {tabNames.map((tab, index) => {
          return (
            <li
              className="nav-item"
              role="presentation"
              key={index}
              aria-label={`${tab}`}
            >
              <button
                className={`nav-link ${tabState === tab ? "active" : ""}`}
                id={`${tab}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#${tab}-tab-pane`}
                type="button"
                role="tab"
                aria-controls={`${tab}-tab-pane`}
                aria-selected={tabState === tab}
                onClick={(tab) => handleTabClick(tab.target.id.split("-")[0])}
              >
                {tab}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className={`tab-pane fade ${tabState === "submitted" ? "show active" : ""}`}
          id="submitted-tab-pane"
          role="tabpanel"
          aria-labelledby="submitted-tab"
          tabIndex="0"
        >
          {tabState === "submitted" && (
            <DataDisplay
              dataState={props.dataState}
              tabState={tabState}
              openModal={openModal}
              setDataRow={setDataRow}
            />
          )}
        </div>
        <div
          className={`tab-pane fade ${tabState === "scheduled" ? "show active" : ""}`}
          id="scheduled-tab-pane"
          role="tabpanel"
          aria-labelledby="scheduled-tab"
          tabIndex="0"
        >
          {tabState === "scheduled" && (
            <DataDisplay
              dataState={props.dataState}
              tabState={tabState}
              openModal={openModal}
              setDataRow={setDataRow}
            />
          )}
        </div>
        <div
          className={`tab-pane fade ${tabState === "pending" ? "show active" : ""}`}
          id="pending-tab-pane"
          role="tabpanel"
          aria-labelledby="pending-tab"
          tabIndex="0"
        >
          {tabState === "pending" && (
            <DataDisplay
              dataState={props.dataState}
              tabState={tabState}
              openModal={openModal}
              setDataRow={setDataRow}
            />
          )}
        </div>
        <div
          className={`tab-pane fade ${tabState === "transferred" ? "show active" : ""}`}
          id="transferred-tab-pane"
          role="tabpanel"
          aria-labelledby="transferred-tab"
          tabIndex="0"
        >
          {tabState === "transferred" && (
            <DataDisplay
              dataState={props.dataState}
              tabState={tabState}
              openModal={openModal}
              setDataRow={setDataRow}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
