
// import "./App.css";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// import First from "./First";
//  import Login from "./Login.jsx";
// import ProtectedRoute from "./ProtectedRoute";
// import Dashboard from "./Dashboard";
// import Register from "./Register";

// import ContactComponent from './ContactComponent';
// import AssestComponent from "./AssetsComponent";
// import Resoursec from './Resoursec';
// import Archive from './Archive';
// import Setting from './Setting';
// import Support from './Support';
// import Technicians from './Technicians';
// import Jobcard from './Jobcard';
// import Clients from './Clients';
// import Users from './Users';
// import SupportTicket from './SupportTicket';

// import DashboardWorking from "./DashboardWorking";
// import DashboardOpen from "./OpenFileDashboard";
// import ToInvoice from "./ToInvoice";
// import DashboardOnsiteTechnincFirst from "./OnSitePagefirst";
// import DashboardonsitePageSecond from "./OnsitePageSecond";
// import JobCardNext from "./JobCardsNextComponent";
// import SiteOverview from "./Ster";
// import StrelingInfotech from "./StrelingInfotech";
// import Clientstest from "./ClientTest";
// import JobClientAdd from "./JobClientAdd";
// import Google from "./Google";
// import AssetDetails1 from "./AssetDetails1";
// import AssetsCPUComponent from "./AssetsCPUComponent";
// import SupportTicketNext from "./SupportsTicketsnext";


// const router = createBrowserRouter([


//     {
//     path: "/",
//     element: <Login/>
//   },
//   {
//     path: "/register",
//     element: <Register />
//   },


//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedRoute>
//         <First />
//       </ProtectedRoute>
//     ),
//     children: [
//       { index: true, element: <Dashboard /> },
//       { path: "contact", element: <ContactComponent /> },
//       { path: "assets", element: <AssestComponent /> },
//       { path: "resoursec", element: <Resoursec /> },
//       { path: "setting", element: <Setting /> },
//       { path: "support", element: <Support /> },
//       { path: "archive", element: <Archive /> },
//       { path: "jobcard", element: <Jobcard /> },
//       { path: "technicians", element: <Technicians /> },
//       { path: "toinvoice", element: <ToInvoice /> },
//       { path: "clients", element: <Clients /> },
//       { path: "users", element: <Users /> },
//       { path: "supportticket", element: <SupportTicket /> },
//       { path: "dashboardworking", element: <DashboardWorking /> },
//       { path: "dashboardopen", element: <DashboardOpen /> },
//       { path: "dashboardonsitetechnincsecond", element: <DashboardOnsiteTechnincFirst /> },
//       { path: "dashboardonsitepagefirst", element: <DashboardonsitePageSecond /> },
//       { path: "jobcardnext", element: <JobCardNext /> },
//       { path: "siteoverview", element: <SiteOverview /> },
//       { path: "strelinginfotech", element: <StrelingInfotech /> },
//       { path: "clientstest", element: <Clientstest /> },
//       { path: "jobclientadd", element: <JobClientAdd /> },
//       { path: "google", element: <Google /> },
//       { path: "assetdetails1", element: <AssetDetails1 /> },
//       { path: "assetscpucomponent", element: <AssetsCPUComponent /> },
//       { path: "supportticketnext", element: <SupportTicketNext /> }
//     ]
//   }
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactComponent from './ContactComponent'
import First from "./First"
import AssestComponent from "./AssetsComponent"
import Dashboard from './Dashboard'
import Resoursec from './Resoursec'
import Archive from './Archive'
import Setting from './Setting'
import Support from './Support'
import Technicians from './Technicians'
import Jobcard from './Jobcard'
import Clients from './Clients'
import Users from './Users'
import SupportTicket from './SupportTicket'

import DashboardWorking from "./DashboardWorking"
import DashboardOpen from "./OpenFileDashboard"
import ToInvoice from "./ToInvoice"
import DashboardOnsiteTechnincFirst from "./OnSitePagefirst"
import DashboardonsitePageSecond from "./OnsitePageSecond"
import JobCard from "./JobCardsNextComponent"
import JobCardNext from "./JobCardsNextComponent"
import SiteOverview from "./Ster"
import StrelingInfotech from "./StrelingInfotech"
import Clientstest from "./ClientTest"
import JobClientAdd from "./JobClientAdd"
import Google from "./Google"
import AssetDetails1 from "./AssetDetails1"
import AssetsCPUComponent from "./AssetsCPUComponent"
import SupportTicketNext from "./SupportsTicketsnext"
import Login from "./login"
import  Register from  "./Register"
import ProtectedRoute from "./ProtectedRoute"



const router = createBrowserRouter([



    {
    path: "/",
    element: <Login />
  },

    {
   path: "/register",
   element: <Register />
  },
  {
   path: "/Dashboard",
    element: (
      <ProtectedRoute>
        <First />
      </ProtectedRoute>
    ),

    
    children:[
      {
     index:true,
     element:<Dashboard/>
      },
      {
     path:"/Dashboard/contact",
     element:<ContactComponent/>
      },
      {
     path:"/Dashboard/assets",
     element:<AssestComponent/>
      },
      {
     path:"/Dashboard/resoursec",
     element:<Resoursec/>
      },
      {
     path:"/Dashboard/setting",
     element:<Setting/>
      },
      {
     path:"/Dashboard/support",
     element:<Support/>
      },
      {
     path:"/Dashboard/archive",
     element:<Archive/>
      },
      {
     path:"/Dashboard/jobcard",
     element:<Jobcard/>
      },
      {
     path:"/Dashboard/Technicians",
     element:<Technicians/>
      },
       {
     path:"/Dashboard/ToInvoice",
     element:<ToInvoice/>
      },
      {
     path:"/Dashboard/clients",
     element:<Clients/>
      },
      {
     path:"/Dashboard/users",
     element:<Users/>
      },
      {
      path:"/Dashboard/supportTicket",
      element:<SupportTicket/>
      },
      {
      path:"/Dashboard/DashboardWorking",
      element:<DashboardWorking/>
      },
        {
      path:"/Dashboard/DashboardOpen",
      element:<DashboardOpen/>
      },

        {
      path:"/Dashboard/DashboardOnsiteTechnincSecond",
      element:<DashboardOnsiteTechnincFirst/>
      },

        {
      path:"/Dashboard/DashboardonsitePageFirst",
      element:<DashboardonsitePageSecond/>
      },
         {
      path:"/Dashboard/JobCardNext",
      element:<JobCardNext/>
      },
      
          {
      path:"/Dashboard/SiteOverview",
      element:<SiteOverview/>
      },

          {
      path:"/Dashboard/StrelingInfotech",
      element:<StrelingInfotech/>
      },
          {
      path:"/Dashboard/Clientstest",
      element:<Clientstest/>
      },
           {
      path:"/Dashboard/JobClientAdd",
      element:<JobClientAdd/>
      },
            {
      path:"/Dashboard/Google",
      element:<Google/>
      },
             {
      path:"/Dashboard/AssetDetails1",
      element:<AssetDetails1/>
      },

               {
      path:"AssetsCPUComponent",
      element:<AssetsCPUComponent/>
      },
                 {
      path:"/Dashboard/SupportTicketNext",
      element:<SupportTicketNext/>
      },
      
    ]
  }
])



function App() {

  return (
    <>

     <RouterProvider router={router}/>


    </>
  );
}

export default App