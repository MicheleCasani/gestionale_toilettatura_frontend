import { Link } from "react-router-dom"

const NavbarHomepage = () => {
    return (
        <>
            <div className="row p-0 sticky-top ">
                <nav className="navbar navbar-expand-lg background-color-light navbar-homepage">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src="/logo-semplice-di-un.png" alt="" className="image-homepage" />
                            <span style={{ fontSize: '2rem' }}>COCCOLE CANINE</span>
                        </Link>

                        {/* Hamburger button per mobile */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Menu collassabile */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav ms-auto d-flex flex-column flex-lg-row gap-2">
                                <Link to="/customer/login" className="button mb-2 mb-lg-0 text-center">
                                    Accedi
                                </Link>
                                <Link to="/customer/register" className="button text-center">
                                    Registrati
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav >
            </div >
        </>
    )
}

export default NavbarHomepage
