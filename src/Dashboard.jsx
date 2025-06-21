// import React from "react";
// import { LuPencil } from "react-icons/lu";
// import { Link } from "react-router-dom";

// const Dashboard = () => {
//   return (
//     <>
    
//       <div className="mt-25 w-[96%]">
//         <h1 className="text-2xl mt-[4%] font-bold mb-6">Dashboard</h1>
//         <div>
//           <div className="p-6 bg-white  border border-gray-300 rounded-xl shadow-md">
//             <h2 className="text-lg font-semibold mb-4">My Tickets</h2>
//             <div className="overflow-x-auto">
//               <table className="min-w-full text-sm text-left border-collapse">
//                 <thead>
//                   <tr className="bg-sky-100 text-[#254a9c] ">
//                     <th className="px-4 py-3 font-semibold">Ticket No.</th>
//                     <th className="px-4 py-3 font-semibold">Client Name</th>
//                     <th className="px-4 py-3 font-semibold">Client Site</th>
//                     <th className="px-4 py-3 font-semibold">Asset</th>
//                     <th className="px-4 py-3 font-semibold">Job Title</th>
//                     <th className="px-4 py-3 font-semibold">Age</th>
//                     <th className="px-4 py-3 font-semibold">Technicians</th>
//                     <th className="px-4 py-3 font-semibold">Status</th>
//                     <th className="px-4 py-3 font-semibold"></th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-gray-700 ">
//                   <tr className="border-t border-gray-300 leading-8">
//                     <td className="px-4 py-3">10005</td>
//                     <td className="px-4 py-3">Sterling Infotech</td>
//                     <td className="px-4 py-3">sterling</td>
//                     <td className="px-4 py-3">Testing1</td>
//                     <td className="px-4 py-3">Event - 22th Aug</td>
//                     <td className="px-4 py-3">252 Days</td>
//                     <td className="px-4 py-3">
//                       <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
//                         U
//                       </div>
//                     </td>
//                     <td className="pt-[20px]">
//                       <Link to="/DashboardonsitePageFirst">
//                         <button className="bg-[#629C44] w-[125px]   text-white   rounded-md text-8   block text-center">
//                           On-site Technician
//                         </button>
//                       </Link>
//                     </td>
//                     <td className="px-4 py-3">
//                       <Link to="/DashboardonsitePageFirst">
//                         <button className="p-1 border rounded hover:bg-gray-100">
//                           <LuPencil />
//                         </button>
//                       </Link>
//                     </td>
//                   </tr>

//                   <tr className="border-t  border-gray-300 ">
//                     <td className="px-4 py-3">10003</td>
//                     <td className="px-4 py-3">Sterling Infotech</td>
//                     <td className="px-4 py-3">Client Site</td>
//                     <td className="px-4 py-3">test</td>
//                     <td className="px-4 py-3">Event - 25th Aug</td>
//                     <td className="px-4 py-3">261 Days</td>
//                     <td className="px-4 py-3">
//                       <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
//                         U
//                       </div>
//                     </td>
//                     <td className="pt-[20px]">
//                        <Link to="/DashboardOnsiteTechnincSecond">
//                         <button className="bg-[#629C44] w-[126px]   text-white  p-1.5  rounded-md text-11   block text-center">
//                           On-site Technician
//                         </button>
//                       </Link>
//                     </td>
//                     <td className="px-4 py-3">
//                       <Link to="/DashboardOnsiteTechnincSecond">
//                         <button className="p-1 border rounded hover:bg-gray-100">
//                           <LuPencil />
//                         </button>
//                       </Link>
//                     </td>
//                   </tr>

//                   <tr className="border-t  border-gray-300 h-8">
//                     <td className="px-4 py-6">10002</td>
//                     <td className="px-4 py-6">Sterling Infotech</td>
//                     <td className="px-4 py-6">Client Site</td>
//                     <td className="px-4 py-6">test</td>
//                     <td className="px-4 py-6">Event - 25th Aug</td>
//                     <td className="px-4 py-6">261 Days</td>
//                     <td className="px-4 py-6">
//                       <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
//                         U
//                       </div>
//                     </td>
//                     <td className="">
//                       <Link to="/DashboardWorking">
//                         <button className="bg-yellow-400 w-[80px] text-white  py-2 rounded-md text-10  block text-center">
//                           Working
//                         </button>
//                       </Link>
//                     </td>
//                     <td className="px-4 py-3">
//                       <Link to="/DashboardWorking">
//                         <button className="p-1 border rounded hover:bg-gray-100">
//                           <LuPencil />
//                         </button>
//                       </Link>
//                     </td>
//                   </tr>

//                   <tr className="border-t  border-gray-300">
//                     <td className="px-4 py-3">10001</td>
//                     <td className="px-4 py-3">Sterling Infotech</td>
//                     <td className="px-4 py-3">Client Site</td>
//                     <td className="px-4 py-3">test</td>
//                     <td className="px-4 py-3">Event - 25th Aug</td>
//                     <td className="px-4 py-3">280 Days</td>
//                     <td className="px-4 py-3">
//                       <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
//                         U
//                       </div>
//                     </td>
//                     <td className=" ">
//                       <Link to="/DashboardOpen">
//                         <span className="bg-yellow-400 w-[50px] text-white px-2 py-1 rounded-md text-10 block text-center">
//                           Open
//                         </span>
//                       </Link>
//                     </td>
//                     <td className="px-4 py-3">
//                       <Link to="/DashboardOpen">
//                         <button className="p-1 border rounded hover:bg-gray-100">
//                           <LuPencil />
//                         </button>
//                       </Link>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;







