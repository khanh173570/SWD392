import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomerApp from "./layouts/layoutCustomer/CustomerApp";
// import HomePage from "./pages/pagesCustomer/homePage/pagesCustomer";
import HomePage from "./pages/pagesCustomer/homePage/HomePage";
import Login from "./pages/pagesCustomer/loginPage/Login";
function App() {
  // const  App = () =>  {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CustomerApp />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
