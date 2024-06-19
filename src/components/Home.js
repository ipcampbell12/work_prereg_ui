import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';
import { clientSideGetData, clientSideGetSiblings } from '../apiCalls';



function Home() {
    const [dataState, setDataState] = useState([]);
    const [siblingsState, setSiblingsState] = useState([]);


    function spinnerOn() {
        setModalSpinnerState(true)
        console.log("spinnerOn change spinner state to: ", modalSpinnerState)
    }
    function spinnerOff() {
        setModalSpinnerState(false)
        console.log("spinnerOff change spinner state to: ", modalSpinnerState)
    }

    useEffect(() => {
        clientSideGetData("Pre Registrations", 2, 1, 14, displaySheetData);
    }, []);


    function displaySheetData(response) {
        const data = JSON.parse(response);
        setDataState(data);
        console.log(dataState)
    }


    //onTab was handleTabClick
    return (
        <div>
            <h1> Behold The Data</h1>


            <Tabs
                dataState={dataState}
                siblingsState={siblingsState}
                displaySheetData={displaySheetData}
                setSiblingsState={setSiblingsState}
                spinnerOn={spinnerOn}
                spinnerOff={spinnerOff}
            />

        </div>
    );
}

export default Home;

