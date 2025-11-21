import { Outlet } from "react-router-dom"
import NavbarEmployee from "../components/employee-componets/NavbarEmployee"


const EmployeeLayout = () => {
    return (
        <>
            <div className="container-fluid">
                <NavbarEmployee />
                <Outlet />
            </div>
        </>
    )
}

export default EmployeeLayout
