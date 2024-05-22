import React from 'react';

function PreRegModal({ dataRow, closeModal }) {
    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">{dataRow[2]}, {dataRow[1]}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                    <div className='card-text p-0'>
                        <p className='small p-0'>DOB: {new Date(dataRow[3]).toLocaleDateString('en-US')}</p>
                        <p className='small p-0'>Grade Level: {dataRow[4]}</p>
                        <p className='small p-0'>School: {dataRow[5]}</p>
                        <p className='small p-0'>Parent: {dataRow[6]}</p>
                        <p className='small p-0'>Parent Phone: {dataRow[7]}</p>
                        <p className='small p-0'>Status: {dataRow[7]}</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={closeModal}>Understood</button>
                </div>
            </div>
        </div>
    );
}

export default PreRegModal;