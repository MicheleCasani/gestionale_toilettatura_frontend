import React from 'react'
import { Link } from "react-router-dom"
import { useState } from "react"
import ProfileModal from './modal/ProfileModal'
import CalendarModal from './modal/CalendarModal'
import RequestsModal from './modal/RequestsModal'

const NavbarEmployee = () => {
    const [showProfileModal, setShowProfileModal] = useState(false)
    const [showCalendarModal, setShowCalendarModal] = useState(false)
    const [showRequestsModal, setShowRequestsModal] = useState(false)

    const handleProfileClick = () => {
        setShowProfileModal(true)
    }

    const handleCalendarClick = () => {
        setShowCalendarModal(true)
    }

    const handleRequestsClick = () => {
        setShowRequestsModal(true)
    }
    return (
        <>
            <div className="row p-0 sticky-top ">
                <nav className="navbar navbar-expand-lg background-color-light navbar-homepage">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src="/logo-semplice-di-un.png" alt="" className="image-homepage" />
                            <span style={{ fontSize: '1rem' }}>COCCOLE CANINE</span>
                        </Link>

                        {/* Hamburger button per mobile */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* Menu collassabile */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav ms-auto d-flex flex-column flex-lg-row gap-2">
                                <button
                                    className="button text-center"
                                    onClick={handleProfileClick}
                                >
                                    PROFILO
                                </button>
                                <button
                                    className="button text-center"
                                    onClick={handleCalendarClick}
                                >
                                    CALENDARIO
                                </button>
                                <button
                                    className="button text-center"
                                    onClick={handleRequestsClick}
                                >
                                    RICHIESTE
                                </button>
                                <button
                                    className="button text-center"
                                    onClick={''}
                                >
                                    CLIENTI
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
            <ProfileModal
                show={showProfileModal}
                onClose={() => setShowProfileModal(false)}
            />
            <CalendarModal
                show={showCalendarModal}
                onClose={() => setShowCalendarModal(false)}
            />
            <RequestsModal
                show={showRequestsModal}
                onHide={() => setShowRequestsModal(false)}
            />
        </>
    )
}

export default NavbarEmployee
