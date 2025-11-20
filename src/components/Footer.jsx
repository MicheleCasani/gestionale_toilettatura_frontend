import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='py-5'>
                <div className='row d-flex justify-content-between' style={{ fontSize: '20px' }}>
                    <div className='col-4 col-md-4 text-center'>
                        <h5>CONTATTI</h5>
                        <div>Telefono: +39 123 456 7890</div>
                        <div>Email: info@example.com</div>
                    </div>
                    <div className='col-4 col-md-4 text-center'>
                        <h5>ORARI DI APERTURA</h5>
                        <div>MERCOLEDI - SABATO: 9:00 - 19:30</div>
                    </div>
                    <div className='col-4 col-md-4 text-center'>
                        <div className='col-12 text-center'>
                            <h5>I NOSTRI SOCIAL</h5>
                            <div>
                                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-decoration-none text-dark' >Facebook</a>
                            </div>
                            <div>
                                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='text-decoration-none text-dark' >Instagram</a>
                            </div>
                            <div>
                                <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='text-decoration-none text-dark'>X</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <small className='text-muted'>© 2025 Tutti i diritti riservati. Coccole Canine.</small>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
