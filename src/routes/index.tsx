import {createBrowserRouter} from 'react-router-dom'

import HomePage from "../pages/HomePage/HomePage";
import ManageEmployee from '../pages/ManageEmployee/ManageEmployee';
import Medical from '../pages/Plans/Medical/Medical';
import Dental from '../pages/Plans/Dental/Dental';
import Vision from '../pages/Plans/Vision/Vision';
import ManageStaff from '../pages/ManageStaff/ManageStaff';
import Notifications from '../pages/Notifications/Notifications';
import DownloadDocuments from '../pages/DownloadDocuments/DownloadDocuments';
import OtherMenu from '../pages/OtherMenu/OtherMenu';
import AddEmployee from '../pages/AddEmployee/AddEmployee';
import ContactAdmin from '../pages/ContactAdmin/ContactAdmin';
import MyProfile from '../pages/MyProfile/MyProfile';
import SingleEmployee from '../pages/SingleEmployee/SingleEmployee';
import MultipleEmployees from '../pages/MultipleEmployees/MultipleEmployees';
import AddEditStaff from '../pages/AddEditStaff/AddEditStaff';
import ViewStaff from '../pages/ViewStaff/ViewStaff';
import EmployeeDetails from '../pages/EmployeeDetails/EmployeeDetails';
import AddEmployeeDetails from '../pages/AddEmployeeDetails/AddEmployeeDetails';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <HomePage />,
	},{
	  path: "/employee",
	  element: <ManageEmployee />,
	},{
	  path: "/medical",
	  element: <Medical />,
	},{
	  path: "/dental",
	  element: <Dental />,
	},{
	  path: "/vision",
	  element: <Vision />,
	},{
	  path: "/manage-staff",
	  element: <ManageStaff />,
	},{
	  path: "/notifications",
	  element: <Notifications />,
	},{
	  path: "/download-docs",
	  element: <DownloadDocuments />,
	},{
	  path: "/othermenu",
	  element: <OtherMenu />,
	},{
	  path: "/add-employee",
	  element: <AddEmployee />,
	},{
	  path: "/contact-admin",
	  element: <ContactAdmin />,
	},{
	  path: "/profile",
	  element: <MyProfile />,
	},{
	  path: "/single-employee",
	  element: <SingleEmployee />,
	},{
	  path: "/multiple-employee",
	  element: <MultipleEmployees />,
	},{
	  path: "/add-staff",
	  element: <AddEditStaff />,
	},{
	  path: "/view-staff",
	  element: <ViewStaff />,
	},{
	  path: "/employee-details",
	  element: <EmployeeDetails />,
	},{
	  path: "/add-employee-details",
	  element: <AddEmployeeDetails />,
	},
  ]);


  export default router