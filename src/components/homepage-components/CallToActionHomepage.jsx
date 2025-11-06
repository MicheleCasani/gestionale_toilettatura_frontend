import { Link } from "react-router-dom"

const CallToActionHomepage = () => {
    return (
        <>
            <div className="col-12">
                <div className="background-color-dark text-white text-center py-5 rounded mb-2">
                    <div className="container">
                        <h2 className="mb-3">Pronto a coccolare il tuo amico peloso?</h2>
                        <p className="lead mb-4">Registrati ora e prenota il primo appuntamento per il tuo cane</p>

                        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                            <Link to="/customer/register" className="btn btn-light btn-lg px-4">
                                📝 Registrati Gratis
                            </Link>
                            <Link to="/customer/login" className="btn btn-outline-light btn-lg px-4">
                                🔐 Accedi
                            </Link>
                        </div>

                        <div className="mt-4">
                            <small className="text-light">
                                📞 Hai domande? Chiamaci al <strong>123-456-7890</strong>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallToActionHomepage
