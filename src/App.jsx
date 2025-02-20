import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomerApp from "./layouts/layoutCustomer/CustomerApp";
// import HomePage from "./pages/pagesCustomer/homePage/pagesCustomer";
import HomePage from "./pages/pagesCustomer/homePage/HomePage";
function App() {
  // const  App = () =>  {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CustomerApp />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
