import { Route, Routes, BrowserRouter } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Homepage from "./pages/Homepage.jsx";
import CustomerDashboard from "./pages/customer/CustomerDashboard.jsx";
import CustomerLayout from "./layout/CustomerLayout"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            {/* homepage pubblica per utenti non verificati */}
            <Route path="/" element={<Homepage />} />

            {/* Layout clienti autenticati */}
            <Route path="/customer" element={<CustomerLayout />}>
              <Route path="dashboard" element={<CustomerDashboard />} />
            </Route>

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
