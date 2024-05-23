import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Sidebar from "./Component/Sidebar/Sidebar";
import "./assets/css/main.scss";
import ManageEmployee from "./pages/ManageEmployee/ManageEmployee";
import MobileSidebar from "./Component/MobileSidebar/MobileSidebar";
import ManageStaff from "./pages/ManageStaff/ManageStaff";
import Medical from "./pages/Plans/Medical/Medical";
import Dental from "./pages/Plans/Dental/Dental";
import Vision from "./pages/Plans/Vision/Vision";
import Notifications from "./pages/Notifications/Notifications";
import DownloadDocuments from "./pages/DownloadDocuments/DownloadDocuments";
import OtherMenu from "./pages/OtherMenu/OtherMenu";
import AddEmployee from "./pages/AddEmployee/AddEmployee";
import ContactAdmin from "./pages/ContactAdmin/ContactAdmin";
import MyProfile from "./pages/MyProfile/MyProfile";
import SingleEmployee from "./pages/SingleEmployee/SingleEmployee";
import MultipleEmployees from "./pages/MultipleEmployees/MultipleEmployees";
import AddEditStaff from "./pages/AddEditStaff/AddEditStaff";
import ViewStaff from "./pages/ViewStaff/ViewStaff";
import EmployeeDetails from "./pages/EmployeeDetails/EmployeeDetails";
import AddEmployeeDetails from "./pages/AddEmployeeDetails/AddEmployeeDetails";
import ScrollToTop from "./Component/ScrollToTop";

const App = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <main className="main-section" style={{ display: "flex" }}>
                <div className="container">
                    <Sidebar />
                    <MobileSidebar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/homepage" element={<HomePage />} />
                        <Route path="/employee" element={<ManageEmployee />} />
                        <Route path="/medical" element={<Medical />} />
                        <Route path="/dental" element={<Dental />} />
                        <Route path="/vision" element={<Vision />} />
                        <Route path="/manage-staff" element={<ManageStaff />} />
                        <Route
                            path="/notifications"
                            element={<Notifications />}
                        />
                        <Route
                            path="/download-docs"
                            element={<DownloadDocuments />}
                        />
                        <Route path="/othermenu" element={<OtherMenu />} />
                        <Route path="/add-employee" element={<AddEmployee />} />
                        <Route
                            path="/contact-admin"
                            element={<ContactAdmin />}
                        />
                        <Route path="/profile" element={<MyProfile />} />
                        <Route
                            path="/single-employee"
                            element={<SingleEmployee />}
                        />
                        <Route
                            path="/multiple-employee"
                            element={<MultipleEmployees />}
                        />
                        <Route path="/add-staff" element={<AddEditStaff />} />
                        <Route path="/view-staff" element={<ViewStaff />} />
                        <Route
                            path="/employee-details"
                            element={<EmployeeDetails />}
                        />
                        <Route
                            path="/add-employee-details"
                            element={<AddEmployeeDetails />}
                        />
                    </Routes>
                </div>
            </main>
        </>
    );
};

export default App;
