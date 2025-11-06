import { Link } from "react-router-dom"

const Homepage = () => {
    return (
        <>
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
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card">Toelettatura completa</div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4">
                    <div className="card">Bagno e asciugatura</div>
                </div>
  // Altri servizi...
            </div>
        </>
    )
}

export default Homepage
