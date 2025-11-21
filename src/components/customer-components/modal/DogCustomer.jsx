import React from 'react'

const DogCustomer = ({ show, onClose }) => {
    if (!show) return null

    return (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <i className="fa-solid fa-dog me-2"></i>
                            I Miei Cani
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        {/* Lista cani registrati */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6>Cani Registrati</h6>
                            <button className="btn btn-primary btn-sm">
                                <i className="fa-solid fa-plus me-1"></i>
                                Aggiungi Cane
                            </button>
                        </div>

                        {/* Card cani */}
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <h6 className="card-title mb-1" aria-label='nome'>Max</h6>
                                                <p className="card-text mb-1">
                                                    <strong>Razza:</strong> Golden Retriever<br />
                                                    <strong>Età:</strong> 3 anni<br />
                                                    <strong>Taglia:</strong>grande<br />
                                                    <strong>Sesso:</strong> Maschio
                                                </p>
                                                <span className="badge bg-success">Attivo</span>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn btn-outline-secondary btn-sm dropdown-toggle"
                                                    data-bs-toggle="dropdown">
                                                    <i className="fa-solid fa-ellipsis-v"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Modifica</a></li>
                                                    <li><a className="dropdown-item text-danger" href="#">Elimina</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <small className="text-muted">
                                                <strong>Note:</strong> Molto docile, ama l'acqua
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <h6 className="card-title mb-1">Luna</h6>
                                                <p className="card-text mb-1">
                                                    <strong>Razza:</strong> Barboncino<br />
                                                    <strong>Età:</strong> 1 anno<br />
                                                    <strong>Taglia:</strong> piccola<br />
                                                    <strong>Sesso:</strong> Femmina
                                                </p>
                                                <span className="badge bg-success">Attivo</span>
                                            </div>
                                            <div className="dropdown">
                                                <button className="btn btn-outline-secondary btn-sm dropdown-toggle"
                                                    data-bs-toggle="dropdown">
                                                    <i className="fa-solid fa-ellipsis-v"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item" href="#">Modifica</a></li>
                                                    <li><a className="dropdown-item text-danger" href="#">Elimina</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <small className="text-muted">
                                                <strong>Note:</strong> Prima volta, un po' nervosa
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DogCustomer
