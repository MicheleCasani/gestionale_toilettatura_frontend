import { Link } from "react-router-dom"

const Homepage = () => {
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

            <div className="row">
                {/* 1. HERO SECTION */}
                <div className="col-12">
                    <div className="hero-section text-center py-5">
                        <h1>Il tuo cane merita il meglio!</h1>
                        <p>Servizi di toilettatura professionale</p>
                    </div>
                </div>
            </div>

            <div className="row">
                {/* 2. SERVIZI OFFERTI */}
                <div className="col-12">
                    <h2 className="text-center mb-4">I nostri Servizi</h2>
                </div>

                <div className="col-6 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 text-center">
                        <div className="card-body">
                            <div style={{ fontSize: '2rem' }}>🛁</div>
                            <h5 className="card-title">Bagno completo</h5>
                            <p className="card-text">Bagno con prodotti specifici per la cura del pelo e della pelle</p>
                            <span className="h5 text-primary">€25</span>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 text-center">
                        <div className="card-body">
                            <div style={{ fontSize: '2rem' }}>✂️</div>
                            <h5 className="card-title">Taglio pelo</h5>
                            <p className="card-text">Taglio e rifinitura del pelo secondo lo standard della razza</p>
                            <span className="h5 text-primary">€20</span>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 text-center">
                        <div className="card-body">
                            <div style={{ fontSize: '2rem' }}>🪒</div>
                            <h5 className="card-title">Tosatura</h5>
                            <p className="card-text">Tosatura completa o parziale del pelo</p>
                            <span className="h5 text-primary">€22</span>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 text-center">
                        <div className="card-body">
                            <div style={{ fontSize: '2rem' }}>🪮</div>
                            <h5 className="card-title">Spazzolatura</h5>
                            <p className="card-text">Spazzolatura approfondita per rimuovere nodi e pelo morto</p>
                            <span className="h5 text-primary">€10</span>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 text-center">
                        <div className="card-body">
                            <div style={{ fontSize: '2rem' }}>🦠</div>
                            <h5 className="card-title">Trattamento antiparassitario</h5>
                            <p className="card-text">Applicazione di prodotti specifici contro pulci e zecche</p>
                            <span className="h5 text-primary">€12</span>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 text-center border-primary">
                        <div className="card-body">
                            <div style={{ fontSize: '2rem' }}>⭐</div>
                            <h5 className="card-title text-primary">Servizio completo</h5>
                            <p className="card-text">Bagno, taglio pelo, tosatura, spazzolatura e trattamento antiparassitario inclusi</p>
                            <span className="h5 text-primary">€60</span>
                            <div><small className="text-muted">Il più conveniente!</small></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                {/* 3. PERCHÉ SCEGLIERCI */}
                <div className="col-12">
                    <h2 className="text-center mb-5">Perché scegliere noi?</h2>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="text-center">
                        <div className="mb-3" style={{ fontSize: '3rem' }}>👨‍⚕️</div>
                        <h5>Personale Qualificato</h5>
                        <p>I nostri toelettatori sono certificati e in continua formazione per garantire il miglior servizio</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="text-center">
                        <div className="mb-3" style={{ fontSize: '3rem' }}>🌿</div>
                        <h5>Prodotti di Qualità</h5>
                        <p>Utilizziamo solo prodotti naturali e delicati, adatti a ogni tipo di pelo e pelle</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="text-center">
                        <div className="mb-3" style={{ fontSize: '3rem' }}>🏥</div>
                        <h5>Ambiente Sicuro</h5>
                        <p>Struttura pulita e igienizzata, con protocolli di sicurezza per il benessere dei nostri ospiti</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="text-center">
                        <div className="mb-3" style={{ fontSize: '3rem' }}>❤️</div>
                        <h5>Cura e Passione</h5>
                        <p>Ogni cane viene trattato con amore e attenzione, come se fosse il nostro</p>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                {/* 4. CALL TO ACTION */}
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
            </div>
        </>
    )
}

export default Homepage
