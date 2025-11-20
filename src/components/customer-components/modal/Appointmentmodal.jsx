import React from 'react'

const AppointmentModal = ({ show, onClose, formData }) => {
    const getServiceName = (serviceId) => {
        const services = {
            '1': 'Bagno completo - €25.00',
            '2': 'Taglio pelo - €20.00',
            '3': 'Tosatura - €22.00',
            '4': 'Spazzolatura - €10.00',
            '5': 'Trattamento antiparassitario - €12.00',
            '6': 'Servizio completo - €60.00'
        }
        return services[serviceId] || ''
    }

    const getDogName = (dogId) => {
        const dogs = {
            '1': 'Max - Golden Retriever',
            '2': 'Luna - Barboncino'
        }
        return dogs[dogId] || ''
    }

    if (!show) return null

    return (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-success text-white">
                        <h5 className="modal-title">
                            <i className="fa-solid fa-check-circle me-2"></i>
                            Richiesta Inviata con Successo!
                        </h5>
                    </div>
                    <div className="modal-body">
                        <div className="alert alert-info">
                            <strong>Ti contatteremo entro 24 ore</strong> per confermare l'appuntamento e concordare data e ora specifiche.
                        </div>

                        <h6 className="mb-3">Riepilogo della tua richiesta:</h6>
                        <div className="card bg-light">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-4"><strong>Cane:</strong></div>
                                    <div className="col-8">{getDogName(formData?.dog)}</div>
                                </div>
                                <hr className="my-2" />
                                <div className="row">
                                    <div className="col-4"><strong>Servizio:</strong></div>
                                    <div className="col-8">{getServiceName(formData?.service)}</div>
                                </div>
                                {formData?.preferences && (
                                    <>
                                        <hr className="my-2" />
                                        <div className="row">
                                            <div className="col-4"><strong>Preferenze:</strong></div>
                                            <div className="col-8">{formData.preferences}</div>
                                        </div>
                                    </>
                                )}
                                {formData?.notes && (
                                    <>
                                        <hr className="my-2" />
                                        <div className="row">
                                            <div className="col-4"><strong>Note:</strong></div>
                                            <div className="col-8">{formData.notes}</div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="mt-3">
                            <h6>📞 Per urgenze puoi contattarci:</h6>
                            <p className="mb-1"><strong>Telefono:</strong> 123-456-789</p>
                            <p className="mb-1"><strong>Email:</strong> info@coccolecanine.it</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={onClose}
                        >
                            Perfetto, grazie!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentModal
