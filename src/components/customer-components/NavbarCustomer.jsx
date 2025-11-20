import { Link } from "react-router-dom"

const NavbarCustomer = () => {
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
                                <button to="/customer/login" className="button text-center">
                                    DATI PERSONALI
                                </button>
                                <button to="/customer/register" className="button text-center">
                                    I MIEI CANI
                                </button>
                                <button to="/customer/register" className="button text-center">
                                    PRENOTAZIONI
                                </button>
                                <button to="/customer/register" className="button text-center">
                                    LOGOUT
                                </button>
                            </div>
                        </div>
                    </div>
                </nav >
            </div >
        </>
    )
}

export default NavbarCustomer
