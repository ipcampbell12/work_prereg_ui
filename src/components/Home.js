import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';



function Home() {

    const [dataState, setDataState] = useState([]);
    const [tabState, setTabState] = useState("submitted");
    const [dataRow, setDataRow] = useState(dataState[0])
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    const handleTabClick = (tab) => {
        setTabState(tab);
        console.log("The tab state is now: ", tab)
    };

    async function clientSideGetData() {
        try {
            //console.log("Attempting to fetch data from google sheet")
            await google.script.run
                .withSuccessHandler(displaySheetData)
                .withFailureHandler(errorHandler)
                .serverSideGetData("Pre Registrations",2,1,10);

        } catch (error) {
            console.error("Error fetching data: ", error)
        }
    }

    function errorHandler(error) {
        console.error("Error from Google Script: ", error);
    }

    function displaySheetData(response) {
        const data = JSON.parse(response)
        setDataState(data)
    }

    return (
        <div>
            <h1> Behold The Data</h1>

            <Tabs onTab={handleTabClick} tabState={tabState} getData={clientSideGetData} dataState={dataState} openModal={openModal} setDataRow={setDataRow} modalOpen={modalOpen} closeModal={closeModal} dataRow={dataRow} />


        </div>
    );
}

export default Home;

// <Tabs getData={clientSideGetData} dataState={dataState} />