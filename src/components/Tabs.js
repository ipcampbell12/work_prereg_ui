import React, { useEffect, useState } from 'react';
import DataDisplay from './DataDisplay';
import PreRegModal from './PreRegModal';

const tabNames = ["submitted", "scheduled", "pending", "transferred"];

function Tabs({ onTab, tabState, getData, dataState, openModal, setDataRow, modalOpen, closeModal, dataRow }) {


    useEffect(() => {
        getData();
        //console.log("The tab state in tabs is: ", tabState)
    }, []);


    return (
        <div>
            {modalOpen && <PreRegModal dataRow={dataRow} closeModal={closeModal} modalOpen={modalOpen} getData={getData} />}
            <ul className="nav nav-tabs" role="tablist">
                {
                    tabNames.map((tab, index) => {
                        return (
                            <li className="nav-item" role="presentation" key={index} aria-label={`${tab}`}>
                                <button
                                    className={`nav-link ${tabState === tab ? 'active' : ''}`}
                                    id={`${tab}-tab`}
                                    data-bs-toggle="tab"
                                    data-bs-target={`#${tab}-tab-pane`}
                                    type="button"
                                    role="tab"
                                    aria-controls={`${tab}-tab-pane`}
                                    aria-selected={tabState === tab}
                                    onClick={(tab) => onTab(tab.target.id.split('-')[0])}
                                >
                                    {tab}
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className={`tab-pane fade ${tabState === 'submitted' ? 'show active' : ''}`} id="submitted-tab-pane" role="tabpanel" aria-labelledby="submitted-tab" tabIndex="0">
                    {tabState === 'submitted' && <DataDisplay dataState={dataState} getData={getData} tabState={tabState} openModal={openModal} setDataRow={setDataRow} />}
                </div>
                <div className={`tab-pane fade ${tabState === 'scheduled' ? 'show active' : ''}`} id="scheduled-tab-pane" role="tabpanel" aria-labelledby="scheduled-tab" tabIndex="0">
                    {tabState === 'scheduled' && <DataDisplay dataState={dataState} getData={getData} tabState={tabState} openModal={openModal} setDataRow={setDataRow} />}</div>
                <div className={`tab-pane fade ${tabState === 'pending' ? 'show active' : ''}`} id="pending-tab-pane" role="tabpanel" aria-labelledby="pending-tab" tabIndex="0">
                    {tabState === 'pending' && <DataDisplay dataState={dataState} getData={getData} tabState={tabState} openModal={openModal} setDataRow={setDataRow} />}</div>
                <div className={`tab-pane fade ${tabState === 'transferred' ? 'show active' : ''}`} id="transferred-tab-pane" role="tabpanel" aria-labelledby="transferred-tab" tabIndex="0">
                    {tabState === 'transferred' && <DataDisplay dataState={dataState} getData={getData} tabState={tabState} openModal={openModal} setDataRow={setDataRow} />}</div>
            </div>
        </div>
    );
}

export default Tabs;
