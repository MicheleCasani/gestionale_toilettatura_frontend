import { Outlet } from "react-router-dom"
import Footer from "../components/Footer.jsx";


const DefaultLayout = () => {
    return (
        <div className="container-fluid">
            <Outlet />
            <Footer />  {/* Footer sempre presente */}
        </div>
    )
}

export default DefaultLayout
