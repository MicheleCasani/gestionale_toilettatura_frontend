import React, { useState } from 'react'

const RequestsModal = ({ show, onHide }) => {
    const [selectedRequest, setSelectedRequest] = useState(null)
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [actionType, setActionType] = useState(null) // 'accept' or 'decline'
    const [editData, setEditData] = useState({})

    // Mock data delle richieste pendenti
    const [requests, setRequests] = useState([
        {
            id: 1,
            date: '2024-12-02',
            time: '09:30',
            status: 'pending',
            client: {
                name: 'Mario Rossi',
                phone: '347-123-4567',
                email: 'mario.rossi@email.com'
            },
            dog: {
                name: 'Buddy',
                breed: 'Golden Retriever',
                size: 'Grande',
                weight: '30kg'
            },
            service: {
                name: 'Taglio e Lavaggio Completo',
                duration: '2 ore',
                price: '€45'
            },
            notes: 'Il cane è molto docile, preferisce acqua tiepida',
            submittedAt: '2024-11-25 14:30'
        },
        {
            id: 2,
            date: '2024-12-03',
            time: '14:00',
            status: 'pending',
            client: {
                name: 'Laura Bianchi',
                phone: '339-987-6543',
                email: 'laura.bianchi@email.com'
            },
            dog: {
                name: 'Luna',
                breed: 'Barboncino',
                size: 'Medio',
                weight: '15kg'
            },
            service: {
                name: 'Tosatura Estiva',
                duration: '1.5 ore',
                price: '€35'
            },
            notes: 'Prima tosatura, il cane potrebbe essere nervoso',
            submittedAt: '2024-11-26 10:15'
        },
        {
            id: 3,
            date: '2024-12-04',
            time: '16:30',
            status: 'pending',
            client: {
                name: 'Giuseppe Verdi',
                phone: '328-555-9999',
                email: 'giuseppe.verdi@email.com'
            },
            dog: {
                name: 'Rex',
                breed: 'Pastore Tedesco',
                size: 'Grande',
                weight: '35kg'
            },
            service: {
                name: 'Lavaggio e Spazzolatura',
                duration: '1 ora',
                price: '€25'
            },
            notes: 'Solo spazzolatura, no taglio unghie',
            submittedAt: '2024-11-27 09:00'
        }
    ])

    const handleAction = (request, action) => {
        setSelectedRequest(request)
        setActionType(action)
        setEditData({
            date: request.date,
            time: request.time,
            service: request.service.name,
            notes: request.notes
        })
        setShowConfirmModal(true)
    }

    const confirmAction = () => {
        if (actionType === 'accept') {
            // Simula l'inserimento nel calendario
            console.log('Appuntamento accettato e inserito nel calendario:', {
                ...selectedRequest,
                ...editData
            })
        } else {
            console.log('Richiesta rifiutata:', selectedRequest.id)
        }

        // Rimuovi la richiesta dalla lista
        setRequests(prev => prev.filter(req => req.id !== selectedRequest.id))
        setShowConfirmModal(false)
        setSelectedRequest(null)
    }

    const getStatusBadge = (status) => {
        const badges = {
            pending: 'bg-warning text-dark',
            accepted: 'bg-success',
            declined: 'bg-danger'
        }
        return badges[status] || 'bg-secondary'
    }

    return (
        <>
            {/* Main Requests Modal */}
            <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">
                                <i className="fas fa-clipboard-list me-2"></i>
                                Gestione Richieste Appuntamenti
                            </h5>
                            <button type="button" className="btn-close btn-close-white" onClick={onHide}></button>
                        </div>
                        <div className="modal-body p-0">
                            {requests.length === 0 ? (
                                <div className="text-center py-5">
                                    <i className="fas fa-inbox fa-3x text-muted mb-3"></i>
                                    <h5 className="text-muted">Nessuna richiesta pendente</h5>
                                    <p className="text-muted">Tutte le richieste sono state processate</p>
                                </div>
                            ) : (
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead className="bg-light">
                                            <tr>
                                                <th>Cliente</th>
                                                <th>Cane</th>
                                                <th>Servizio</th>
                                                <th>Data/Ora</th>
                                                <th>Note</th>
                                                <th>Stato</th>
                                                <th>Azioni</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {requests.map(request => (
                                                <tr key={request.id}>
                                                    <td>
                                                        <div>
                                                            <strong>{request.client.name}</strong>
                                                            <br />
                                                            <small className="text-muted">
                                                                <i className="fas fa-phone me-1"></i>
                                                                {request.client.phone}
                                                            </small>
                                                            <br />
                                                            <small className="text-muted">
                                                                <i className="fas fa-envelope me-1"></i>
                                                                {request.client.email}
                                                            </small>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <strong>{request.dog.name}</strong>
                                                            <br />
                                                            <small className="text-muted">{request.dog.breed}</small>
                                                            <br />
                                                            <small className="text-muted">
                                                                Taglia: {request.dog.size} ({request.dog.weight})
                                                            </small>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <strong>{request.service.name}</strong>
                                                            <br />
                                                            <small className="text-muted">
                                                                <i className="fas fa-clock me-1"></i>
                                                                {request.service.duration}
                                                            </small>
                                                            <br />
                                                            <small className="text-success fw-bold">
                                                                {request.service.price}
                                                            </small>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <strong>{request.date}</strong>
                                                            <br />
                                                            <small className="text-muted">{request.time}</small>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div style={{ maxWidth: '200px' }}>
                                                            {request.notes ? (
                                                                <small className="text-muted">{request.notes}</small>
                                                            ) : (
                                                                <small className="text-muted fst-italic">Nessuna nota</small>
                                                            )}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className={`badge ${getStatusBadge(request.status)}`}>
                                                            Pendente
                                                        </span>
                                                        <br />
                                                        <small className="text-muted">
                                                            {request.submittedAt}
                                                        </small>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group-vertical gap-1" style={{ width: '100px' }}>
                                                            <button
                                                                className="btn btn-success btn-sm"
                                                                onClick={() => handleAction(request, 'accept')}
                                                            >
                                                                <i className="fas fa-check me-1"></i>
                                                                Accetta
                                                            </button>
                                                            <button
                                                                className="btn btn-danger btn-sm"
                                                                onClick={() => handleAction(request, 'decline')}
                                                            >
                                                                <i className="fas fa-times me-1"></i>
                                                                Rifiuta
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                        <div className="modal-footer bg-light">
                            <div className="me-auto">
                                <small className="text-muted">
                                    <i className="fas fa-info-circle me-1"></i>
                                    {requests.length} richieste pendenti
                                </small>
                            </div>
                            <button type="button" className="btn btn-secondary" onClick={onHide}>
                                Chiudi
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirmModal && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className={`modal-header ${actionType === 'accept' ? 'bg-success' : 'bg-danger'} text-white`}>
                                <h5 className="modal-title">
                                    {actionType === 'accept' ? (
                                        <>
                                            <i className="fas fa-check-circle me-2"></i>
                                            Conferma Accettazione
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-times-circle me-2"></i>
                                            Conferma Rifiuto
                                        </>
                                    )}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    onClick={() => setShowConfirmModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                {actionType === 'accept' ? (
                                    <>
                                        <h6 className="mb-3">Accetta la richiesta di {selectedRequest?.client.name}?</h6>
                                        <div className="mb-3">
                                            <small className="text-muted">Puoi modificare i dettagli prima di confermare:</small>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Data</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={editData.date}
                                                    onChange={(e) => setEditData(prev => ({ ...prev, date: e.target.value }))}
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Orario</label>
                                                <input
                                                    type="time"
                                                    className="form-control"
                                                    value={editData.time}
                                                    onChange={(e) => setEditData(prev => ({ ...prev, time: e.target.value }))}
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Servizio</label>
                                            <select
                                                className="form-select"
                                                value={editData.service}
                                                onChange={(e) => setEditData(prev => ({ ...prev, service: e.target.value }))}
                                            >
                                                <option>Taglio e Lavaggio Completo</option>
                                                <option>Tosatura Estiva</option>
                                                <option>Lavaggio e Spazzolatura</option>
                                                <option>Solo Taglio Unghie</option>
                                                <option>Trattamento Antipulci</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Note aggiuntive</label>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                value={editData.notes}
                                                onChange={(e) => setEditData(prev => ({ ...prev, notes: e.target.value }))}
                                                placeholder="Aggiungi note per l'appuntamento..."
                                            ></textarea>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h6 className="mb-3">Rifiuta la richiesta di {selectedRequest?.client.name}?</h6>
                                        <p className="text-muted">
                                            La richiesta verrà rimossa dalla lista e il cliente verrà notificato del rifiuto.
                                        </p>
                                        <div className="alert alert-warning">
                                            <i className="fas fa-exclamation-triangle me-2"></i>
                                            <strong>Attenzione:</strong> Questa azione non può essere annullata.
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowConfirmModal(false)}
                                >
                                    Annulla
                                </button>
                                <button
                                    type="button"
                                    className={`btn ${actionType === 'accept' ? 'btn-success' : 'btn-danger'}`}
                                    onClick={confirmAction}
                                >
                                    {actionType === 'accept' ? (
                                        <>
                                            <i className="fas fa-calendar-plus me-2"></i>
                                            Aggiungi al Calendario
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-trash me-2"></i>
                                            Rifiuta Richiesta
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Backdrop */}
            {(show || showConfirmModal) && (
                <div
                    className="modal-backdrop fade show"
                    onClick={() => {
                        if (showConfirmModal) {
                            setShowConfirmModal(false)
                        } else {
                            onHide()
                        }
                    }}
                ></div>
            )}
        </>
    )
}

export default RequestsModal
