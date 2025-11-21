import React from 'react'

const ProfileModal = ({ show, onClose }) => {
    if (!show) return null

    return (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <i className="fa-solid fa-id-card me-2"></i>
                            Profilo Dipendente
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            {/* Info personali */}
                            <div className="col-md-6">
                                <div className="card h-100">
                                    <div className="card-header">
                                        <h6 className="mb-0">Informazioni Personali</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Nome Completo</label>
                                            <div className="form-control-plaintext">Denise Amisano</div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Email</label>
                                            <div className="form-control-plaintext">denise@job.it</div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Telefono</label>
                                            <div className="form-control-plaintext">+39 345 678 9012</div>
                                        </div>
                                        <div className="mb-0">
                                            <label className="form-label fw-bold">Stato</label>
                                            <div>
                                                <span className="badge bg-success fs-6">Disponibile</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileModal
