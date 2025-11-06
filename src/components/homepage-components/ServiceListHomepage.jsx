import React from 'react'

const ServiceListHomepage = () => {
    return (
        <>
            <div className="col-12">
                <h2 className="text-center">I nostri Servizi</h2>
                <div className="text-center mb-4"><small className="text-muted">I prezzi indicati sono a tariffa oraria</small></div>
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
        </>
    )
}

export default ServiceListHomepage
