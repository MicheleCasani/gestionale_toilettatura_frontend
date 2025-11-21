import React from 'react'

const DataCustomer = ({ show, onClose }) => {
    if (!show) return null

    return (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            <i className="fa-solid fa-user me-2"></i>
                            I Miei Dati Personali
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="firstName" className="form-label">Nome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        value="Francesco Rossi"
                                        readOnly
                                    />
                                </div>

                                <div className="col-md-4 mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value="francesco.rossi@email.com"
                                        readOnly
                                    />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="phone" className="form-label">Telefono</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        value="+39 123 456 789"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                        >
                            Salva Modifiche
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataCustomer
