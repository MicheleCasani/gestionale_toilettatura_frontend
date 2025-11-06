import NavbarCustomer from "../components/layout/NavbarCustomer"
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
