import NavbarCustomer from "../components/customer-components/NavbarCustomer"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const CustomerLayout = () => {
    return (
        <>
            <NavbarCustomer />
            <Outlet />
            <Footer />
        </>
    )
}

export default CustomerLayout
