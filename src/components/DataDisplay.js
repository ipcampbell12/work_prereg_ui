import { Fragment, useEffect } from 'react';
import PreRegCard from './PreRegCard';

function DataDisplay({ dataState, getData, tabState, openModal, setDataRow, setSiblings }) {

    useEffect(() => {
        //console.log("Use effect hook is running")
        getData()
    }, [])

    return (
        <Fragment>
            {dataState &&
                <ul>
                    {
                        dataState.filter(row => row[8] === tabState).map(row => {
                            return (
                                <PreRegCard row={row} key={row[0]} openModal={openModal} setDataRow={setDataRow} setSiblings={setSiblings} />
                            )
                        })
                    }

                </ul>
            }


        </Fragment>
    );
}

export default DataDisplay;