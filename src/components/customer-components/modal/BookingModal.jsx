import React from 'react'

const BookingModal = ({ show, onClose }) => {
    if (!show) return null

    return (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <i className="fa-solid fa-calendar me-2"></i>
                            Le Mie Prenotazioni
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        {/* Tab Navigation */}
                        <ul className="nav nav-tabs mb-3" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#pending">
                                    In Attesa
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#confirmed">
                                    Confermati
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#history">
                                    Storico
                                </button>
                            </li>
                        </ul>

                        {/* Tab Content */}
                        <div className="tab-content">
                            {/* Richieste in attesa */}
                            <div className="tab-pane fade show active" id="pending">
                                <div className="alert alert-info">
                                    <strong>1 richiesta in attesa di conferma</strong>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <h6 className="mb-1">Max - Golden Retriever</h6>
                                                <p className="mb-1"><strong>Servizio:</strong> Bagno completo - €25.00</p>
                                                <p className="mb-1"><strong>Richiesta il:</strong> 18 Nov 2025</p>
                                                <p className="mb-0"><strong>Preferenze:</strong> Preferibilmente mattina</p>
                                            </div>
                                            <span className="badge bg-warning text-dark">In attesa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Appuntamenti confermati */}
                            <div className="tab-pane fade" id="confirmed">
                                <div className="alert alert-success">
                                    <strong>1 appuntamento confermato</strong>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <h6 className="mb-1">Luna - Barboncino</h6>
                                                <p className="mb-1"><strong>Servizio:</strong> Servizio completo - €60.00</p>
                                                <p className="mb-1"><strong>Data:</strong> 25 Nov 2025 alle 10:00</p>
                                                <p className="mb-0"><strong>Note:</strong> Primo appuntamento</p>
                                            </div>
                                            <span className="badge bg-success">Confermato</span>
                                        </div>
                                        <hr />
                                        <div className="d-flex gap-2">
                                            <button className="btn btn-sm btn-outline-danger">Cancella</button>
                                            <button className="btn btn-sm btn-outline-primary">Modifica</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Storico */}
                            <div className="tab-pane fade" id="history">
                                <div className="alert alert-secondary">
                                    <strong>2 appuntamenti completati</strong>
                                </div>
                                <div className="card mb-2">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <h6 className="mb-1">Max - Golden Retriever</h6>
                                                <p className="mb-1"><strong>Servizio:</strong> Taglio pelo - €20.00</p>
                                                <p className="mb-0"><strong>Data:</strong> 15 Nov 2025</p>
                                            </div>
                                            <span className="badge bg-secondary">Completato</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <div>
                                                <h6 className="mb-1">Luna - Barboncino</h6>
                                                <p className="mb-1"><strong>Servizio:</strong> Spazzolatura - €10.00</p>
                                                <p className="mb-0"><strong>Data:</strong> 10 Nov 2025</p>
                                            </div>
                                            <span className="badge bg-secondary">Completato</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Chiudi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingModal
