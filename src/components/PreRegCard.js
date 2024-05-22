import React from 'react';

function PreRegCard({ row, openModal, setDataRow }) {
    return (
        <div className='card m-2 bg-warning bg-opacity-25' style={{ width: "18rem" }}>
            <div className='card-body'>
                <h6 className='card-title p-0'>{row[2]}, {row[1]}</h6>
                <div>
                    <div className='card-text p-0'>
                        <p className='small p-0'>DOB: {new Date(row[3]).toLocaleDateString('en-US')}</p>
                        <p className='small p-0'>Grade Level: {row[4]}</p>
                        <p className='small p-0'>School: {row[5]}</p>
                        <p className='small p-0'>Parent: {row[6]}</p>
                        <p className='small p-0'>Parent Phone: {row[7]}</p>
                        <p className='small p-0'>Status: {row[7]}</p>
                    </div>
                    <button onClick={() => { openModal(); setDataRow(row) }} className="btn btn-primary">Open Pre Registration</button>
                </div>
            </div>
        </div>
    );
}

export default PreRegCard;