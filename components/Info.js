import React, { useState } from 'react';
let Modal;
if (typeof window !== 'undefined') {
    Modal = require('bootstrap');
}

export default function Info(props) {
    const [newHeight, setNewHeight] = useState(0);
    const [newWidth, setNewWidth] = useState(0);
    const { islands, width, height } = props;

    return (
        <>
            <div className="container-fluid ">
                <div className="row my-5 t">
                    <div className="col">
                        <p className="fs-2">
                            Islands: {islands}
                        </p>
                    </div>
                    <div className="col">
                        <p className="fs-2">
                            Width: {width}
                        </p>
                    </div>
                    <div className="col">
                        <p className="fs-2">
                            Height: {height}
                        </p>
                    </div>

                    <div className="col">
                        <button type='button' className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#settingsModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                                <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
                            </svg>
                            {' '}Change grid size
                        </button>
                    </div>

                    <div className="modal fade" id="settingsModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <form>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Change Grid size</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* TODO: add input validations  */}
                                        <div className="mb-3">
                                            <label htmlFor="txtWidth" className="col-form-label">Width:</label>
                                            <input type="text" className="form-control" id="txtWidth" onChange={(event) => setNewWidth(event.target.value)} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="txtHeight" className="col-form-label">Height:</label>
                                            <input type="text" className="form-control" id="txtHeight" onChange={(event) => setNewHeight(event.target.value)} required />
                                        </div>
                                        <p className="fw-lighter text-danger">* If you change the size of the grid the game will restart</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => props.updateGridSize(newWidth, newHeight)}>Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
