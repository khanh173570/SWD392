import { Outlet } from "react-router-dom";
import Header from "../../components/componentsAdmin/componentsHeader/componentsHeader";
import Footer from "../../components/componentsAdmin/componentsFooter/componentsFooter";
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
