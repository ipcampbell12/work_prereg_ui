import { Fragment, useEffect } from 'react';
import PreRegCard from './PreRegCard';

function DataDisplay(props) {


    return (
        <Fragment>
            {props.dataState &&
                <ul>
                    {
                        props.dataState.filter(row => row[8] === props.tabState).map(row => {
                            return (
                                <PreRegCard row={row} key={row[0]} openModal={props.openModal} setDataRow={props.setDataRow} setSiblings={props.setSiblings} />
                            )
                        })
                    }

                </ul>
            }


        </Fragment>
    );
}

export default DataDisplay;