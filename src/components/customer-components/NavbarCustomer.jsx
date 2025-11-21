import { Link } from "react-router-dom"
import { useState } from "react"
import BookingModal from './modal/BookingModal'
import DataCustomer from './modal/DataCustomer'
import DogCustomer from './modal/DogCustomer'

const NavbarCustomer = () => {
    const [showAppointmentsModal, setShowAppointmentsModal] = useState(false)
    const [showDataModal, setShowDataModal] = useState(false)
    const [showDogsModal, setShowDogsModal] = useState(false)

    const handleAppointmentsClick = () => {
        setShowAppointmentsModal(true)
    }

    const handleDataClick = () => {
        setShowDataModal(true)
    }

    const handleDogsClick = () => {
        setShowDogsModal(true)
    }
    return (
        <>
            <div className="row p-0 sticky-top ">
                <nav className="navbar navbar-expand-lg background-color-light navbar-homepage">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src="/logo-semplice-di-un.png" alt="" className="image-homepage" />
                            <span style={{ fontSize: '2rem' }}>COCCOLE CANINE</span>
                        </Link>

                        {/* User button solo per mobile */}
                        <button className=" button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-user text-white"></i>
                        </button>
                        {/* Menu collassabile */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav ms-auto d-flex flex-column flex-lg-row gap-2">
                                <button
                                    className="button text-center"
                                    onClick={handleDataClick}
                                >
                                    DATI PERSONALI
                                </button>
                                <button
                                    className="button text-center"
                                    onClick={handleDogsClick}
                                >
                                    I MIEI CANI
                                </button>
                                <button
                                    className="button text-center"
                                    onClick={handleAppointmentsClick}
                                >
                                    PRENOTAZIONI
                                </button>
                                <button className="button text-center">
                                    LOGOUT
                                </button>
                            </div>
                        </div>
                    </div>
                </nav >
            </div >

            {/* Modali */}
            <BookingModal
                show={showAppointmentsModal}
                onClose={() => setShowAppointmentsModal(false)}
            />
            <DataCustomer
                show={showDataModal}
                onClose={() => setShowDataModal(false)}
            />
            <DogCustomer
                show={showDogsModal}
                onClose={() => setShowDogsModal(false)}
            />
        </>
    )
}

export default NavbarCustomer
