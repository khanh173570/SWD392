import { Outlet } from "react-router-dom";
import Header from "../../components/componentCustomer/componentsHeader/componentsHeader.jsx";
import Footer from "../../components/componentCustomer/componentsFooter/componentsFooter.jsx";

function CustomerApp() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default CustomerApp;
