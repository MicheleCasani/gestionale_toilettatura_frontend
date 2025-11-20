import React, { useState } from 'react'
import AppointmentModal from './modal/Appointmentmodal'

const AppointmentRequest = () => {
    const [formData, setFormData] = useState({
        dog: '',
        service: '',
        preferences: '',
        notes: ''
    })
    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        // Raccogli i dati del form
        const dog = e.target.dog.value
        const service = e.target.service.value
        const preferences = e.target.preferences.value
        const notes = e.target.notes.value

        // Salva i dati per la modale
        setFormData({ dog, service, preferences, notes })

        // Qui faresti la chiamata API al backend
        // ...

        // Mostra la modale di conferma
        setShowConfirmModal(true)
    }

    const handleCloseModal = () => {
        setShowConfirmModal(false)
        // Reset del form e chiudi collapse
        document.getElementById('appointmentForm').classList.remove('show')
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">

                        {/* Bottone principale */}
                        <div className="text-center mb-3">
                            <button
                                className="button btn-lg px-5 py-3"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#appointmentForm"
                                aria-expanded="false"
                                aria-controls="appointmentForm"
                            >
                                <i className="fa-solid fa-calendar-plus me-2"></i>
                                RICHIEDI APPUNTAMENTO
                            </button>
                        </div>

                        {/* Form collapsible */}
                        <div className="collapse" id="appointmentForm">
                            <div className="card shadow">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">Richiesta Appuntamento</h5>
                                    <button
                                        className="btn btn-sm btn-outline-secondary"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#appointmentForm"
                                    >
                                        <i className="fa-solid fa-times"></i>
                                    </button>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        {/* Selezione Cane */}
                                        <div className="mb-3">
                                            <label htmlFor="dog" className="form-label">Seleziona il tuo cane</label>
                                            <select className="form-select" id="dog" name="dog" required>
                                                <option value="">Scegli un cane...</option>
                                                <option value="1">Max - Golden Retriever</option>
                                                <option value="2">Luna - Barboncino</option>
                                            </select>
                                        </div>

                                        {/* Tipo Servizio */}
                                        <div className="mb-3">
                                            <label htmlFor="service" className="form-label">Tipo di servizio</label>
                                            <select className="form-select" id="service" name="service" required>
                                                <option value="">Seleziona servizio...</option>
                                                <option value="1">Bagno completo - €25.00</option>
                                                <option value="2">Taglio pelo - €20.00</option>
                                                <option value="3">Tosatura - €22.00</option>
                                                <option value="4">Spazzolatura - €10.00</option>
                                                <option value="5">Trattamento antiparassitario - €12.00</option>
                                                <option value="6">Servizio completo - €60.00</option>
                                            </select>
                                            <div className="form-text">
                                                <small className="text-muted">
                                                    * I prezzi sono indicativi e potrebbero variare in base alle condizioni del cane e al servizio richiesto.
                                                </small>
                                            </div>
                                        </div>

                                        {/* Preferenze orario */}
                                        <div className="mb-3">
                                            <label htmlFor="preferences" className="form-label">Preferenze di orario</label>
                                            <textarea
                                                className="form-control"
                                                id="preferences"
                                                name="preferences"
                                                rows="2"
                                                placeholder="Es: Preferibilmente mattina, weekend, giorni feriali..."
                                            ></textarea>
                                        </div>

                                        {/* Note aggiuntive */}
                                        <div className="mb-3">
                                            <label htmlFor="notes" className="form-label">Note particolari</label>
                                            <textarea
                                                className="form-control"
                                                id="notes"
                                                name="notes"
                                                rows="3"
                                                placeholder="Es: Primo appuntamento, cane nervoso, allergie..."
                                            ></textarea>
                                        </div>

                                        {/* Bottoni */}
                                        <div className="d-flex gap-2">
                                            <button type="submit" className="button flex-grow-1">
                                                Invia Richiesta
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modale di Conferma */}
            <AppointmentModal
                show={showConfirmModal}
                onClose={handleCloseModal}
                formData={formData}
            />
        </>
    )
}

export default AppointmentRequest
