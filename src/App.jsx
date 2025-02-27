import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomerApp from "./layouts/layoutCustomer/CustomerApp";
// import HomePage from "./pages/pagesCustomer/homePage/pagesCustomer";
import HomePage from "./pages/pagesCustomer/homePage/HomePage";
import Login from "./pages/pagesCustomer/loginPage/Login";
import DetailPage from "./pages/pagesCustomer/homePage/DetailPage.jsx";
import SubItemDetail from "./pages/pagesCustomer/homePage/SubItemDetail.jsx";
function App() {
  // const  App = () =>  {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CustomerApp />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/details/:id" element={<SubItemDetail />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
