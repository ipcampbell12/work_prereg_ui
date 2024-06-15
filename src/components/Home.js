import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';



function Home() {
    const [dataState, setDataState] = useState([]);
    const [siblingsState, setSiblingsState] = useState([]);

    const handleParent = (parent) => {
        console.log("The parent selected is: ", parent);
        clientSideGetSiblings(parent, displaySiblings);
        console.log("Sibling state is: ", siblingsState);
    };

    useEffect(() => {
        clientSideGetData("Pre Registrations", 2, 1, 14, displaySheetData);
    }, []);

    function displaySiblings(response) {
        const data = JSON.parse(response);
        setSiblingsState(data);
    }

    function displaySheetData(response) {
        const data = JSON.parse(response);
        setDataState(data);
    }

    //onTab was handleTabClick
    return (
        <div>
            <h1> Behold The Data</h1>

            <Tabs
                dataState={dataState}
                siblingsState={siblingsState}
                onParent={handleParent}
                displaySheetData={displaySheetData}
            />
        </div>
    );
}

export default Home;

// <Tabs getData={clientSideGetData} dataState={dataState} />