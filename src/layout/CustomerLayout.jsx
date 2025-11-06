import NavbarCustomer from "../components/customer-components/NavbarCustomer"
import { Outlet } from "react-router-dom"

const CustomerLayout = () => {
    return (
        <>
            <NavbarCustomer />
            <Outlet />
        </>
    )
}

export default CustomerLayout