import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";
import DashboardWorking from "./DashboardWorking";
import Dashboardonsit from "./OnsitePageSecond";
import OpenFileDashboard from "./OpenFileDashboard";


const Dashboard = () => {
  const [showPage, setShowPage] = useState("dashboard");

  if (showPage === "onsite") return <Dashboardonsit />;
  if (showPage === "openfile") return <OpenFileDashboard />;
  if (showPage === "DashboardWorking") return <DashboardWorking />;


  return (
    <>
      <div className="mt-25 w-[96%]">
        <h1 className="text-2xl mt-[4%] font-bold mb-6">Dashboard</h1>
        <div className="p-6 bg-white border border-gray-300 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">My Tickets</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-sky-100 text-[#254a9c]">
                  <th className="px-4 py-3 font-semibold">Ticket No.</th>
                  <th className="px-4 py-3 font-semibold">Client Name</th>
                  <th className="px-4 py-3 font-semibold">Client Site</th>
                  <th className="px-4 py-3 font-semibold">Asset</th>
                  <th className="px-4 py-3 font-semibold">Job Title</th>
                  <th className="px-4 py-3 font-semibold">Age</th>
                  <th className="px-4 py-3 font-semibold">Technicians</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold"></th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t border-gray-300 leading-8">
                  <td className="px-4 py-3">10005</td>
                  <td className="px-4 py-3">Sterling Infotech</td>
                  <td className="px-4 py-3">Sterling</td>
                  <td className="px-4 py-3">Testing1</td>
                  <td className="px-4 py-3">Event - 22th Aug</td>
                  <td className="px-4 py-3">252 Days</td>
                  <td className="px-4 py-3">
                    <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">U</div>
                  </td>
                  <td className="pt-[20px]">
                    <button
                      className="bg-[#629C44] w-[125px] text-white rounded-md text-sm py-1"
                      onClick={() => setShowPage("onsite")}
                    >
                      On-site Technician
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button className="p-1 border rounded hover:bg-gray-100">
                      <LuPencil onClick={() => setShowPage("onsite")} />
                    </button>
                  </td>
                </tr>

                <tr className="border-t border-gray-300">
                  <td className="px-4 py-3">10003</td>
                  <td className="px-4 py-3">Sterling Infotech</td>
                  <td className="px-4 py-3">Client Site</td>
                  <td className="px-4 py-3">test</td>
                  <td className="px-4 py-3">Event - 25th Aug</td>
                  <td className="px-4 py-3">261 Days</td>
                  <td className="px-4 py-3">
                    <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">U</div>
                  </td>
                  <td className="pt-[20px]">
                    <button
                      className="bg-[#629C44] w-[126px] text-white p-1.5 rounded-md text-sm"
                      onClick={() => setShowPage("onsite")}
                    >
                      On-site Technician
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button className="p-1 border rounded hover:bg-gray-100">
                      <LuPencil onClick={() => setShowPage("onsite")} />
                    </button>
                  </td>
                </tr>

                <tr className="border-t border-gray-300">
                  <td className="px-4 py-6">10002</td>
                  <td className="px-4 py-6">Sterling Infotech</td>
                  <td className="px-4 py-6">Client Site</td>
                  <td className="px-4 py-6">test</td>
                  <td className="px-4 py-6">Event - 25th Aug</td>
                  <td className="px-4 py-6">261 Days</td>
                  <td className="px-4 py-6">
                    <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">U</div>
                  </td>
                  <td>
                    <button
                      className="bg-yellow-400 w-[80px] text-white py-2 rounded-md text-sm"
                      onClick={() => setShowPage("openfile")}
                    >
                      Working
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button className="p-1 border rounded hover:bg-gray-100">
                      <LuPencil onClick={() => setShowPage("openfile")} />
                    </button>
                  </td>
                </tr>

                <tr className="border-t border-gray-300">
                  <td className="px-4 py-3">10001</td>
                  <td className="px-4 py-3">Sterling Infotech</td>
                  <td className="px-4 py-3">Client Site</td>
                  <td className="px-4 py-3">test</td>
                  <td className="px-4 py-3">Event - 25th Aug</td>
                  <td className="px-4 py-3">280 Days</td>
                  <td className="px-4 py-3">
                    <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">U</div>
                  </td>
                  <td>
                    <span className="bg-yellow-400 w-[50px] text-white px-2 py-1 rounded-md text-sm block text-center"       onClick={() => setShowPage("DashboardWorking")}>
                      Open
                    </span   >
                  </td>
                  <td className="px-4 py-3">
                    <button className="p-1 border rounded hover:bg-gray-100">
                      <LuPencil        onClick={() => setShowPage("DashboardWorking")}/>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

