import { Outlet } from "react-router-dom"
import Footer from "../components/Footer.jsx";


const DefaultLayout = () => {
    return (
        <main className="container-fluid">
            <Outlet />
            <Footer />  {/* Footer sempre presente */}
        </main>
    )
}

export default DefaultLayout
