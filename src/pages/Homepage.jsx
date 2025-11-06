import NavbarHomepage from "../components/homepage-components/NavbarHomepage.jsx";
import ServiceListHomepage from "../components/homepage-components/ServiceListHomepage.jsx";
import WhyUs from "../components/homepage-components/WhyUs.jsx";
import CallToActionHomepage from "../components/homepage-components/CallToActionHomepage.jsx";

const Homepage = () => {
    return (
        <>
            {/* NAVBAR */}
            <NavbarHomepage />

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
                <ServiceListHomepage />
            </div>

            <div className="row mt-5">
                {/* 3. PERCHÉ SCEGLIERCI */}
                <WhyUs />
            </div>

            <div className="row mt-5">
                {/* 4. CALL TO ACTION */}
                <CallToActionHomepage />
            </div>
        </>
    )
}

export default Homepage
